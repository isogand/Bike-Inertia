<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class CartItemRule implements Rule
{
    /**
     * @var array
     */
    private $errors;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->errors = null;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $this->errors = YooHooStaticAuthorization::checkAvailableMetasForGroup($value);
        return count($this->errors) === 0;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return sprintf(":attribute consists of invalid meta keys : ( %s )",implode(', ',$this->errors));
    }
}
