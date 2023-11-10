import { Country } from "./countries";

export type CountryContextType = {
  countries: Country[];
  loading: boolean;
  search: (text:string | null) => void;
};

export type ProviderType = {
    children: React.ReactNode
}


export const initialState = {
    countries: [],
    loading: true,
    search: () => {}
}