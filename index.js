import Api from './services/Api.js'
import File from './services/File.js'
import CSV from './services/Csv.js';
import CreditorProcessor from './services/CreditorProcessor.js'
import dotenv from 'dotenv';
dotenv.config();


const url = process.env.urlApi;
const key = process.env.apiKey;
const user = process.env.apiUser;

const api = new Api(url, key, user);
const csv = new CSV('cadastro credores.csv');
const file = new File()

api.updateCreditorNumber(5277, 19, {

    "phoneDdd": "48",
    "phoneNumber": "944445555",
    "email": "cafeYcultor@gmail.com"

  }).then(async (result) => {
    console.log(result)
});


// csv.readRow(1).then((result) => {
//     console.log(result);


// }).catch((error) => {
//     console.error('Error reading row:', error);
// });