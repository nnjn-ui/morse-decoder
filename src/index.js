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
    const result = [];
    const splited = expr.split('');
    while (splited.length) {
        const letter = splited.splice(0, 10);
        if (letter.join('') === '**********') {
            result.push(' ');
            continue;
        }
        const binCode = letter.splice(letter.indexOf('1'));
        const code = [];
        while (binCode.length) {
            const isDash = binCode.splice(0, 2)[1] === '1'
            code.push(isDash ? '-' : '.')
        }
        result.push(MORSE_TABLE[code.join('')])
    }
    return result.join('');
}

module.exports = {
    decode
}