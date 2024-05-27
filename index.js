import dotenv from 'dotenv';
dotenv.config();

class Api {
    constructor(apiUrl, apiKey, user) {
        this.url = apiUrl;
        this.key = apiKey;
        this.user = user;
    }

    async getCreditorById(id) {
        try {
            const header = new Headers()
            const auth = btoa(`${this.user}:${this.key}`)

            header.set("Authorization", `Basic ${auth}`)

            const response = await fetch(`${this.url}/creditors/${Number(id)}`, {
                headers: header
            });
            console.log(response.status);
            const responseJson = await response.json();

            return responseJson;
        } catch (error) {
            console.error(error);
        }
    }
}

const url = process.env.urlApi;
const key = process.env.apiKey;
const user = process.env.apiUser;

const api = new Api(url, key, user);
api.getCreditorById(1).then(result => console.log(result));
