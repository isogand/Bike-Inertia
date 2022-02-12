<?php

namespace App\Http\Controllers;

use App\Http\Requests\BicycleUpdateRequest;
use App\Http\Resources\BicycleResource;
use App\Models\Bicycle;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;


class CommentController extends Controller
{
    /**
     *
     * Don't ever use this shit. okay?
     * @return \Inertia\Response
     */
//    public function index(Request $request): \Inertia\Response
//    {
////        dd($request->toArray());
//        $this->validate($request,[
//            'product_id'=>'request|max:255',
//        ]);
////        $comment = auth()->user()->getComment();
//        //dd($comment->toArray());
//        return Inertia::render('Comment/Index',[
//            "test"=>"ok",
//            'page'=> Inertia::lazy(function(){
////               dd(request()->all());
//                return["hi"];
//            })
//        ]);
////        return Inertia::render('Comment/Index', compact('comment'));
//    }
    public function index(Request $request): \Inertia\Response
    {
        $this->validate($request,[
            'product_id'=>'request|max:255',
        ]);
        $comment = auth()->user()->getComment();
//      dd($comment->toArray());
        return Inertia::render('Comment/Index', compact('comment'));
    }

    public function create(): \Inertia\Response
    {
        $comment = auth()->id();
        return Inertia::render('Comment/Create', compact('comment'));

    }

    public function store(Request $request)
    {

        $data = request()->validate([
            'comment' => 'required|max:255',
            'product_id' => 'required|max:255',
            'photo' => 'required|max:255',
        ]);
        $data['user_id'] = auth()->id();

        foreach (["photo"] as $photo_column) {
            $file = $request->file($photo_column);
            if($file){
                $name = time() . $file->getClientOriginalName();
                $file->move('images', $name);
                $data[$photo_column] = $name;
            }
        }
        Comment::create($data);

//           dd($request->toArray());
        return Redirect::route('dashboard')->with('success', 'Comment created.');

    }
}
