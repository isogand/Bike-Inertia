<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

/**
 * App\Models\Cart
 *
 * @property int $id
 * @property int $product_id
 * @property int $quantity
 * @property int $price
 * @property int $user_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Laravel\Sanctum\PersonalAccessToken[] $tokens
 * @property-read int|null $tokens_count
 * @method static \Illuminate\Database\Eloquent\Builder|Cart newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Cart newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Cart query()
 * @method static \Illuminate\Database\Eloquent\Builder|Cart whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cart whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cart wherePrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cart whereProductId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cart whereQuantity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cart whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cart whereUserId($value)
 * @mixin \Eloquent
 * @property string|null $selected_photo_leftWheel_name
 * @property string|null $selected_photo_rightWheel_name
 * @property string|null $selected_photo_chair_name
 * @property string|null $selected_photo_body_name
 * @property string|null $selected_photo_saddle_name
 * @property-read \App\Models\Bicycle|null $bicycle
 * @method static \Illuminate\Database\Eloquent\Builder|Cart whereSelectedPhotoBodyName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cart whereSelectedPhotoChairName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cart whereSelectedPhotoLeftWheelName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cart whereSelectedPhotoRightWheelName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cart whereSelectedPhotoSaddleName($value)
 */
class Cart extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'quantity',
        'price',
        'product_id',
        "user_id",
        'selected_photo_leftWheel_name',
        'selected_photo_rightWheel_name',
        'selected_photo_chair_name',
        'selected_photo_body_name',
        'selected_photo_saddle_name'
    ];

    public function bicycle(){
        return $this->hasOne(Bicycle::class,"id", "product_id");
    }

}
