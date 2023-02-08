export interface CountryDataModel {
  name: { official: string };
  population: number;
  capital: string[];
  latlng: number[];
  flags: { svg: string; alt: string };
}
