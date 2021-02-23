import Axios from "axios";
import md5 from "md5";

export const api = {
  async get(endpoint, page, name) {
    const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;
    const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
    const ts = new Date().getTime();
    const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY)
    return await baseApi.get(endpoint, {
      params: {
        nameStartsWith: name,
        apikey: PUBLIC_KEY,
        ts,
        hash,
        limit: 10,
        offset: page,
      }
    });
  }
}

const baseApi = Axios.create({
  baseURL: process.env.REACT_APP_URL_API,
  headers: {
    'Accept': '*/*'
  }
});
