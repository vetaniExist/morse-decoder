const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let words = expr.split("**********");
    let result = "";
    let letters = [];
    for (let i = 0; i < words.length; i += 1) {
        for (let j = 0; j < words[i].length / 10; j += 1) {
            letters[i] = words[i].substr(j * 10, 10);
            if (letters[i].length !== 10) {
                while (letters[i].length !== 10) {
                    letters[i] = "0" + letters[i];
                }
            }
            letters[i] = letters[i].replace(/10/g,".").replace(/11/g,"-");
            letters[i] = letters[i].replace(/0/g,"");
            result +=  MORSE_TABLE[letters[i]]
      }
      if (i !== words.length -1) {
          result += " ";
      }
    }
    return result;
}

module.exports = {
    decode
}