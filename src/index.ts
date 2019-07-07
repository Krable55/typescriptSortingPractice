import { Sorter } from "./Sorter";
import { CharactersCollection } from "./CharacterCollection";
import { LinkedList } from "./LinkedList";
import {
  NumbersCollection,
  Path,
  PathCollection,
  PathClass
} from "./NumbersCollection";

// const charactersCollection = new CharactersCollection("aabXcsdjvbLJBBC");
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
const numbersCollection = new NumbersCollection([50, 0, -1, 45, 5]);
numbersCollection.sort();
console.log(numbersCollection.data);
const charactersCollection = new CharactersCollection("KJBcsOLslXlasdfnz");
charactersCollection.sort();
console.log(charactersCollection.data);
let test = {
  split: [
    null,
    { here: { there: [null, null, { test: "test" }, { id: 2, name: "hero" }] } }
  ]
};
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(100);
linkedList.add(0);
linkedList.sort();
linkedList.print();

// const sorter = new Sorter(linkedList);
// let string = `test.split[1].here.there|id:2|`;
// const path = new Path(string);
// console.log(path);
// const collection = new PathCollection(path.path);
// const tester = new RecurseStateToLocation(collection);
// console.log(
//   "test results",
//   JSON.stringify(tester.recurseState(test, collection))
// );
// sorter.sort();
// linkedList.print();
