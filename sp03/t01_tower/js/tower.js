class Tower extends Building {
    get hasElevator() {
        return this._hasElevator
    }
    set hasElevator(value) {
        this._hasElevator = value
    }
    get arcCapacity() {
        return this._arcCapacity
    }
    set arcCapacity(value) {
        this._arcCapacity = value
    }
    get height() {
        return this._height
    }
    set height(value) {
        this._height = value
    }
    getFloorHeight() {
        return this.height / this.floors
    }
    toString() {
        return [
            `Floors: ${this.floors}`,
            `Material: ${this.material}`,
            `Address: ${this.address}`,
            `hasElevator: ${this.hasElevator}`,
            `arcCapacity: ${this.arcCapacity}`,
            `height: ${this.height}`,
            `Floor height: ${this.getFloorHeight()}`,
        ].join('\n');
    }
}

