import React, { useContext, useState } from 'react';
import  { useCharacters } from '../../context/context';
import Character from '../Character';

const List = (props) => {
    const [selected, setSelected] = useState(-1);
    const { state: { characters }, loading } = useCharacters();

    return loading ? <div className="text-center">Loading...</div> : characters.length > 1 ? characters.map((character, index) =>
        <Character
            handleClick={() => selected === index ? setSelected(-1) : setSelected(index)}
            active={index === selected}
            character={character}
            key={'character' + character.name} />) : <div className="text-center">
            Ops, não conseguimos encontrar nenhum resultado :(
        </div>
}

export default List;