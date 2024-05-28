import fs from 'fs'
import csv from 'csv-parser'

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
}
