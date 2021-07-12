var joamg = function () {
  var a = []
  function chunk (array, size) {
    if (array.length < size) {
      return array
    } else {
      for (var i = 0; i < array.length; i++) {

        
      }
    }
  }


  function compact(array) {
    var a = []
      for(i = 0; i < array.length; i++) {
        if ((typeof array[i] !== String) && Number(array[i]) == parseFloat(array[i])) {
          a.push(array[i])
        }
      }
      return a
  }


  function flattenDeep(array) {
    for(i = 0; i < array.length; i++) {
      if(array.length == 1 ) return array
      else 
      ()
    }
  }









  return {
    chunk: chunk,
    compact: a,
    unique: unique,
    uniqueBy: uniqueBy,
    flattenDeep: flattenDeep,
    Depth:Depth,
    gruopBy:gruopBy,
    keyB:keyB,
    forEach: forEach,
    map:map,
    filter:filter,
    reduce:reduce,
    zip:zip,
    unzip:unzip,
    forEach:forEach,
    map:map,
    filter:filter,
    reduce:reduce,
    zip:zip,
    unz:unz,
 
  }
  
}