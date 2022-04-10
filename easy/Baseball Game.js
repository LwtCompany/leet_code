var calPoints = function(ops) {
  let sum = 0, new_arr = [];
  
  for(let i = 0; i < ops.length; i ++){
      let current = 0;
      
      switch(ops[i]){
              case '+': current = new_arr[new_arr.length-2]+new_arr[new_arr.length-1]; break;
              case 'D': current = new_arr[new_arr.length-1]*2; break;
              case 'C': new_arr.pop(); break;
              default: current = ops[i]; break;
      }

      if(current != '0'){
        new_arr.push(parseInt(current))
      }
  }

  for(let j = 0; j < new_arr.length; j ++){
    sum += new_arr[j];
  }

  return sum;
};
let opt = ["5","-2","4","C","D","9","+","+"]
console.log(calPoints(opt))
