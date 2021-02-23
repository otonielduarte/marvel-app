import React, { useCallback, useState } from 'react';
import { useSearch } from '../../context/context';
import Character from '../Character';

const List: React.FC = () => {
  const [selected, setSelected] = useState<number>(-1);
  const { characters, loading } = useSearch();

  const handleClick = useCallback(
    index => {
      selected === index ? setSelected(-1) : setSelected(index);
    },
    [selected],
  );

  return loading ? (
    <div className="text-center">Loading...</div>
  ) : (
    <>
      {characters.length === 0 && (
        <section className="text-center">
          Ops, não conseguimos encontrar nenhum resultado :(
        </section>
      )}
      {characters.map((character, index) => (
        <Character
          handleClick={() => handleClick(index)}
          active={index === selected}
          character={character}
          key={`character${character.name}`}
        />
      ))}
    </>
  );
};

export default List;
