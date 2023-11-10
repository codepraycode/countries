import { useContext } from "react";
import { CountryContext } from "../context";

export const useCountryContext = ()=>useContext(CountryContext);

