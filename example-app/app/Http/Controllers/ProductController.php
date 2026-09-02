<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $products = Product::latest()->take(8)->get();
        
        return Inertia::render('welcome', [
            'products' => $products,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product): Response
    {
        return Inertia::render('products/show', [
            'product' => $product,
        ]);
    }
}
