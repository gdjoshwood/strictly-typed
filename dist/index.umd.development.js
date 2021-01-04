(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-hook-form')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-hook-form'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ReactHookFormStrictTyped = {}, global.React, global.ReactHookForm));
}(this, (function (exports, React, reactHookForm) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }

    var isNumber = function (value) { return typeof value === 'number'; };
    var formatName = function (name) {
        if (Array.isArray(name)) {
            return name
                .reduce(function (accumulator, currentValue) {
                if (isNumber(currentValue)) {
                    var lastIndex = accumulator.length - 1;
                    accumulator[lastIndex] = accumulator[lastIndex] + "[" + currentValue + "]";
                    return accumulator;
                }
                return __spreadArrays(accumulator, [currentValue]);
            }, [])
                .join('.');
        }
        return name;
    };

    var useTypedController = function (_a) {
        var control = _a.control;
        var controlRef = React__default['default'].useRef(control);
        controlRef.current = control;
        var TypedController = React__default['default'].useCallback(function (_a) {
            var name = _a.name, rest = __rest(_a, ["name"]);
            var formattedName = formatName(name);
            return (React__default['default'].createElement(reactHookForm.Controller, __assign({ name: formattedName, control: controlRef.current }, rest)));
        }, []);
        return TypedController;
    };

    exports.useTypedController = useTypedController;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.development.js.map
