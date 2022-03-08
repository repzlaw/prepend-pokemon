import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Button,Container} from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import  {getAllPokemons,savePokemon, updatePokemon, getSortedPokemon, updatePokemonOrders} from '../Service';
import { useNavigate } from 'react-router-dom';
import { Audio } from  'react-loader-spinner'




const Index = () => {
    const [pokemons,setPokemons] = useState([]);
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();

    const fetchPokemons = async () => {
        setLoading(true);
        const response = await getAllPokemons()
        setPokemons(previousPokemons=>{
            return[...response.data.data]
        });
        setLoading(false);

    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token){
            fetchPokemons();
        } else{
            navigate("/login");
        }

    }, []); 

    if(loading){
       return <Audio
            height="100"
            width="100"
            color='grey'
            ariaLabel='loading'
        />
    }
    
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">All Pokemons</div>

                        <div className="card-body">
                            {pokemons.length > 0 && 
                                <div>
                                    <table className="table table-striped table-dark">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">identifier</th>
                                                <th scope="col">action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {pokemons.map((pokemon, index) => {
                                            return (
                                                <tr key={pokemon.id}>
                                                    <th scope="row">{index+1}</th>
                                                    <td>{pokemon.identifier}</td>
                                                    <td>
                                                        <Link className='link' to={`/edit-pokemon/${pokemon.id}`}>
                                                            <button type="button" className="btn btn-outline-light">View</button>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                        </tbody>
                                    </table>
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                </div>
                            }





                            
                            {/* {pokemons.length === 0 && 
                                <h6>No pokemon Found</h6>
                            
                            } */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;


