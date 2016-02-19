//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  var inner = outer();


//Once you do that, invoke inner.

  inner();



//Next problem
function callFriend() {
    return function getIt() {
    var name = "Jake";
    var number = "435-215-9248";
    return 'Calling ' + name + " at " + number;
    }
    return getIt("435-215-9248"); 
}
var newCall = callFriend();
newCall();




  

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.






//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

  function makeCounter() {// Make counter function, i have to set a counter to 0. I have to 
     var counter = 0;     // return a funciton that increments by 1 and then returns the function. 
    return function() {
        counter++;
      return counter;
      }
  }
  var count = makeCounter();
  count();


  
  


//Next Problem



/*
  Write a function named codeLove that returns the string 'I love code'. Write a second function named codeFriend that accepts 
*/
//that accepts the first function as it's first parameter. The second function should return a new third function. 
//Store the third function in a variable, codeEcho which, when invoked, invokes the first, original function that was passed in, but will only ever do so once (returns null after first invocation).



function codeLove() {
  return "I love code";
}
  function codeFriend(fn) {
    var counter = 0;
    return function() {
      if (counter === 0) {
        counter++;
      }
      return fn() {
      }
  }

var codeEcho = codeFriend(codeLove);
//Next Problem





function codeLove() {
  return "I love code";
}
  function codeFriend(fn) {
    var first = true;
    return function() {
      if (first) {
        first = false;
        return fn();
      }
      return null;
    }


  }
var codeEcho = codeFriend(codeLove)





//Now, similar to the last problem, write a function called 'fnCounter' that accepts two parameters.  
//The first parameter will be an anonymous function and the second parameter, 'N', will be a number.
//Now, in 'fnCounter', allow the anonymous funciton to be invoked 'N' number of times. After it's been invoked 'N' number of times, return 'STOP'.

function fnCounter(fn, n) {
  for (var i = 0; i < n, i++) {
    if (fn > n)
    return "stop";
  }

}



function whatever() {
   return ;
}
function fnCounter(fn, n) {
 
    for (var i = 0; i < n; i++) {
       fn();
    }
    return "stop";
}
fnCounter(whatever, 5);


//Next Problem



/*
  var counter = function(){
    for (var i=1; i<=5; i++) {
      setTimeout( function timer(){
          console.log( i );
      }, i*1000 );
    }
  };

  Above you have a function named counter. Examine the function (without running the code) then below write what you expect to happen when the funciton is invoked. *Hint: setTimeout calls a function or evaluates an expression after a specified number of milliseconds.

  I think that the function will start at 1 and go until it reaches 5. and it will do that with 
  1 second inbetween each calling. 


  Now, run the function in your console and note what happpens.

  Was your answer right or wrong?

    //Answer Here
    No, nothing happed because it wasnt called. 


  Fix the counter function so that it works the way you expect it to work. (logging 1 then 2 then 3, etc) (Note: No unit test for this one because of the timeout)
*/

counter();



//Next Problem



/*
  Make the following code work

  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

  *Hint: Don't let this fool you. Break down what's really happening here.
*/

var funcArray = function() { //this is the function 
    var array = [];//have to creat an empty array because without it there isnt an array. 
    for (var i = 0; i < array.length, i++) {//loop through it and return
      return function(); {
        return array;
    }
}

