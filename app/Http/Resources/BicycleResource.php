<?php
namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BicycleResource extends JsonResource
{

    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */

    public function toArray($request)
    {
//        dd($this);
        return [

            'id' => $this->id,
            'price' => $this->price,
            'photo_leftWheel' => $this->photo_leftWheel,
            'photo_rightWheel' => $this->photo_rightWheel,
            'photo_chair' => $this->photo_chair,
            'photo_body' => $this->photo_body,
            'photo_saddle' => $this->photo_saddle,

        ];
    }
}
