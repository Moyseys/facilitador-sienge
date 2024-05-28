import fs from 'fs'

export default class File {

    async writeFile(fileName, data) {
        try {
            fs.writeFileSync(fileName, data)

            return true
        } catch (error) {
            console.error(error)
        }
    }
}
