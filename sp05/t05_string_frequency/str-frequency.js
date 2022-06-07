module.exports=class StrFrequency {
    constructor(str) {
        this.str = str;
    }
    letterFrequencies() {
        return this.str.split("").reduce((pr, x, i, ar) => {
            x = x.toUpperCase();
            if (!x.match(/[A-Z]/))
                return pr;
            if (pr.hasOwnProperty(x))
                pr[x] += 1;
            else
                pr[x] = 1;
            return pr;
        }, {});
    }
    reverseString() {
        return this.str.split("").reverse().join("");
    }
    wordFrequencies() {
        if (this.str == "")
            return { "": 1 };
        return this.str.split(/\b/).reduce((pr, x, i, ar) => {
            x = x.toUpperCase();
            if (!x.match(/[A-Z]/))
                return pr;
            if (pr.hasOwnProperty(x))
                pr[x] += 1;
            else
                pr[x] = 1;
            return pr;
        }, {});
    }
}
