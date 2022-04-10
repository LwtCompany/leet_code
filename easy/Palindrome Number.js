var isPalindrome = function(x) {
    let new_number;
    x = x.toString();
    new_number =  x.split("").reverse().join("").toString();
    
    if(new_number === x)
      return true
    else 
      return false
};

console.log(isPalindrome(121))