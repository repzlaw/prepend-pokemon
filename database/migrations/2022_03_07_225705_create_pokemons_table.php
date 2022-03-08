<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePokemonsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('pokemons') ) {
            Schema::create('pokemons', function (Blueprint $table) {
                $table->id();
                $table->string('identifier');
                $table->integer('species_id');
                $table->integer('height');
                $table->integer('weight');
                $table->integer('base_experience');
                $table->integer('order');
                $table->integer('is_default');
                $table->timestamps();
            });

        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pokemons');
    }
}
