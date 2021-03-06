test("jQ has method test", function () {
    ok(jQ.hasOwnProperty('fn'));
    ok(jQ.fn.hasOwnProperty('test'));
    ok(jQ.fn.hasOwnProperty('init'));
});

test('jQ sets the args property correctly', function () {
    var argObj = {
        a: 1,
        b: 2
    };

    deepEqual(jQ('argument').args, 'argument');
    deepEqual(jQ(3).args, 3);
    deepEqual(jQ([1, 2, 3, 4]).args, [1, 2, 3, 4]);
    deepEqual(jQ(argObj).args, argObj);
});

test('Extend library prototype', function () {
    // Extend the library
    jQ.fn.extendMethod = function () {
        console.log(this.args);

        return this;
    }

    ok(jQ.fn.hasOwnProperty('extendMethod'));
});

test('The "extend" method works', function () {
    var def = {
        a: 1,
        b: 2
    };

    var ext = {
        a: 3,
        c: 16
    };

    def = jQ.extend(def, ext);

    deepEqual(def, {
        a: 3,
        b: 2,
        c: 16
    });
});