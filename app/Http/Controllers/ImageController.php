<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ImageController extends Controller
{
    //
    /**
     * Fetch images
     * @param NA
     * @return JSON response
     */
    public function index() {
        $images = Image::all();
        return response()->json(["status" => "success", "count" => count($images), "data" => $images]);
    }

    /**
     * Fetch certain image 
     * @param $request
     * @return JSON response
     */
    public function get_photo(Request $request){
        $image_id = $request->key;

        $image = Image::findOrFail($image_id);
        return response()->json(["status" => "success", "count" => count($images), "data" => $image]);
    }
    /**
     * Upload Image
     * @param $request
     * @return JSON response
     */
    public function upload(Request $request) {
        $imagesName = [];
        $response = [];

        $validator = Validator::make($request->all(),
            [
                'images' => 'required',
                'images.*' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
            ]
        );

        if($validator->fails()) {
            return response()->json(["status" => "failed", "message" => "Validation error", "errors" => $validator->errors()]);
        }

        if($request->has('images')) {
            foreach($request->file('images') as $image) {
                $filename = time().rand(1,324135). '.'.$image->getClientOriginalExtension();
                $image->move('uploads/', $filename);

                Image::create([
                    'image_name' => $filename
                ]);
            }

            $response["status"] = "successs";
            $response["message"] = "Success! image(s) uploaded";
        }

        else {
            $response["status"] = "failed";
            $response["message"] = "Failed! image(s) not uploaded";
        }
        return response()->json($response);
    }


}
