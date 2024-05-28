import fs, { write } from 'fs'
import csv from 'csv-parser'
import { createObjectCsvWriter } from  'csv-writer'
import { Writable } from 'stream'

export default class CSV {
    constructor(filePath){
        this.filePath = filePath
    }

    readRow(row) {
        try {
            return new Promise((resolve, reject) => {
                let countRow = 0

                const readStream = fs.createReadStream(this.filePath)
                    .pipe(csv())
                    .on('data', (data) => {
                        countRow++
                        const entries = Object.entries(data)
                        
                        const colunm = (entries[0][0]).split(";")
                        const value = (entries[0][1]).split(';')
                        
                        if(countRow === row){
                            const valueFormated = colunm.reduce((ac, vl, i) => {
                                ac[vl] = value[i]
                                return ac
                            }, {})
                            resolve(valueFormated)
                            readStream.destroy()
                        }
                    })
                    .on('end', () => {
                        resolve(null)
                    })
                    .on('error', (error) => {
                        reject(new Error(error))
                    });
            })
        } catch (error) {
            console.error(error)
        }
    }

    findNextCreditor() {
        try {
            return new Promise((resolve, reject) => {
                let countRow = 0

                const readStream = fs.createReadStream(this.filePath)
                    .pipe(csv())
                    .on('data', (data) => {
                        countRow++
                        const entries = Object.entries(data)
                        
                        const colunm = (entries[0][0]).split(";")
                        const values = (entries[0][1]).split(';')

                        const correted = values[values.length - 1] === 'TRUE' 
        
                        if(!correted){
                            const valueFormated = colunm.reduce((ac, vl, i) => {
                                ac[vl] = values[i]
                                return ac
                            }, {})
                            resolve(valueFormated)
                            readStream.destroy()
                        }
                    })
                    .on('end', () => {
                        resolve(null)
                    })
                    .on('error', (error) => {
                        reject(new Error(error))
                    });
            })
        } catch (error) {
            console.error(error)
        }
    }

    editCell(row, colunm, newValue){
        return new Promise((resolve, reject) => {
            let records = []
            let header = []
            const readStream = fs.createReadStream(this.filePath)
                .pipe(csv())
                .on('data', (row) => {
                    console.log(row);
                    header = Object.keys(row)
                    records.push(row)
                })
                .on('end', () => {
                    const csvWriter = createObjectCsvWriter({
                        path: 'path/to/file.csv',
                        header: header.map((vl) => {
                            return {
                                id: vl,
                                title: vl
                            }
                        })
                    });
                    //console.log(header);
                    // csvWriter.writeRecords(records)
                    // console.log('CSV file successfully processed');
                })
                .on('error', (err) => {
                    console.error('Pipeline failed.', err);
                });
        })
    }
}
