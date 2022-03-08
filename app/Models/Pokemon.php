<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pokemon extends Model
{
    use HasFactory;
    protected $table = 'pokemons';
    public $timestamps = false;
    
    protected $fillable = [
        'identifier',
        'species_id',
        'height',
        'weight',
        'base_experience',
        'order',
        'is_default',
    ];
}
