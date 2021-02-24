import React, { useMemo } from 'react';
import './Character.scss';

import { Character } from '../../models/interfaces';

interface CharacterProps {
  character: Character;
  active: boolean;
  handleClick(): void;
}

const CharacterComponent: React.FC<CharacterProps> = ({
  character,
  active,
  handleClick,
}) => {
  const defaultThumbanail = useMemo(() => {
    const { thumbnail } = character;
    return `${thumbnail.path}/standard_medium.${thumbnail.extension}`;
  }, [character]);

  const largeThumbanail = useMemo(() => {
    const { thumbnail } = character;
    return `${thumbnail.path}/landscape_amazing.${thumbnail.extension}`;
  }, [character]);

  return (
    <section className="CharacterComponent">
      <header className="accordion" onClick={handleClick}>
        <div className="capsule">
          <img src={defaultThumbanail} alt={character.name} />
        </div>
        <div className="block-1">
          <p className="character-name">{character.name}</p>
        </div>
        <div className="block-2">
          {character.series.items
            .filter((item, index) => index < 3)
            .map(serie => (
              <small key={`serie_${JSON.stringify(serie)}`}>{serie.name}</small>
            ))}
        </div>
        <div className="block-3">
          {character.events.items
            .filter((item, index) => index < 3)
            .map(event => (
              <small key={`event_${JSON.stringify(event)}`}>{event.name}</small>
            ))}
        </div>
      </header>
      <div className={`panel ${active ? 'active' : ''}`}>
        <div className="capsule">
          <img src={largeThumbanail} alt={character.name} />
        </div>
        <p className="text-name">{character.name}</p>
        <div className="content">
          <div className="block-1">
            Stories
            {character.stories.items.map(storie => (
              <small key={`ac_storie${JSON.stringify(storie)}`}>
                {storie.name}
              </small>
            ))}
          </div>
          <div className="block-2">
            Series
            {character.series.items.map(serie => (
              <small key={`ac_serie_${JSON.stringify(serie)}`}>
                {serie.name}
              </small>
            ))}
          </div>
          <div className="block-3">
            Events
            {character.events.items.map(event => (
              <small key={`ac_event_${JSON.stringify(event)}`}>
                {event.name}
              </small>
            ))}
          </div>
          <div className="block-4">
            Events
            {character.comics.items.map(comic => (
              <small key={`comic_${JSON.stringify(comic)}`}>{comic.name}</small>
            ))}
          </div>
        </div>
        <div className="see-more">
          {character.urls.map(url => (
            <a
              key={`character-key-${url.url}${url.type}`}
              href={url.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {url.type}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharacterComponent;
