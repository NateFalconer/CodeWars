const text = "The sunset sets at twelve o' clock."

function alphabetPosition(text) {
  const filtStr = text.toLowerCase().replace(/[^A-Z]+/gi, "");
  const newArr = [...filtStr];
  return newArr.map(c => c.charCodeAt(0) - 96).join(' ')
}

alphabetPosition(text)