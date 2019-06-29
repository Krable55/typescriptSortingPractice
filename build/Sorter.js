"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
var RecurseStateToLocation = /** @class */ (function () {
    function RecurseStateToLocation(Path) {
        this.Path = Path;
    }
    RecurseStateToLocation.prototype.recurseState = function (obj, path) {
        var _a;
        var endOfPath = path.endOfPath, currentLevel = path.currentLevel;
        console.log(currentLevel, obj);
        if (endOfPath) {
            return obj;
        }
        // console.log("path", path);
        // console.log("OBJ", currentLevel, obj);
        if (this.isObject(obj)) {
            return _a = {}, _a[currentLevel] = this.recurseState(obj[currentLevel], path), _a;
        }
        if (this.isArray(obj)) {
            obj[currentLevel] = this.recurseState(obj[currentLevel], path);
            return obj.slice();
        }
    };
    RecurseStateToLocation.prototype.isObject = function (obj) {
        return !(obj instanceof Array) && obj !== null;
    };
    RecurseStateToLocation.prototype.isArray = function (obj) {
        return obj instanceof Array;
    };
    return RecurseStateToLocation;
}());
exports.RecurseStateToLocation = RecurseStateToLocation;
(function () { return ; });
any;
{
    return obj.slice().map(function (item, id) {
        var _a;
        if (item && item !== undefined && item[key] && item[key] !== undefined) {
            var newObj = __assign({}, item, (_a = {}, _a[changeThisProperty] = callBack ? callBack(value) : value, _a));
            console.log('found: ', item);
            console.log('newObj: ', newObj);
            return newObj;
        }
        return item;
    });
}
// let string = `test.split[1].here.there[2]`;
// let test: any = {
//   split: [null, { here: { there: [null, null, { test: "test" }] } }]
// };
// //path String, optional ids to search with?,
// //takes in a path, compares i & i + 1 if they are numbers
// let reg = /\s*(?:\.|\[|\])\s*/;
// let arr = string
//   .split(reg)
//   .filter(string => string.length > 0)
//   .map(string => {
//     if (string == Number(string)) return Number(string);
//     return string;
//   });
// console.log(arr);
// console.log(test[arr[1]][arr[2]][arr[3]][arr[4]][arr[5]]);
// let recurseState = (state, path, container, ids) => {
//   let newState = container;
//   let count = 0;
//   path = path
//     .split(reg)
//     .filter(string => string.length > 0)
//     .map(string => {
//       if (string == Number(string)) return Number(string);
//       return string;
//     });
//   let currentLevel = path.shift();
//   let isObject = typeof state === "object" && !Array.isArray(state) && state;
//   let isArray = Array.isArray(state);
//   if (count === 0 && isObject) newState = {};
//   if (count === 0 && isArray) newState = [];
//   let recurse = obj => {
//     if (isObject) {
//       recurse(obj[path[currentLevel]], path);
//     }
//   };
//   recurse(state);
//   return newState;
// };
// console.log(recurseState(test, path, {}));
// export class SpreadNested {
//     constructor(public Object: Spreadable){}
//     spread(): void {
//     }
// }
