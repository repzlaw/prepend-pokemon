<?php

namespace App\Http\Controllers;

use App\Models\Pokemon;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Resources\PokemonResource;
use App\Http\Resources\SinglePokemonResource;

class PokemonController extends Controller
{
    use ApiResponse;

    /**
     * Only auth for "sanctum auth" guard are allowed
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // a better way might be to paginate the data
        $pokemons = Pokemon::all();

        return $this->success( PokemonResource::collection(($pokemons)),
                                'get pokemons request success',
                                Response::HTTP_OK
                            );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Pokemon $pokemon)
    {
        return $this->success( new SinglePokemonResource(($pokemon)),
                                'pokemon fetch success',
                                Response::HTTP_OK
                            );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
