import test from 'ava';
import m from './';

test('expr', t => {
    const f1 = {
        foo: {
            bar: 1
        },
        id: 1983,
        name: 'elon',
        age: 30,
        addr: {
            country: 'CN'
        }
     };
    t.is(m.expr('foo.bar:${foo.bar}', f1), 'foo.bar:1');
    t.is(m.expr('foo:${foo}', f1), 'foo:{"bar":1}');
    t.is(m.expr('addr.country:${addr.country}', f1), 'addr.country:CN');
    t.is(m.expr('/person/${id}', f1), '/person/1983');


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
    };

    t.is(m.expr('depends: ${dependencies[0].module}', obj), 'depends: prop-by-string');
    t.is(m.expr('name: ${name}, email: ${author.email}', obj), 'name: expr-prop, email: kaifuxu@gmail.com');
    
});
