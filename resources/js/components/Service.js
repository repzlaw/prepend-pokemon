import Axios from 'axios'

import BASE_URL from '../Constant.js'

//get all pokemon
export const getAllPokemons = async ()=>{
  const token = localStorage.getItem('token');
  try{
    const { status, data } =   await Axios.get(`${BASE_URL}/pokemons`,
      { headers: {"Authorization" : `Bearer ${token}`} }
    );

    return {
      status,
      data
    };
  }
  catch(error){
    const {data:{message},status}=error.response
    return {
        status,
        message,
    }
  }
}

//get single pokemon
export const getsinglePokemon = async (id)=>{
  const token = localStorage.getItem('token');
  try{
    const { status, data } =   await Axios.get(`${BASE_URL}/pokemons/${id}`,
    { headers: {"Authorization" : `Bearer ${token}`} });
    return {
      status,
      data
    };
  }
  catch(error){
    const {data:{message},status}=error.response
    return {
        status,
        message,
    }
  }
}

//update pokemon
export const updatePokemon =  async(id,identifier,species_id,height,weight,base_experience,order,is_default)=> {
  const token = localStorage.getItem('token');
  try{
      const pokemon = {
        identifier: identifier,
        species_id: species_id,
        height: height,
        weight: weight,
        base_experience: base_experience,
        order: order,
        is_default: is_default,
      }
        const {data:{message,status,data}} =   await Axios.put(`${BASE_URL}/pokemons/${id}`,pokemon,
        { headers: {"Authorization" : `Bearer ${token}`} });
        return {
            status,
            data,
            message
          };
      }
      catch(error){
        const  {status, data:{errors}} =error.response
        return {
          status,
          errors
        }
  }
}
