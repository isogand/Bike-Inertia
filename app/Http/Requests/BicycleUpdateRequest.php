<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BicycleUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'photo_leftWheel' => ['required', 'max:100'],
            'photo_rightWheel' => ['nullable', 'max:200'],
            'photo_chair' => ['nullable', 'max:200'],
            'photo_body' => ['nullable', 'max:200'],
            'photo_saddle' => ['nullable', 'max:200'],
            'price' => ['nullable', 'max:200'],
            'description' => ['nullable', 'max:200'],
            'name' => ['required', 'max:200'],
        ];
    }
}
