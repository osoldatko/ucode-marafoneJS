class HardWorker {
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(ages) {
        if (ages < 1 || value >= 100) {
            return;
        }
        this._age = ages;
    }
    get salary() {
        return this._salary;
    }
    set salaty(salat) {
        if (value < 100 || value >= 100) {
            return;
        }
        this._salaty = salat;
    }
    toObject() {
        return {
            name: this.name,
            age: this.age,
            salary: this.salary
        }
    }
}