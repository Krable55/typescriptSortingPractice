import { Sorter, RecurseStateToLocation } from "./Sorter";
import {
  NumbersCollection,
  Path,
  PathCollection,
  PathClass
} from "./NumbersCollection";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort;

let test = {
  split: [
    null,
    { here: { there: [null, null, { test: "test" }, { id: 2, name: "hero" }] } }
  ]
};
let string = `test.split[1].here.there|id:2|`;
const path = new Path(string);
console.log(path);
const collection = new PathCollection(path.path);
const tester = new RecurseStateToLocation(collection);
console.log(
  "test results",
  JSON.stringify(tester.recurseState(test, collection))
);
