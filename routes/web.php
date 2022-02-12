<?php

use App\Http\Controllers\BicycleController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CommentController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/dashboard', function () {
    $cart = auth()->user()->getCartForRedux();
//    $comment = auth()->user()->getComment();
    /**
    Partial reloads
    Never included on first visit
    Optionally included on partial reloads
    Always evaluated
     **/
    return Inertia::render('Dashboard', [
        'comment' => Inertia::lazy(function () {
            $comment = auth()->user()->getComment();
            return $comment;
        }),
        "bicycles" => \App\Models\Bicycle::all(),
//       "comment" => $comment,
//        "comment" => \App\Models\Comment::all(),
        "cart" => $cart
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('bicycle', [BicycleController::class, 'index'])->name('bicycle');
Route::get('bicycle/create', [BicycleController::class, 'create'])->name('bicycle.create');
Route::post('bicycle', [BicycleController::class, 'store'])->name('bicycle.store');
Route::get('bicycle/{bicycle}/edit', [BicycleController::class, 'edit'])->name('bicycle.edit');
Route::put('bicycle/{bicycle}', [BicycleController::class, 'update'])->name('bicycle.update');
Route::delete('bicycle/{bicycle}', [BicycleController::class, 'destroy'])->name('bicycle.destroy');
Route::put('bicycle/{bicycle}/restore', [BicycleController::class, 'restore'])->name('bicycle.restore');


Route::get('cart', [CartController::class, 'index'])->name('cart');
Route::post('cart', [CartController::class, 'store'])->name('cart.store');


Route::get('comment', [CommentController::class, 'index'])->name('comment');
Route::get('comment/create', [CommentController::class, 'create'])->name('comment.create');
Route::post('comment', [CommentController::class, 'store'])->name('comment.store');
Route::get('comment/{bicycle}/edit', [CommentController::class, 'edit'])->name('comment.edit');
Route::put('comment/{bicycle}', [CommentController::class, 'update'])->name('comment.update');
Route::delete('comment/{bicycle}', [CommentController::class, 'destroy'])->name('comment.destroy');
Route::put('comment/{bicycle}/restore', [CommentController::class, 'restore'])->name('comment.restore');


require __DIR__ . '/auth.php';
