'use strict';

const propByString = require('prop-by-string');

module.exports = {
    expr: function (expr, obj) {
        var ret = (typeof expr == 'string') ? expr : JSON.stringify(expr);
        if (!obj)
            return ret;
        const reg = /\$\{[\w\.\[\]]+\}/g
        //const reg = /\$\{[\w\.\[\]\'\"]+\}/g
        const arr = ret.match(reg)
        if (!arr)
            return ret;
        for (var i = 0; i < arr.length; i++) {
            var prop = propByString.get(arr[i].substring(2, arr[i].length - 1), obj)
            if (prop===undefined || prop===null)
                prop = ''
            ret = ret.replace(arr[i], (typeof prop == "object" || typeof prop == "array") ? JSON.stringify(prop) : prop)
        }
        return ret;
    }
};
