<?php

namespace App\Providers;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        Builder::macro("sql", function ($overrideBindings = []) {
            $sql = $this->toSql();
            $bindings = $this->getBindings();
            $overrideBindings = $overrideBindings;
            collect($overrideBindings)->each(function ($item, $key) use (
                &$bindings
            ) {
                $bindings[$key] = $item;
            });

            return str_replace(
                '$',
                "%",
                vsprintf(
                    str_replace(
                        "?",
                        "%s",
                        str_replace("%", '$', $sql)
                    ),
                    collect($bindings)
                        ->merge($overrideBindings)
                        ->map(function ($binding) {
                            $binding = addslashes($binding);

                            return is_numeric($binding)
                                ? $binding
                                : "'{$binding}'";
                        })
                        ->toArray()
                )
            );
        });

    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
