<?php

namespace App\Http\Controllers;

use App\Http\Requests\BicycleUpdateRequest;
use App\Http\Resources\BicycleResource;
use App\Models\Bicycle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;


class BicycleController extends Controller
{
    public function index(): \Inertia\Response
    {
        $bicycle = Bicycle::all();
        return Inertia::render('Bicycle/Index', compact('bicycle'));
    }

    public function create(): \Inertia\Response
    {
        return Inertia::render('Bicycle/Create');

    }

    public function store(Request $request)
    {

        $updateData = $request->validate([
            'price' => 'required|max:255',
            'name'=> 'required|max:255',
            'description'=> 'required|max:255',
            'photo_leftWheel' => 'required|max:255',
            'photo_rightWheel' => 'required|max:255',
            'photo_chair' => 'required|max:255',
            'photo_body' => 'required|max:255',
            'photo_saddle' => 'required|max:255',
        ]);

        foreach ([
                     "photo_leftWheel",
                     "photo_rightWheel",
                     "photo_chair",
                     "photo_body",
                     "photo_saddle",
                 ] as $photo_column) {
            $file = $request->file($photo_column);
            if($file){
                $name = time() . $file->getClientOriginalName();
                $file->move('images', $name);
                $updateData[$photo_column] = $name;
            }
        }


        Bicycle::create($updateData);

        return Redirect::route('bicycle')->with('success', 'Organization created.');

    }

    public function edit(Bicycle $bicycle)
    {

        return Inertia::render('Bicycle/Edit',
            ['bicycle' => new BicycleResource($bicycle)]);
    }

    public function update(Bicycle $bicycle ,BicycleUpdateRequest $request)
    {
        $updatedData = $request->all();
        $bicycle->update(
            $request->validated()
        );

        return Redirect::route('bicycle')->with('success', 'Organization updated.');

    }
    public function destroy(Bicycle $bicycle): \Illuminate\Http\RedirectResponse
    {

        $bicycle->delete();
        return Redirect::back()->with('success', 'Bicycle deleted.');

    }

    public function restore(Bicycle $bicycle): \Illuminate\Http\RedirectResponse
    {
        $bicycle->restore();

        return Redirect::route('bicycle')->with('success', 'Bicycle restored.');

    }

}
