'use strict';

const dotProp = require('dot-prop');

module.exports = {
    expr: function (expr, obj) {
        var ret = (typeof expr == 'string') ? expr : JSON.stringify(expr);
        if (!obj)
            return ret;
        const reg = /\$\{[\w\.\[\]]+\}/g;
        const arr = ret.match(reg)
        if (!arr)
            return ret;
        for (var i = 0; i < arr.length; i++) {
            var prop = dotProp.get(obj, arr[i].substring(2, arr[i].length - 1))
            ret = ret.replace(arr[i], (typeof prop == "object" || typeof prop == "array") ? JSON.stringify(prop) : prop)
        }
        return ret;
    }
};
