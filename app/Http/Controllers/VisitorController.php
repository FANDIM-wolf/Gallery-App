<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Visitor;
use Illuminate\Support\Facades\Validator;
class VisitorController extends Controller
{
    public function store(Request $request){
        $visitor = new Visitor;
        $visitor->name = $request->name;
        $visitor->phone = $request->phone;
        $visitor->email = $request->email;
        $visitor->course = $request->course;
        $visitor->save();
        return response()->json([
            'status' =>200,
            'message' => "User added successfully",
        ]);
    }
}
