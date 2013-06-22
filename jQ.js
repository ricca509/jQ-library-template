var jQ = (function (window, undefined) {
    // This is the constructor function. It will be attached to the window object
    // and executed every time we call jQ(...). Returns a new 'instance' of the library.
    var jQ = function (args) {
        return new jQ.fn.init(args);
    };

    // Create the 'fn' object which is the same as 'prototype' to enable a simpler way to extend the library
    jQ.fn = jQ.prototype = {
        // Core functions
        // Add all core functions here, be sure to return 'this' to enable cascading
        init: function (args) {
            // Check args and initialize the local variables attaching them to 'this'
            if (args === undefined) {
                return this;
            } else {
                this.args = args;

                return this;
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

    // Attach the constructor function to the window object
    return window.jQ = jQ;
})(window);


