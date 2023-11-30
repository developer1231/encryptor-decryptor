function encrypt(input, key) {
  input = input.trim();
  let result = "";
  for (let i = 0; i < input.length; i++) {
    let unicode = input.charCodeAt(i);
    let incrementer = Number(key.charAt(i % key.length));
    unicode += incrementer;
    unicode = ((unicode - 33) % 95) + 33;
    result += String.fromCharCode(unicode);
  }
  return result;
}

function decrypt(input, key) {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    let unicode = input.charCodeAt(i);
    let decrementer = Number(key.charAt(i % key.length));
    unicode = ((unicode - 33 - decrementer + 95) % 95) + 33;
    result += String.fromCharCode(unicode);
  }
  return result.replaceAll(`\u007f`, " ");
}

module.exports = { decrypt, encrypt };
