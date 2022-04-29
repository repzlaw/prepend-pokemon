<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePokemonRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'identifier' => 'required|string',
            'species_id' => 'required|integer',
            'height' => 'required|integer',
            'weight' => 'required|integer',
            'base_experience' => 'required|integer',
            'order' => 'required|integer',
            'is_default' => 'required|integer',
        ];
    }
}
