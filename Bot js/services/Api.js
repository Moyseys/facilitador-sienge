export default class Api {
    constructor(apiUrl, apiKey, user) {
        this.url = apiUrl
        this.key = apiKey
        this.user = user
    }

    async getCreditorById(id) {
        try {
            const header = new Headers()
            const auth = btoa(`${this.user}:${this.key}`)

            header.set("Authorization", `Basic ${auth}`)

            const response = await fetch(`${this.url}/creditors/${Number(id)}`, {
                headers: header
            })
            const responseJson = await response.json()

            return responseJson
        } catch (error) {
            console.error(error)
        }
    }

    async getCreditor(cpf = '', cnpj = '', creditor = '', limit = 100, offset = 0) {
        try {
            const header = new Headers();
            const auth = btoa(`${this.user}:${this.key}`);
    
            header.set("Authorization", `Basic ${auth}`);
    
            let url = `${this.url}/creditors?`;
            if (cpf) url += `cpf=${cpf}&`;
            if (cnpj) url += `cnpj=${cnpj}&`;
            if (creditor) url += `creditor=${creditor}&`;
            if (limit) url += `limit=${limit}&`;
            if (offset) url += `offset=${offset}&`;
    
            if (url.endsWith('&')) {
                url = url.slice(0, -1);
            }
            
            const response = await fetch(url, {
                headers: header
            });
            const responseJson = await response.json();
    
            return responseJson;
        } catch (error) {
            console.error(error);
        }
    }    

    async updateCreditorNumber(creditorId, contactId, data) {
        try {
            const header = new Headers()
            const auth = btoa(`${this.user}:${this.key}`)
            header.set("Authorization", `Basic ${auth}`)

            const response = await fetch(`${this.url}/creditors/${creditorId}/contact/${contactId}`, {
                method: 'PATCH',
                header,
                body: JSON.stringify(data)
            });
            const responseJson = await response.json();
            console.log(responseJson)
        } catch (error) {
            console.error(`ERRO DE UPDATE: ${error.message}`)
            throw error;
        }
    }
}