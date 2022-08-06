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
     '':' ',
};

function decode(expr) {
  let array = [];
  let result ='';

 for (let i=0; i<expr.length; i+=10){
   array.push(expr.slice(i,(i+10)));  
  }

  array.forEach(element=>{

    element=element.slice(element.indexOf('1'));
    let n=element.length;
    for (let j=0; j<element.length; j+=2) {
      if ((element[j]+element[j+1])==='10') {
        element=element+'.';
              } else if ((element[j]+element[j+1])==='11') {
        element=element+'-';
      }}
   element= element.slice(n);
      
    for (let key in MORSE_TABLE) {
    if  (key===element){
      result=result+MORSE_TABLE[key];
         } 
    }

  })
  
  return result;
     
}

module.exports = {
    decode
}