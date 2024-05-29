import fs from 'fs';
import csv from 'csv-parser';
import path from 'path';

class CreditorProcessor {
    constructor(inputFilePath, outputDir) {
        this.inputFilePath = inputFilePath;
        this.outputDir = outputDir;
        this.creditors = {};
    }

    async process() {
        await this.readCSV();
        this.writeFiles();
    }

    async readCSV() {
        return new Promise((resolve, reject) => {
            fs.createReadStream(this.inputFilePath)
                .pipe(csv({ separator: ';' }))
                .on('data', (data) => {
                    const { Credor, Telefone, Email } = data;
                    if (!this.creditors[Credor]) {
                        this.creditors[Credor] = [];
                    }
                    this.creditors[Credor].push({ Credor, Telefone, Email });
                })
                .on('end', () => {
                    resolve();
                })
                .on('error', (error) => {
                    reject(error);
                });
        });
    }

    writeFiles() {
        for (const [name, records] of Object.entries(this.creditors)) {
            // Remove registros duplicados
            const uniqueRecords = [...new Map(records.map(item => [item['Telefone'] + item['Email'], item])).values()];

            const jsonContent = JSON.stringify(uniqueRecords, null, 2);

            const sanitizedFileName = name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
            const jsonFilePath = path.join(this.outputDir, `${sanitizedFileName}.json`);

            fs.writeFileSync(jsonFilePath, jsonContent);

            console.log(`JSON file for ${name} written to ${jsonFilePath}`);
        }
    }
}

export default CreditorProcessor;
