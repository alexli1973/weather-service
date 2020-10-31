export interface City {
  id?: number;
  name?: string;
  country?: string;
  coord?: Coord;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface WeatherData {
  temp: string;
  humidity: string;
  pressure: string;
  category: string;
  icon: string;
  city?: City;
}


