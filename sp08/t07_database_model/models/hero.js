const Model = require('../model.js');

module.exports = class Hero extends Model {
    constructor (attributes) {
        super(attributes);
    }

    async find (id){
        const res = await super.find(id);
        this.id = res.id;
        this.name = res.name;
        this.description = res.description;
        this.class_role = res.class_role;
        this.race_id = res.race_id;
        return this;
    }

    async delete (id) {
        const res = await super.delete(id);
        if (!res) {
            return false;
        }
        else {
            this.id = undefined;
            this.name = undefined;
            this.race_id = undefined;
            this.description = undefined;
            this.class_role = undefined;
            return res;
        }
    }

    async save (insertObject) {
        const res = await super.save(insertObject);
        return res;
    }
}
