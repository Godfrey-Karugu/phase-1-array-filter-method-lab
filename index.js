// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']



function findMatching(array, thisArg){
  return array.filter((el)=>el.toLowerCase() === thisArg.toLowerCase())
}



function fuzzyMatch(array,thisArg){


  return array.filter((el)=> el.toLowerCase().startsWith(thisArg.toLowerCase()))
}



function matchName(array, thisArg){
  return array.filter((el)=>el.name ===thisArg)
}
