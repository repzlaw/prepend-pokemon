<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Requests\LoginRequest;
use App\Http\Resources\AuthResource;
use App\Http\Requests\StoreUserRequest;
use Illuminate\Support\Facades\Session;

class AuthController extends Controller
{
    use ApiResponse;
    
    public function index()
    {
        return response()->json([
            'message'=>'please set the request headers',
            'code'=>Response::HTTP_FORBIDDEN
        ],403);
    }

    //register user route
    public function register(StoreUserRequest $request)
    {
        $requestData = $request->validated();
        $requestData['password'] = bcrypt($request->password);
        $user = User::create($requestData);
        //generate access token
        $accessToken = $user->createToken('authToken');

        return response([ 'user' => (new AuthResource($user) ), 'access_token' => $accessToken->plainTextToken],201);
    }

    public function login(LoginRequest $request)
    {
        if (!auth()->attempt($request->validated())) {
            return $this->error(null,'Invalid Credentials',Response::HTTP_UNAUTHORIZED);
        }

        $user = User::where('email', $request->email)->first();
        //generate access token
        $accessToken = $user->createToken('authToken');
        
        return response()->json([
            'message'=>'login successfull',
            'user'=>(new AuthResource($user) ),
            'token'=>$accessToken->plainTextToken,
            'code'=>Response::HTTP_OK
        ],200);

    }

    /**
     * Logout the user.
     * 
     * @return \Illuminate\Http\RedirectResponse
     */
    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
        Session::flush();
        return $this->success(null, 'log out successful', 200);
    }
}
