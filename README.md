#jQ

**What**

jQ is a simple effort in creating a small library template that works as jQuery works.

This library answer the question: How do you build a library that you call and use like jQuery?

This code does nothing but showing a way to structure a library in 'jQuery style'.
My target was to emulate that behaviour, I'm publishing the code in the hope it can be of help for someone.

**Getting it**

```
git clone --depth=1 https://github.com/ricca509/jQ-library-template.git
```

**Using it**

As with jQuery
```javascript
jQ('something').method1().method2();
```

Extend with your own method, accessing the object properties
```javascript
jQ.fn.extendMethod = function () {
    console.log(this.args);

    return this;
}
```

jQ is a normal object, attach utility methods to it (like $.ajax)
```javascript
jQ.utility = function() {
	console.log('utility');        
};

jQ.utility();
```

If you have any questions or feedback, feel free to contact me using [@CoppolaRiccardo](https://twitter.com/CoppolaRiccardo) on Twitter.