"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
var sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort;
var test = {
    split: [
        null,
        { here: { there: [null, null, { test: "test" }, { id: 2, name: "hero" }] } }
    ]
};
var string = "test.split[1].here.there|id:2|";
var path = new NumbersCollection_1.Path(string);
console.log(path);
var collection = new NumbersCollection_1.PathCollection(path.path);
var tester = new Sorter_1.RecurseStateToLocation(collection);
console.log("test results", JSON.stringify(tester.recurseState(test, collection)));
