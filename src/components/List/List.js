import React, { useState } from 'react';
import { useSearch } from '../../context/context';
import Character from '../Character';

const List = (props) => {
  const [selected, setSelected] = useState(-1);
  const { characters, loading } = useSearch();

  return loading ? <div className="text-center">Loading...</div> : <>
    {
      characters.length === 0 &&
      <section className="text-center">
        Ops, não conseguimos encontrar nenhum resultado :(
        </section>
    }
    {characters.map((character, index) =>
      <Character
        handleClick={() => selected === index ? setSelected(-1) : setSelected(index)}
        active={index === selected}
        character={character}
        key={'character' + character.name} />)}
  </>
}

export default List;
