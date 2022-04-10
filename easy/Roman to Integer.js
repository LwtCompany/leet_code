const table = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }

let romanToInt = s => s.split('').reduce((sum, char, i) => (
    table[s[i+1]] > table[char] ? (sum - table[char]) : (sum + table[char])
), 0)


// var romanToInt = function(s) {
//     let array_str = s.split(""), new_arr = [], sum = 0;

//     for(let i=0; i < array_str.length; i ++){
//       let current = 0;;
//       switch(array_str[i]){
//         case 'I': current = 1; break;
//         case 'V': current = 5; break;
//         case 'X': current = 10; break;
//         case 'L': current = 50; break;
//         case 'C': current = 100; break;
//         case 'D': current = 500; break;
//         case 'M': current = 1000; break;
//       }

//       if(current !== 0){
//         new_arr.push(current)
//       }
//     }
//     new_arr = new_arr.reverse();

//     for(let j=0; j < new_arr.length; j ++){
//       if(j < new_arr.length -1){
//         if(new_arr[j] > new_arr[j+1]){
//           sum += (new_arr[j] - new_arr[j+1])
//           new_arr[j] = 0;
//           new_arr[j+1] = 0;
          
//         }else{
//           sum += new_arr[j]
//         }
        
//       }else{
//         sum +=new_arr[j]
//       }
//     }
//     return sum;
// };
 
 console.log(romanToInt("MCMXCIV"))