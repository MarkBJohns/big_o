console.log('Big O Notation');
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//                                          BIG 'O' NOTATION

// ================================================================================================================

//      WHAT IS 'BETTER'?

// ==============================================================

// Say you're trying to optimize your code to run a function as quickly as possible. There's a handful of 
//      things to keep in mind:

// 1. Algorithimic Complexity -
//      how execution time grows with the size of the input

// 2. Data Structures -
//      how long or complex your objects, strings, arrays, etc are

// 3. Optimization -
//      optimizing your loops to remove redundancy and unnecessary operations

// 4. Memory Usage -
//      how you allocate and deallocate the memory needed for the function to operate

//      etc, etc.

// Take a function that adds every number in the range from 1 to a specified number. There's multiple ways to 
//      write said code, and some are going to be more efficient than others.

function addUpToFirst(num){
    let total=0;
    for(let i=1;i<=num;i++){
        total+=i;
    }
    return total;
}

function addUpToSecond(num){
    return num*(num+1)/2;
}

//      You can test both of these out in the console, they will return the same result so long as the same
//      input is given. But they work different ways. The first will start with a 'total' set to 0. It will
//      then do an addition loop with 'i' set to 1, adding the value of 'i' to the value of 'total' until 
//      i=num.

//      The second function will take num, add 1 (because that's the first value you have to start with),
//      multiply it by num again (because the number itself will be the same amount of numbers there are 
//      between 1 and num), and then divide that by 2 to account for the two values you multiplied.

//      In both cases, you reach the same result, but there are trade-offs to each version. The first has more
//      steps, can be argued to be redundant, and takes up more space. The second one, while smaller and taking
//      less steps, has a legibility problem where anyone who isn't particularly good at math can struggle to 
//      understand at a glance what the function is doing.

// ================================================================================================================

//      THE PROBLEM WITH TIMERS

// ==============================================================

// One immediately important aspect of running code is speed. Even if readability is sacrificed, often the user
//      won't see a single line of code behind the scenes and doesn't care how unhinged it looks, but will
//      absolutely notice if the thing they're trying to do takes longer than they want it to.

//              https://rithmschool.github.io/function-timer-demo/

// If you go to the link above, you can see a test set up to time how long the two functions take to execute.
//      But because the functions are so simple, the computer can very quickly run them, leaving no notable 
//      difference in speed between the two functions. You can also run the same function with the same value
//      multiple times and it will execute in a different speed each time. Sometimes the first function will run
//      faster and sometimes the second function will. And this isn't even bringing up the execution speed on
//      completely different computers. This leads to an inherent issue in relying on a timer to determine how
//      fast a function executes, as you will rarely get the same result whenever you test them.

// There is a process called benchmarking that can run a function thousands of times and show the average run
//      speed, which can be useful in code that's intrinsically long and complex, but in general it's better to
//      focus on optimizing each smaller section of code to automatically make any longer code more efficient as
//      well.

// ================================================================================================================

//      COUNTING OPERATIONS

// ==============================================================

// If you enter a small number like 5, there's effectively no difference in how long it takes for the function
//      to execute, whereas if you enter a huge number like one-trillion, the first function will take
//      substantially longer. If you think about it, it makes total sense. The first function will have to go
//      through one-trillion iterations of the loop, while the second function just needs to do one addition,
//      multiplication, and divsion problem. Regardless of the number's size, it's still only 3 operations. By
//      looking at the amount of operations we have to run, we can see what code will be the most efficient in
//      the most instances.

//      In this instance, addUpToFirst() will be faster in some rare edge cases such as num=0, num=1, or num=2,
//      but in the overwhelming majority of cases, especially once the numbers get larger and larger, 
//      addUpToSecond() will be the more efficient function, capping at three operations. The way that we 
//      notate how many operations a function has is which the big O notation.

// ================================================================================================================

//      BIG O

// ==============================================================

// We use Big O to give a rough estimate of how well a function will perform relative to how many operations 
//      it has.

// --------------------------------------------------------------

//               1. O(1) - Constant Time:
//                    this function will take the same amount of time, regardless of the size of the input

//               2. O(log n) - Logarithmic Time:
//                    the amount of time grows logarithmically with the size of the input

//               3. O(n) - Linear Time:
//                    the amount of time grows linearly with the size of the input

//               4. O(n log n) - Linearithmic Time:
//                    common with sorting algorithms like merge sort and heap sort

//               5. O(n^2) - Quadratic Time:
//                    the amount of time is proportionate the size of the square of input

//               6. O(n^k) - Polynomial Time:
//                    the amount of time is proportional to the input size, raised to a constant power (k)

//               7. O(2^n) - Exponential Time:
//                    the amount of time grows exponentially with the size of the input

//               8. O(n!) - Factoral Time:
//                    the amount of time grows factorially with the size of the input

//               9. O(sqrt(n)) - Square Root Time:
//                    the amount of time grows with the square root of the input size

// --------------------------------------------------------------

// Because any function can run extremely efficiently with small inputs, Big O notation is interested in how
//      functions run as the size of the input grows. To go back to the adding functions, it doesn't matter
//      which function you use when your input is one, but once you get into the billions, the second one is
//      clearly better. To give the complete rundown on how Big O is determined, we can look at the definition:


//          "An algorithm is O(f(n)) if number of simple operations is eventually less
//           than a constant times f(n), as n increases."


// In English, f(n) is how we notate a function and it's parameter, and the list of O notations above describe
//      the relationship between how big the parameter is and how long the function takes to load. For example,
//      addUpToFirst() will take on exactly one more operation for every increment larger the input is, because
//      it uses loops. An input of 7 will run seven loops, an input of 9 will run nine loops, and so on. The 
//      relationship between the input size and execution time is linear, or "O(n)".

//      Whereas addUpToSecond() will always have three operations, regardless of the input size. The number you
//      input has no discernable effect on how fast the function executes because it's always doing just three
//      things. The relationship between input size and execution time is constant, or "O(1)".

function printAllPairs(num){
    for(var i=0;i<num;i++) {
      for(var j=0;j<num;j++){
        console.log(i,j);
}}}

// This function will start at 0 in the first loop, then start at 0 for the second loop. For each iteration in
//      the second loop, it will increment by 1 until it reaches the value right before the input value. Then
//      the first loop will increment by 1. This continues until the first loop reaches the value right before
//      the input value. As a result, for every one number you increment the input, there's an entire additional
//      increment for the first loop, as well as an extra increment for every single iteration of the second 
//      loop. If you test it out in the console, you'll see an input of 1 will return one pair, 2 will return
//      four pairs, 3 will return nine, etc. The relationship between the input and the execution time is 
//      quadratic, or "O(n^2)".

// --------------------------------------------------------------

// By keeping in mind how your function will execute with larger, unruly inputs, you can make sure that your
//      functions are efficient and have a favorable O notation value.

// ================================================================================================================

//      DETERMINING COMPLEXITY

// ==============================================================

function allEvens(nums){
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2!==0){
            return false
        }}
    return true
}

// This function takes in an array and determines whether every number in the array is even or not. What is the
//      O complexity of this function?

const arrayOne=[2,4,6,8,10];
const arrayTwo=[
    2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,
    42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,
    80,82,84,86,88,90,92,94,96,98,100
]
const arrayThree=[
    2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,
    42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,
    80,82,84,86,88,90,92,94,96,98,100,1
]


const evenTestOne=allEvens(arrayOne);
const evenTestTwo=allEvens(arrayTwo);
const evenTestThree=allEvens(arrayThree);