// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//                      BIG O EXERCISES

// ================================================================================================================

//      STEP ONE

// ==============================================================

// 1.  O(n)
// 2.  O(n)
// 3.  O(1)
// 4.  O(n^3)
// 5.  O(n)
// 6.  O(n)
// 7.  O(n log n)
// 8.  O(2^n)
// 9.  O(1)
// 10. O(n^2)

// ================================================================================================================

//      STEP TWO

// ==============================================================

function logUpTo(n){
 for(let i=1;i<=n;i++){
   console.log(i);
}}

// O(n), linear, because each addition increment to n results in one more operation

function logAtLeast10(n){
 for(let i=1;i<=Math.max(n,10);i++){
   console.log(i);
}}

// O(n), linear, because assuming the worst case scenario (a very large number), each increment in the value
//      results in one more operation

function logAtMost10(n){
 for(let i=1;i<=Math.min(n,10);i++){
   console.log(i);
}}

// O(1), constant, becasue the worst case scenario is a large number, and past a certain threshold there will
//      always be ten operations

function onlyElementsAtEvenIndex(arr){
 let newArr=[];
 for(let i=0;i<arr.length;i++){
   if(i%2===0){
    newArr.push(arr[i]);
   }
 }
 return newArr;
}

// O(n), linear, because even though each new index in the array creates two new operations, it's still a 
//      consistent two per index

function subtotals(arr){
 let subtotalArr=[];
 for(let i=0;i<arr.length;i++){
   let subtotal=0;
   for(let j=0;j<=i;j++){
     subtotal+=arr[j] ;
   }
   subtotalArr.push(subtotal);
 }
 return subtotalArr;
}

// O(n^2), quadratic, because the second loop will have to do more operations than the last each time it's 
//      iterated.

function vowelCount(str){
 let vowelCount={};
 const vowels='aeiouAEIOU';
 for(let char of str){
   if(vowels.includes(char)){
    if(char in vowelCount){
      vowelCount[char]+=1;
    }else{
      vowelCount[char]=1;
 }}}
 return vowelCount;
};

// O(n), linear, because each additional character in the string requires a new set of operations, but it's the
//      same amount of operations for each character

// ================================================================================================================

//      STEP THREE

// ==============================================================

// 1. True
// 2. True
// 3. False
// 4. Linear, the list of operations is the same for every new character
// 5. Linear, for the same reason
// 6. Linear, for the same reason
// 7. Linearithmec, (I'm not sure why what that's what the powerpoint said)
// 8. Linear, depends on the length of the array
// 9. Constant, it always does the same operaton and always in the same place in the array
// 10. Linear, adds more operations depending on how many indexes are targeted
// 11. Constant, same reason as #9
// 12. Linear, because it's the same amount of operations for each key

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
