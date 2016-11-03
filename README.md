# expr-prop
> Replace ${foo.baz} properties in strings

## Install
```
$ npm install --save expr-prop
```

## Usage
```js
const exprProp = require('expr-prop')
var obj = {
    name: 'expr-prop',
    version: '1.0.0',
    author:{
        email: 'kaifuxu@gmail.com'
    },
    dependencies: [
        {
            module: 'prop-by-string',
            version: '^1.0.1'
        }
    ]
}

exprProp.expr('name: ${name}, email: ${author.email}', obj)
// name: expr-prop, email: kaifuxu@gmail.com

exprProp.expr('depends: ${dependencies[0].module}', obj)
// depends: prop-by-string

```

## License
MIT
