var joamg = function () {
  function chunk(array, size) {
    var newarr = []
    var a =[]
    var index = 0 
    while(index < array.length) {
      newarr.push(array.slice(index, index = index + size))
    }
    a.push(newarr)
    return a
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
    var a = []
    for(i = 0; i < array.length; i++) {
      if(array.length == 1 ) {
        return array
      } else {
      }
    }
    return a
  }

  function flattenDepth(array, depth) {

  }


  function forEach(array, depth) {

  }




  return {
    chunk: chunk,
    compact: a,
    unique: unique,
    uniqueBy: uniqueBy,
    flattenDeep: flattenDeep,
    flattenDepth:flattenDepth,
    gruopBy:gruopBy,
    keyBy:keyBy,
    forEach: forEach,
    map:map,
    filter:filter,
    reduce:reduce,
    zip:zip,
    unzip:unzip,
    forEach:forEach,
  }
  
}