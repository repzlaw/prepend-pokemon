import React,{useState,useEffect} from 'react';
import '../Assets/Style.css'
import {Spinner,Container,Row,Col,Card,Badge,Button,Modal} from 'react-bootstrap'

const Edit = (props) => {
    const [identifier,setIdentifier] = useState(props.pokemon.identifier);
    const [species_id,setSpecies_id] = useState(props.pokemon.species_id);
    const [height,setHeight] = useState(props.pokemon.height);
    const [weight,setWeight] = useState(props.pokemon.weight);
    const [base_experience,setBase_experience] = useState(props.pokemon.base_experience);
    const [order,setOrder] = useState(props.pokemon.order);
    const [is_default,setIs_default] = useState(props.pokemon.is_default);
    const errors =props.errors ?? [];

    const identifierHandler = (e)=>{
        setIdentifier(e.target.value)
    }
    const speciesHandler = (e)=>{
        setSpecies_id(e.target.value)
    }
    const heightHandler = (e)=>{
        setHeight(e.target.value)
    }
    const weightHandler = (e)=>{
        setWeight(e.target.value)
    }
    const baseHandler = (e)=>{
        setBase_experience(e.target.value)
    }
    const orderHandler = (e)=>{
        setOrder(e.target.value)
    }
    const isdefaultHandler = (e)=>{
        setIs_default(e.target.value)
    }

    const EditPokemonHandler = (e)=>{
        e.preventDefault()
        // console.log(props)
        props.onEdit(props.pokemon.id, identifier,species_id,height,
            weight,base_experience,order,is_default)
    }

    return (
        <Modal
        show={props.show} onHide={props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Pokemon
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={EditPokemonHandler}>
            <Modal.Body>
                
                <div>
                    <div className="form-group">
                        <div className='text-danger'>
                            {errors.length>0 &&errors.map(err=>{
                                return <li className='list' key={err}>{err}</li>
                            })}
                        </div>
                        <div className="input-group mb-2" >
                            <div className="input-group-prepend">
                                <span className="input-group-text"> Identifier</span>
                            </div>
                            <input type="text" value={identifier} className="form-control"  onChange={identifierHandler} required />
                        </div>
                        <div className="input-group mb-2" >
                            <div className="input-group-prepend">
                                <span className="input-group-text"> species_id</span>
                            </div>
                            <input type="text" value={species_id} className="form-control" onChange={speciesHandler} required />
                        </div>
                        <div className="input-group mb-2" >
                            <div className="input-group-prepend">
                                <span className="input-group-text"> height</span>
                            </div>
                            <input type="text" value={height} className="form-control"  onChange={heightHandler} required />
                        </div>
                        <div className="input-group mb-2" >
                            <div className="input-group-prepend">
                                <span className="input-group-text"> weight</span>
                            </div>
                            <input type="text" value={weight} className="form-control"  onChange={weightHandler} required />
                        </div>
                        <div className="input-group mb-2" >
                            <div className="input-group-prepend">
                                <span className="input-group-text"> base_experience</span>
                            </div>
                            <input type="text" value={base_experience} className="form-control"  onChange={baseHandler} required />
                        </div>
                        <div className="input-group mb-2" >
                            <div className="input-group-prepend">
                                <span className="input-group-text"> order</span>
                            </div>
                            <input type="text" value={order} className="form-control"  onChange={orderHandler} required />
                        </div>
                        <div className="input-group mb-2" >
                            <div className="input-group-prepend">
                                <span className="input-group-text"> is_default</span>
                            </div>
                            <input type="text" value={is_default} className="form-control"  onChange={isdefaultHandler} required />
                        </div>
                        
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
            <button type="submit" className="btn btn-success float-end" >Update  </button>

            </Modal.Footer>
        </form>

      </Modal>
    );
}

export default Edit;

