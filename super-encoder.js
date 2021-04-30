// Import the encryptors functions here.
const {caesarCipher, symbolCipher, reverseCipher} = require('./encryptors')

const encodeMessage= (str) => {
    // Use the encryptor functions here.
    let encode1=symbolCipher(str);
    let encode2=reverseCipher(encode1);
    let encodedStr=caesarCipher(encode2,15);
    return encodedStr;
  }
  
  const decodeMessage = (str) => {
    // Use the encryptor functions here.
    let decode1=caesarCipher(str,-15);
    let decode2=reverseCipher(decode1);
    let decodedStr=symbolCipher(decode2);
    return decodedStr;
  }
  
  // User input / output.
  
  const handleInput = (userInput) => {
    const str = userInput.toString().trim();
    let output;
    if (process.argv[2] === 'encode') {
      output = encodeMessage(str);
    } 
    if (process.argv[2] === 'decode') {
      output = decodeMessage(str);
    } 
    
    process.stdout.write(output + '\n');
    process.exit();
  }
  
  // Run the program.
  process.stdout.write('Enter the message you would like to encrypt...\n> ');
  process.stdin.on('data', handleInput);