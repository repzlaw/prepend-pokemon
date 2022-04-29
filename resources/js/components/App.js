import React from 'react';
import ReactDOM from 'react-dom';
import {Container} from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Layouts/Header";
import PokemonList from "./Pokemons/Index";
import ShowPokemon from "./Pokemons/Show";
import NotFound from "./NotFound";
import Login from "./Auth/Login";

function App() {
    return (
        <div>
            <Router>
            <Header />
            <div>
                <Container className="p-4">
                <Routes>
                    <Route exact path="/" element={<PokemonList/>}/>
                    <Route exact path="/login" element={<Login/>}/>
                    <Route exact path={`/edit-pokemon/:id`}  element={<ShowPokemon/>}/>
                    <Route exact path="*" element={<NotFound/>}/>
                </Routes>
                </Container>
            </div>
            </Router>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
