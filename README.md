# PREPEND POKEMON APPLICATION

## DESCRIPTION

This application creates endpoints where authenticated users can view all pokemons, select to view a single one and also update a pokemon if there are any mistakes.
IT is a simple application and the authentication was handled with sanctum.

API built with laravel backend.

Front end with ReactJs

laravel react pokemon application

Created API endpoints for all features specified like :
- fetching all pokemon
- displaying a pokemon
- updating a pokemon

All features are working fine and the react components are also ready and functional

### POSSIBLE IMPROVEMENTS
The api/pokemons is currently returning all pokemons at a time, I think this can slow down the application and i would suggest returning a paginated data instead.

### HOW TO INSTALL

- Clone project to your local repository.

- copy env example file to .env

- RUN the following commands

- `composer install`

- `npm install`

- `php artisan migrate`

- `php artisan db:seed`

![POKEMON TEST APP](https://res.cloudinary.com/sirdavies/image/upload/v1646737537/Screen_Shot_2022-03-08_at_12.03.59_PM_wxxyzj.png)
