var jQ = (function (window) {
    var jQ = function (args) {
        return new jQ.fn.init(args);
    };

    jQ.fn = jQ.prototype = {
        // Core functions
        init: function (args) {
            console.log('init called');

            if (!args) {
                return this;
            } else {
                this.args = args;
            }
        },
        test: function () {
            console.log('test called');

            return this;
        }
    };

    // The prototype object provides shared properties for other objects:
    // assigning the jQ prototype to the init prototype I'm sure the object 
    // I return has all the methods declared
    jQ.fn.init.prototype = jQ.fn;

    return window.jQ = jQ;
})(window);


