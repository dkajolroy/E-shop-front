import axios from "axios";

export const baseUrl = "https://dummyjson.com";

export const fetcher = async (url: string) => {
  const { data } = await axios.get(url);
  return data;
};
