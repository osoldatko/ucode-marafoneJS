module.exports = class Access {
    constructor(val) {
        this.mark_LXXXV = val;
    }
    get mark_LXXXV() {
        if (this._mark_LXXXV === undefined)
            return 'undefined';
        if (this._mark_LXXXV === null)
            return 'null';
        return this._mark_LXXXV;
    }
    set mark_LXXXV(val) {
        this._mark_LXXXV = val;
    }
}
