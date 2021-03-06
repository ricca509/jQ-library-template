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
            // The init function gets called by the constructor.
            // Check args and initialize local variables attaching them to 'this'
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

    // Utility methods

    // Extend obj1 with properties in obj2 (overrides and add where necessary)
    jQ.extend = function(obj1, obj2) {
        if (!(typeof(obj1) === 'object' && typeof(obj2) === 'object')) {
            return undefined;
        }

        for (var prop in obj2) {
            if (obj2.hasOwnProperty(prop)) {
                obj1[prop] = obj2[prop];
            }
        }        

        return obj1;
    };

    // The prototype object provides shared properties for other objects:
    // assigning the 'jQ' prototype to the 'init' prototype I'm sure the object
    // I return has all the methods declared for jQ
    jQ.fn.init.prototype = jQ.fn;

    // Attach the constructor function to the window object
    return window.jQ = jQ;
})(window);


