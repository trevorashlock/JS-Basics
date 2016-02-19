//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(name) {
   if (name === Tyler) {
   	return true;
   }
   else {
   	return false;
   }
}

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  function getName() {
  	return prompt("what is your name?");
  	}
  	getName();

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.
 
    function getName() {
     return prompt("what is your name?");
     function welcome() {
      alert("Welcome " + getName());
    }
  }
    welcome();



//Next problem




//What is the difference between arguments and parameters?

  Parameters are given for the function to use like a box that carries something. Arguments are the data given 
  to put into these boxes for the function to run now with whatever the arguments put into
  the parameters. 


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?

NaN, 0, false, null, undefined, " "
Something is falsey if the value evaluates to false. 




//Next Problem



//Create a function called myName that returns your name
function myName() {
  return "Trevor";
}
myName();
  


//Now save the function definition of myName into a new variable called newMyName

 var newMyName = myName();

//Now alert the result of invoking newMyName

alert(newMyName);

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn() {
  return function() {
  return "Trevor";
  }
}

//Now save the result of invoking outerFn into a variable called innerFn.

  var innerFn = outerFn();

//Now invoke innerFn.

outerFn();

