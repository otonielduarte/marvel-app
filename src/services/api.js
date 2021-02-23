import Axios from "axios";
import md5 from "md5";

const getParams = (page = 0, name = null) => {
    const PRIVATE_KEY = process.env.PRIVATE_KEY;
    const PUBLIC_KEY = process.env.PUBLIC_KEY;
    const ts = new Date().getTime();
    const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY)
    return {
        nameStartsWith: name,
        apikey: PUBLIC_KEY,
        ts,
        hash,
        limit: 10,
        offset: page,
    }
}

export class ApiUtil {
    static async get(endpoint, page, name) {
        return await api.get(endpoint, { params: getParams(page, name) });
    }
}

const api = Axios.create({ baseURL: process.env.URL_API, headers: {
    'Accept': '*/*'
}  });
