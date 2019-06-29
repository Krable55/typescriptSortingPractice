/*

let test = {
  split: [
    null,
    { here: { there: [null, null, { test: "test" }, { id: 2, name: "hero" }] } }
  ]
}

*/
//`test.split[1].here.there|test:test=name|` ~~ searches the array located at 'there' and searches it for objects that have the id 2, then updates the name property 
// replaces item at specific index ~~~~ `test.split[1].here.there[1]`
//`test.split[1].here.there[2][test]` ~~~~~ replaces the value of test
//


let string = `test.split[1].here.there[2][test]`;
let test = {
  split: [
    null,
    { here: { there: [null, null, { test: "test" }, { id: 2, name: "hero" }] } }
  ]
}
//path String, optional ids to search with?,
//takes in a path, compares i & i + 1 if they are numbers
let reg = /\s*(?:\.|\[|\]|\|)\s*/
// console.log(arr);
// console.log(test[arr[1]][arr[2]][arr[3]][arr[4]][arr[5]]);

let CB = (test) => {
	console.log('FOUND IT: ',test)
	return 'Fuck YEah!'
}

addUpdate = (value, first, last, index) => {
	//Add and update object properties
	//push to array  or update index provided
	console.log('ADDED: ', value)
	return value
}
clear = () => {
	//get container type and replace it with an empty one
}

remove = (first, last, filterOne, filterAll) => {
	//remove item from object and filter
}

toggle = (value, multiple) => {
	//filter / remove an item/s from array or object if it exists, or add it if it doesn't
}

let recurseState = (state, path, method, value, callBack) => {
  let firstKey = Object.keys(state)[0]
  path = path
    .split(reg)
    .slice(1)
    .filter(string => string.length > 0)
    .map(string => {
      if (string == Number(string)) return Number(string);
      return string;
    });
  // if (count === 0 && isObject) newState = {};
  // if (count === 0 && isArray) newState = [];

  let recurse = (obj, path, method, value, callBack) => {
  let currentLevel = path.shift();
  let isObject = !(obj instanceof Array) && obj !== null;
  let isArray = obj instanceof Array
  
  if(path.length < 1){ 
    //replaces an item at specific index in the targeted array Or object property
    	let newObj
    	if(isArray && typeof currentLevel === 'number') newObj = [...obj]
    	if(isObject) newObj = {...obj}
    	if(value !== undefined) newObj[currentLevel] = value
    	if(callBack !== undefined) newObj[currentLevel] = callBack(newObj[currentLevel])
    console.log(newObj)
    	return  newObj
  	console.log('Almost', obj)
  	return obj
  }
  let newPath = path

 console.log('level', currentLevel)

    // console.log(obj[currentLevel], path)

    if (isObject) {
     console.log(obj)
     return { [currentLevel]: recurse(obj[currentLevel], newPath, method, value, callBack)};
    }
    if(isArray){

    	if(typeof currentLevel === 'string' && currentLevel.indexOf(':') >= 0){
    		console.log('perform map operattion', console.log(obj[currentLevel]) )
    		const keyValue = currentLevel.split(/\s*(?:\:|=)\s*/)
    		let key = keyValue[0];
    		let currentValue = keyValue[1];
    		let changeThisProperty = keyValue[2]
    		obj[currentLevel] = recurse(obj[currentLevel], newPath, method, value, callBack)
    		return [...obj].map((item, id) => {
    				if(item && item !== undefined && item[key] && item[key] !== undefined){
    					let newObj =  {
    						...item,
    						[changeThisProperty]: callBack ? callBack(value) : value
    					}
    					console.log('found: ', item)
    					console.log('newObj: ', newObj)
    					return newObj
    				}
    				return item
    		})
    	}
    	obj[currentLevel] = recurse(obj[currentLevel], newPath, method, value, callBack)
    	return  [...obj]
    }
  };
  return recurse(state, path, method, value, callBack)
;
};
console.log('End: ', JSON.stringify(recurseState(test, string, 'add', 'value', CB)));