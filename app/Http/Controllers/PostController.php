<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    function index()
    {
        return response(['status' => 'success', 'posts'=>Post::all(), 'code'=>200]);
    }
    function savePost(Request $request)
    {
        return response(['status' => 'success', 'post'=>'first', 'code'=>200]);
    }
}
