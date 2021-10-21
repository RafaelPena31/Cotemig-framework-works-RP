import axios from "axios";

const apiDigimon = axios.create({
  baseURL: "https://digimon-api.herokuapp.com/api",
});

export default apiDigimon;
