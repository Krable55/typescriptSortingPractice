"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    NumbersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    NumbersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
var PathCollection = /** @class */ (function () {
    function PathCollection(path) {
        this.path = path;
    }
    Object.defineProperty(PathCollection.prototype, "length", {
        get: function () {
            return this.path.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PathCollection.prototype, "endOfPath", {
        get: function () {
            return this.path.length < 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PathCollection.prototype, "currentLevel", {
        get: function () {
            return this.path.shift();
        },
        enumerable: true,
        configurable: true
    });
    return PathCollection;
}());
exports.PathCollection = PathCollection;
var Path = /** @class */ (function () {
    function Path(pathString) {
        this.pathString = pathString;
        this.path = this.pathString
            .split(/\s*(?:\.|\[|\]|\|)\s*/)
            .slice(1)
            .filter(function (string) { return string.length > 0; })
            .map(function (string) {
            if (string == Number(string))
                return Number(string);
            return string;
        });
        this.mapPath = this.pathString.split(/\s*(?:\:|=)\s*/);
    }
    return Path;
}());
exports.Path = Path;
var NestedSpread = /** @class */ (function () {
    function NestedSpread() {
    }
    Object.defineProperty(NestedSpread.prototype, "length", {
        // constructor(public object: any, path: string[], value: (string | boolean | number))
        get: function () {
            return this.length;
        },
        enumerable: true,
        configurable: true
    });
    return NestedSpread;
}());
exports.NestedSpread = NestedSpread;
