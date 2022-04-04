import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import useInputsearch from '../CustomHooks/InputSearch';
import styled from 'styled-components'

const Gallery = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 5px;
`

const Apirequest = () => {

    const [character, setCharacter] = useState([]);
    const { name, handleChange } = useInputsearch();
    const url = "https://rickandmortyapi.com/api/character"

    useEffect(() => {
        const getCharacters = async () => {
            // let allCharacters = [];

            await axios
                .get(url)
                .then((res) => {
                    setCharacter(res.data.results);
                })
        }
        getCharacters();
    }, [])

    

    console.log(character);
    return (
        <>

            {/* con character && nos aseguramos primero de que tenemos info en character */}
            <div>
                <input type='text' value={name} onChange={handleChange} />
                
                <Gallery >
                    {character && character
                        .filter((character) => character.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()))
                        .map(character => {
                            return (
                                <div key={character.id}>
                                    <img src={character.image} alt={character.name} />
                                    <p>{character.name}</p>
                                </div>
                            )
                        })}
                </Gallery>
            </div>
        </>
    );
}

export default Apirequest;
