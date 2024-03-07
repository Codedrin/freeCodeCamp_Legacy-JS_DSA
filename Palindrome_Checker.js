function palindrome(str) {

    const modifiedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
   
    return modifiedStr === modifiedStr.split('').reverse().join('');
  }
  
  console.log(palindrome("eye")); 