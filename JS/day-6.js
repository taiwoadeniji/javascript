/**
 * Let's see how scope works.
 */

 var myVariable = 3; // Declared in Global scope.

 function myFunction () {
     console.log(myVariable); // can we see myVariable in the function!? Yes! we can see globally scoped variables inside of a function!

     var myFunctionScopeVariable = 64; // Declared in a local (function) scope
    console.log(myFunctionScopeVariable); // WE can see it in the function :D

    // Function inside of a function!? Is this even possible?
    function myNestedFunction () { // (Yes.)
    var myNestedFunctionVariable = 'I\'m very nested!';
    console.log(myNestedFunctionVariable); // local access works!

    console.log('Accessing function scope variable in nested function: '+myFunctionScopeVariable); // WEe can access variable from a parent function. But not the reverse.
    
    console.log(myVariable); // Global variables / function are accessible even all the way here. Nice

    //Even more nesting!?
    function myDoubleNestedFunction () {
        var doubleNestedvar = 'Double nested var, here!';

        console.log(doubleNestedvar); // We can access locally, right?

        //myNestedFunction():; // can I run this here!? yes, it was declared in/by a parent so we are good to go! calling a function inside of itself causes recursion --> 
        //Unless you have a termination condition this causes endless looping.(my browser is crashing)
    
    }
    myDoubleNestedFunction(); // This works, same scope that the function was defined!
   
}
  // myDoubleNestedFunction(); // Cant reach this function here.. we're outside of its scope

    myNestedFunction(); // Lets run and try
    // console.log(myNestedFunctionVariable); // can we see it out here? The variable is scoped to its origin function, not here...
}
 myFunction(); // lets run it and see.
 //console.log(myFunctionScopeVariable); // Can we access it outside of the function!? No locally scoped variables will live and die in their function.

 //myNestedFunction(); // can we run the nested function? No, it is not available globally if it was defined in a localized scope!

 /**
  * Functions returning functions.
  */

  function addNums (x,y) { // Addition.
      return (Number(x)+ Number(y)); // using Number() function to make sure we dont end up con catenating! // sum.
  }

  function subtractNums (x,y) { subtraction.
      return (x-y); // difference.
  }

  function multiplyNums (x,y) { // multiplication
      return (x*y); // product.
    
  }

  function divideNums (x,y) { // division.
    return (x/y); // Quotient.
  }

  function myMath(operation) { 
    switch ( operation) {
        case "add":
            return addNums;
            case "subtract":
                return subtractNums;
                case "multiply":
                    return multiplyNums;
                    case "divide":
                    return divideNums;
                    default:
                        return 'Invalid operation.';
    }
}
// console.log( myMath( 'add', 64, 6 ) );
// console.log( myMath('add')(64,6) );

// Testing function.
var result = myMath( 'divide' )( 9, 3 ); // result = 3
console.log( result );
var newResult = myMath( 'multiply' )( 2, result ); // newResult = 6
console.log( newResult );

/**
 * Now let's try with... anonymous functions.
 */

function newTestFunction ( myString ) {
    myString = 'Entered string is: '+myString;
    return function ( additionalString ) {
        if ( additionalString != undefined ) {
            myString += ', '+additionalString;
        }
        return function ( yetAnotherString ) {
            if ( yetAnotherString != undefined ) {
                myString += ', ' + yetAnotherString + '!!!';
            }
            return myString;
        }
    }
}

console.log ( newTestFunction( 'A B C D E F G' )( 'H I J K L M N O P' )( 'Q R S T U V W X Y Z' ) ); 