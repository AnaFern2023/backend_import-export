import { data } from "./cities.js";

export const filter1 = () => {
    return data.filter((city) => city.population > 100000);
};

export const filter2 = () => {
    return data.filter((city) => city.population < 100000);
};