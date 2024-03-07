function rot13(str) {
   
    function decodeChar(char) {
     
      if (/[A-Z]/.test(char)) {

        let decodedCharCode = char.charCodeAt(0) - 13;

        if (decodedCharCode < 65) {
          decodedCharCode += 26; 
        }
        return String.fromCharCode(decodedCharCode);
      }

      return char;
    }
  

    return str.split('').map(decodeChar).join('');
  }
  
  console.log(rot13("SERR PBQR PNZC"));