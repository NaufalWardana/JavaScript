//  1. soal Palindrome
function isPalindrome(str) {
  const len = str.length;
  let palindrome = true;
  for (let i = 0; i < len / 2; i++) {
    if (str[i].toLowerCase() !== str[len - i - 1].toLowerCase()) {
      palindrome = false;
      break;
    }
  }
  return palindrome;
}

console.log(isPalindrome("Kasur Rusak"));
console.log(isPalindrome("Saya Makan"));

console.log("=======================================");

// 2. Soal Camel Case
function camelCase(str) {
  const len = str.length;
  let words = 0;
  for (let i = 0; i < len; i++) {
    if (str[i] === str[i].toUpperCase()) {
      words++;
    }
  }
  return words + 1;
}

console.log(camelCase("saveChangesInTheEditor"));

console.log("======================================");

// 3.Soal Duplicate Element
function duplicateElement(str) {
  const len = str.length;
  let removedElements = 0;
  for (let i = 1; i < len; i++) {
    if (str[i] === str[i - 1]) {
      removedElements++;
    }
  }
  return removedElements;
}

console.log(duplicateElement("AAAA"));
console.log(duplicateElement("BBBBB"));
console.log(duplicateElement("ABABABAB"));
console.log(duplicateElement("BABABA"));
console.log(duplicateElement("AAABBB"));
