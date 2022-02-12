<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

/**
 * App\Models\User
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property string $password
 * @property int|null $role_id
 * @property string|null $address
 * @property string|null $country
 * @property string|null $zip_code
 * @property string|null $phone
 * @property string|null $photo
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Laravel\Sanctum\PersonalAccessToken[] $tokens
 * @property-read int|null $tokens_count
 * @method static \Database\Factories\UserFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|User filter(array $filters)
 * @method static \Illuminate\Database\Eloquent\Builder|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User orderByName()
 * @method static \Illuminate\Database\Eloquent\Builder|User query()
 * @method static \Illuminate\Database\Eloquent\Builder|User whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCountry($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePhoto($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRole($role)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRoleId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereZipCode($value)
 * @mixin \Eloquent
 * @property-read \App\Models\Comment|null $comment
 */
class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, Authorizable, HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role_id',
        'address',
        'country',
        'zip_code',
        'phone',
        'photo'
    ];

    protected $uploads = '/images/';


    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    /**
     * @var mixed
     */
    private $role_id;

    /**
     * @var mixed
     */


    public function isAdmin(): bool
    {
        return $this->role_id===1;
    }

    public function scopeOrderByName($query)
    {
        $query->orderBy('name');
    }

    public function scopeWhereRole($query, $role)
    {
        switch ($role) {
            case 'user': return $query->where('owner', false);
            case 'owner': return $query->where('owner', true);
        }
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('name', 'like', '%'.$search.'%')
                    ->orWhere('email', 'like', '%'.$search.'%');
            });
        })->when($filters['role'] ?? null, function ($query, $role) {
            $query->whereRole($role);
        })->when($filters['trashed'] ?? null, function ($query, $trashed) {
            if ($trashed === 'with') {
                $query->withTrashed();
            } elseif ($trashed === 'only') {
                $query->onlyTrashed();
            }
        });
    }

    public function getCartForRedux(){
        $cart = Cart::where('user_id', auth()->id())->select([
            "product_id", "quantity", "price"
        ])->with("bicycle", function($query){
            return $query->select(["name","id","photo_body","photo_leftWheel","photo_rightWheel","photo_chair","photo_saddle","description"]);
        })->get();

        return $cart->map(function ($item){

            $item['name'] = $item['bicycle']['name'];
            $item['description'] = $item['bicycle']['description'];
            $item['photo_body'] = $item['bicycle']['photo_body'];
            $item['photo_leftWheel'] = $item['bicycle']['photo_leftWheel'];
            $item['photo_rightWheel'] = $item['bicycle']['photo_rightWheel'];
            $item['photo_chair'] = $item['bicycle']['photo_chair'];
            $item['photo_saddle'] = $item['bicycle']['photo_saddle'];
           unset($item["bicycle"]);
//            dd($item->toArray());
           $item['totalPrice'] = $item['price'] * $item['quantity'];
            return $item;
        });
    }

    public function getComment(){
        $comment = Comment::where('product_id',request('product_id'))->select([
            "product_id","comment", "photo","user_id"
        ])->with("user", function($query){
            return $query->select(["photo","name","id"]);
        })->get();

        //      dd($comment->toArray());
        return $comment->map(function ($item){
            $item['photo'] = $item['user']['photo'];
            $item['name'] = $item['user']['name'];

            return $item;
        });
    }
}
//select entekhab beyne sotona database  dar asl filter mikone va kam mikone
//with  az yek jadval dige mire etelaiat migire  ba rabete migire do jadvalo michasbone be ham
//join









