import test from 'ava';
import m from './';

test('get', t => {
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
});
