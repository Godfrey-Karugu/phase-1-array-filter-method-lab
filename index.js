// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']



function findMatching(array, thisArg){
  return array.filter((el)=>el.match(/bobby/gi))
}

// fuzzyMatch` - This function takes an array of drivers' names and a `string`
//   as arguments for querying the array, and returns all drivers whose names begin
//   with the provided letters.(

function fuzzyMatch(array,thisArg){
  return array.filter((el)=>el.startWith(thisArg))
}

// `matchName` - This function takes an array of `driver` objects and a `string`
// as arguments. Each `driver` object has two properties: `name` and `hometown`.
// The function should return each element whose `name` property matches the
// provided `string` argument.

function matchName(array, thisArg){
  return array.filter((el)=>el.name ===thisArg)
}
