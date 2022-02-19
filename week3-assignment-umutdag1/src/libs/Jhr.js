import axios from "axios";

const Jhr = class {
    #url = null; // Private
    #method = null; // Private
    #options = null; // Private

    // Public
    constructor(url, method) {
        this.#url = url;
        this.#method = method.toUpperCase();
        this.#options = {};
    }

    // Public
    // It's Used When the Metod is One of POST, PUT etc.
    setData(data) {
        this.#options = {
            data : data,
            ...this.#options
        }
    }

    // Public
    // It's Used For Axios Properties (setHeaders etc.)
    setOption(key, value) {
        this.#options[key] = value;
    }

    // Public
    // It's Used For Requesting Data Via Axios
    fetchResponse() {
        const requestConf = { 
            url: this.#url, 
            method: this.#method, 
            ...this.#options 
        };

        return axios.request(requestConf);
    }
}

// Opening to Outside Environment
export default Jhr;