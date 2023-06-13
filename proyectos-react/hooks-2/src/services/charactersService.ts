import { API } from "./instance"

export const getCharacters = async () => {
  return await API.get("/character");  
};
