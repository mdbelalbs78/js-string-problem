function maxArray(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
       const index = i;
       const element = numbers[index];
    //    if(element > largest){
    //        largest = element;
    //    }
        if(largest < element){
           element = largest;
       }
   }
   return largest;
}

const height = [167,120,190,165,137];
const tallest = maxArray(height);
console.log('tallest parson is', tallest);