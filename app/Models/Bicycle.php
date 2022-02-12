<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

/**
 * App\Models\Bicycle
 *
 * @property int $id
 * @property string|null $photo_leftWheel
 * @property string|null $photo_rightWheel
 * @property string|null $photo_chair
 * @property string|null $photo_body
 * @property string|null $photo_saddle
 * @property string|null $price
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string|null $name
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Laravel\Sanctum\PersonalAccessToken[] $tokens
 * @property-read int|null $tokens_count
 * @method static \Illuminate\Database\Eloquent\Builder|Bicycle newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Bicycle newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Bicycle query()
 * @method static \Illuminate\Database\Eloquent\Builder|Bicycle whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Bicycle whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Bicycle whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Bicycle wherePhotoBody($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Bicycle wherePhotoChair($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Bicycle wherePhotoLeftWheel($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Bicycle wherePhotoRightWheel($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Bicycle wherePhotoSaddle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Bicycle wherePrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Bicycle whereUpdatedAt($value)
 * @mixin \Eloquent
 * @property string|null $description
 * @method static \Illuminate\Database\Eloquent\Builder|Bicycle whereDescription($value)
 */
class Bicycle extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'price',
        'name',
        'description',
        'photo_leftWheel',
        'photo_rightWheel',
        'photo_chair',
        'photo_body',
        'photo_saddle',
    ];


    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function photo(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany('Photo:class', 'id', 'photo_id');
    }


}





