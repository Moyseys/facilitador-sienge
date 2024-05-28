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
const csv = new CSV('cadastro credores TRUE.csv');
const file = new File()

api.updateCreditorNumber(5277, 19, {

// async function findAndFixCreditors(){
//     let nextCreditor = await csv.findNextCreditor()
    
//     for(let i = 0; i < 3; i++){
//         if(!nextCreditor) {
//             console.log("Todos os credores foram corrigidos!!!!!!")
//             break
//         }
//         const { Credor, Documento, Lancamento, Telefone, CORRIGIDO } = nextCreditor
//         //Corrigir

//         //Alterar status no CSV
//         await csv.editCell(1, 1, 'TRUE')
//         //Salvar Json
        
//         nextCreditor = await csv.findNextCreditor()
//     }
// }


csv.editCell('credores.csv', 1, 'CORRIGIDO', 'TRUE')
    .then(() => console.log('Cell updated successfully'))
    .catch(err => console.error('Error updating cell:', err));
