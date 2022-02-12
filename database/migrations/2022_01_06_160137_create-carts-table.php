<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('carts', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('product_id');
            $table->unsignedInteger('quantity');
            $table->unsignedInteger('price');
            $table->unsignedInteger('user_id');
            $table->string('selected_photo_leftWheel_name', 100)->nullable();
            $table->string('selected_photo_rightWheel_name', 100)->nullable();
            $table->string('selected_photo_chair_name', 100)->nullable();
            $table->string('selected_photo_body_name', 100)->nullable();
            $table->string('selected_photo_saddle_name', 100)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
