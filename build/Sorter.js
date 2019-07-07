"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
// export class RecurseStateToLocation {
//   constructor(public Path: Mappable) {}
//   recurseState(obj: any, path: Mappable): any {
//     const { endOfPath, currentLevel } = path;
//     console.log(currentLevel, obj);
//     if (endOfPath) {
//       return obj;
//     }
//     // console.log("path", path);
//     // console.log("OBJ", currentLevel, obj);
//     if (this.isObject(obj)) {
//       return { [currentLevel]: this.recurseState(obj[currentLevel], path) };
//     }
//     if (this.isArray(obj)) {
//       obj[currentLevel] = this.recurseState(obj[currentLevel], path);
//       return [...obj];
//     }
//   }
//   isObject(obj: any): boolean {
//     return !(obj instanceof Array) && obj !== null;
//   }
//   isArray(obj: any): boolean {
//     return obj instanceof Array;
//   }
//   mapArray(arr: (string | number)[], callBack(): void ) any {
//    return [...obj].map((item, id) => {
//     				if(item && item !== undefined && item[key] && item[key] !== undefined){
//     					let newObj =  {
//     						...item,
//     						[changeThisProperty]: callBack ? callBack(value) : value
//     					}
//     					console.log('found: ', item)
//     					console.log('newObj: ', newObj)
//     					return newObj
//     				}
//     				return item
//     		})
//   }
// }
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
