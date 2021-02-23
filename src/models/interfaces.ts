export interface PayloadApi {
  data: {
    results: Character[];
    offset: string;
    total: string;
  };
  attributionHTML: string;
  attributionText: string;
}

export interface AppContextProps {
  onSearch(textSearch: string): void;
  onPaginate(page: number): void;
  attributions: { attributionHTML: string; attributionText: string };
  characters: Character[];
  pageInfo: { page: string; total: string };
  loading: boolean;
}

export interface Character {
  id: string;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  comics: Details;
  series: Details;
  stories: Details;
  events: Details;
  urls: Url[];
}

interface Thumbnail {
  path: string;
  extension: string;
}

interface Details {
  items: Item[];
}

interface Item {
  name: string;
}

interface Url {
  type: string;
  url: string;
}
