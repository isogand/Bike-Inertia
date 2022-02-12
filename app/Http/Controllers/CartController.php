<?php

namespace App\Http\Controllers;


use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;


class CartController extends Controller
{

    public function index(): \Inertia\Response
    {
        $cart = auth()->user()->getCartForRedux();
//       dd($cart->toArray());
        return Inertia::render('Cart/Cart', compact('cart'));
    }

    /**
     * @throws ValidationException
     */
    public function store(Request $request)
    {
//        dd($request
//        ->all());
        $data = request()->validate([
            'items' => 'present|array',
            'items.*.price' => 'required|numeric',
            'items.*.product_id' => 'required|numeric',
            'items.*.quantity' => 'required|numeric',
//            'items.*.selected_photo_leftWheel_name' => 'required|numeric',
//            'items.*.selected_photo_rightWheel_name' => 'required|numeric',
//            'items.*.selected_photo_chair_name' => 'required|numeric',
//            'items.*.selected_photo_body_name' => 'required|numeric',
//            'items.*.selected_photo_saddle_name' => 'required|numeric',
        ]);

       Cart::where('user_id', auth()->id())->delete();
        $data['items'] = collect($data['items'])->map(function ($item) use ($request) {
            $item['user_id'] = auth()->id();

            return $item;
        })->toArray();

        Cart::insert($data['items']);


        return Redirect::back()->with('success', 'created.');

    }


}
