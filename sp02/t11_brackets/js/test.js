describe("checkBrackets", () => {
    it("case { () }", function () {
        assert.equal(checkBrackets('()'), '0');
    });
    it("case.Undefined", function () {
        assert.equal(checkBrackets(undefined), '-1')
    })
    it("case.Nan", () => assert.equal(checkBrackets(NaN), '-1'))
    it("case.String", function () {
        assert.equal(checkBrackets('string'), '0')
    })
    it("case.Number", function () {
        assert.equal(checkBrackets(22), '0')
    })
    it("case.NULL", function () {
        assert.equal(checkBrackets(null), '0')
    })
    it("case { () )( }", function () {
        assert.equal(checkBrackets('() )( )('), '0');
    });
    it("case { ()()()()()()() }", function () {
        assert.equal(checkBrackets('()()()()()()()'), '0');
    });
    it("case { ()()string(string)) }", function () {
        assert.equal(checkBrackets('()()string(string))'), '0');
    });
    it("case { ()()()()() }", function () {
        assert.equal(checkBrackets('()()()()()()'), '0');
    });
    it("case { ([ }", function () {
        assert.equal(checkBrackets('()()()()()()()()'), '0');
    });
    it("case { ((((((((((hey)))))))))) }", function () {
        assert.equal(checkBrackets('((((((((((hey))))))))))'), '0');
    });
    it("case { ( ( ( ( ( ( ( }", function () {
        assert.equal(checkBrackets('( ( ( ( ( ( ( ('), '8');
    });
    it("case { (1) (2) (3) (4) }", function () {
        assert.equal(checkBrackets('(1) (2) (3) (4)'), '0');
    });
    it("case { )1( )2( }", function () {
        assert.equal(checkBrackets(')1( )2('), '2');
    });
});