
function roughList(word) {
  var roughList = []
  for (var i = 0; i < word.length; i++) {
    roughList.push(word[i])
  }
  return roughList
}

  var two = "eclipse"
  var list = roughList(two)
  var result = {}
  for (var j = 0; j < list.length; j++) {
    var char = list[j]
    if (result[char]) {                      // Boolean -> Truthy
      result[char] += 1
    }
    else {
      result[char] = 1
    }
  }
console.log(result)

function countLetters(word) {
  var list = roughList(word)
  var result = {}
  for (var j = 0; j < list.length; j++) {
    var char = list[j]
    if (result[char]) {                   // Boolean -> Truthy
      result[char].push(j)
    }
    else {
      result[char] = [j]
    }
  }
  return result
}

console.log(countLetters("lighthouse in the house"))