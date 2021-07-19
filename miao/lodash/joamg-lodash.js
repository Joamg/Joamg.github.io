var joamg = function () {

function chunk(array, size) {
  var result = []
  var index = 0 
  while(index < array.length) {
    result.push(array.slice(index, index = index + size))
  }
  return result
}


  function compact(array) {
    var result = []
      for(i = 0; i < array.length; i++) {
        if ((typeof array[i] !== String) && Number(array[i]) == parseFloat(array[i])) {
          result.push(array[i])
        }
      }
      return result
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
    compact: compact,
    unique: unique,
    flattenDeep: flattenDeep,
    flattenDepth:flattenDepth,
    forEach: forEach,
  }
  
}()

// chunk, compact, unique,uniqueBy, flattenDeep/Depth, gruopBy, keyByforEach, map, filter, reduce, zip, unzip
// keys, values, every, some, fill
// sortBy
// isEqual
// reverse, countBy,reduceRight,shuffle,isNaN, isNull, isNil, isUndefined, toArray, sum, sumBy