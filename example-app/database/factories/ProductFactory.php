<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Product;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $colors = ['bg-blue-100', 'bg-indigo-100', 'bg-purple-100', 'bg-sky-100', 'bg-teal-100', 'bg-rose-100'];
        
        return [
            'name' => fake()->words(3, true),
            'description' => fake()->paragraph(),
            'price' => fake()->randomFloat(2, 49, 999),
            'rating' => fake()->randomFloat(1, 3, 5),
            'image_color' => fake()->randomElement($colors),
        ];
    }
}
