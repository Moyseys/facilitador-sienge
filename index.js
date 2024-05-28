import Api from './services/Api.js'
import File from './services/File.js'
import CSV from './services/Csv.js';
import dotenv from 'dotenv';
dotenv.config();


const url = process.env.urlApi;
const key = process.env.apiKey;
const user = process.env.apiUser;

const api = new Api(url, key, user);
const csv = new CSV('cadastro credores.csv');
const file = new File()

// api.getCreditor('', '', '', 10).then(async (result) => {
//     console.log(result)
//     const data =  JSON.stringify(result)
//     file.writeFile('teste.json', data)
// });

csv.readRow(1002).then((result) => {
    console.log(result);

   
}).catch((error) => {
    console.error('Error reading row:', error);
});