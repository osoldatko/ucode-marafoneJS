var dataBase = require('./db.js');

module.exports = class Model {
    constructor(attributes) {
        this.attributes = attributes;
    }

    async find (id) {
        const db = dataBase.connectDB();
        let selectQuery = `SELECT * FROM ${this.attributes} WHERE id = ${id}`;
        const res = await db.promise().query(selectQuery);
        db.end();
        return res[0];
    }

    async delete (id) {
        if (this.find(id).length == 0) {
            return false;
        }

        const db = dataBase.connectDB();
        let deleteQuery = `DELETE from ${this.attributes} where id = ${id}`;
        const res = await db.promise().query(deleteQuery);
        db.end();

        return res[0];
    }

    async save (insertObject) {
        let keys = '';
        let values = '';
        let i = 0;
        let query;

        if (!insertObject.id) {
            for (const key in insertObject) {
                if (key == 'id') {
                    i++;
                    continue;
                }
                
                keys += key;
                values += '"' + insertObject[key] + '"';
    
                if (i != Object.keys(insertObject).length - 1) {
                    values += ", ";
                    keys += ", ";
                }
                i++;   
            }

            query =`INSERT INTO ${this.attributes} (${keys}) VALUES (${values});`;
        }
        else {
            for (const key in insertObject) {
                if (key == 'id') {
                    i++;
                    continue;
                }
                
                values += key + ' = "' + insertObject[key] + '"';
    
                if (i != Object.keys(insertObject).length - 1) {
                    values += ", ";
                }
                i++;

                query = `UPDATE ${this.attributes} SET ${values} WHERE id = ` + insertObject.id + ';';
            }
        }
        
        const db = dataBase.connectDB();
        const res = await db.promise().query(query);
        db.end();

        return res[0];
    }
}
