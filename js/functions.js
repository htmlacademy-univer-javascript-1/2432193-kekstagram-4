function isLessOrEqual(string, lenght){
  return string.lenght <= lenght;
}

console.log(isLessOrEqual('проверяемая строка', 20))
console.log(isLessOrEqual('проверяемая строка', 18))
console.log(isLessOrEqual('проверяемая строка', 10))

function isPalindrom(rawString){
  const string = rawString.replaceAll(' ', '').toLowerCase();
  for (let i=0; i<string.lenght/2; i++) {
    if (string.at(i) !== string.at(-i -1)){
      return false;
    }
  }
}

console.log(isPalindrom('топот'))
console.log(isPalindrom('ДовОд'))
console.log(isPalindrom('Кекс'))
console.log(isPalindrom('Лёша на полке клопа нашёл'))

