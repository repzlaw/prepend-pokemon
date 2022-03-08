import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Button,Container} from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import  {getsinglePokemon, updatePokemon, } from '../Service';
import  Edit  from "./Edit";
import { useNavigate } from 'react-router-dom';

const Show = () => {
    const [pokemon,setPokemon] = useState({});
    const [modalShow, setModalShow] = React.useState(false);
    const navigate = useNavigate();

    const { id } = useParams();

    const EditPokemonHandler = async (id,identifier,species_id,height,weight,base_experience,order,is_default)=>{
        const response =  await updatePokemon(id,identifier,species_id,height,weight,base_experience,order,is_default)
        if (response.status === 422) {
            alert(response.errors.label[0])
    
        }
        if (response.status ==='success') {
            alert(response.message)
            window.location.reload()
        }
    }

    const fetchPokemon = async () => {
        const response = await getsinglePokemon(id)
        setPokemon(()=>{
            return response.data.data;
        });
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token){
            fetchPokemon();
        } else{
            navigate("/login");
        }

    }, []); 

    return (
        <div className="container" key={pokemon.id}>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header"> Pokemon
                            <Button variant="primary" className='float-end' onClick={() => setModalShow(true)}>
                                Edit
                            </Button>

                            <Edit
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                pokemon={pokemon}
                                onEdit={EditPokemonHandler}
                                />
                        </div>

                        <div className="card-body">
                            <div>
                                <p> <strong>identifier :</strong> {pokemon.identifier}</p>
                                <p> <strong>species_id :</strong> {pokemon.species_id}</p>
                                <p> <strong>height :</strong> {pokemon.height}</p>
                                <p> <strong>weight :</strong> {pokemon.weight}</p>
                                <p> <strong>base_experience :</strong> {pokemon.base_experience}</p>
                                <p> <strong>order :</strong> {pokemon.order}</p>
                                <p> <strong>is_default :</strong> {pokemon.is_default}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Show;


