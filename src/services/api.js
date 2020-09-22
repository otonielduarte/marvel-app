import { URL_API, PRIVATE_KEY, PUBLIC_KEY as apikey } from "../util/Constants";
import Axios from "axios";
import md5 from "md5";

const getParams = (page = 0, name = null) => {
    const ts = new Date().getTime();
    const hash = md5(ts + PRIVATE_KEY + apikey)
    return {
        nameStartsWith: name,
        apikey,
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

const api = Axios.create({ baseURL: URL_API });
api.interceptors.request.use(config => {
    config.headers = {
        'Accept': '*/*'
    };
    return config;
},
    error => Promise.reject(error)
);
