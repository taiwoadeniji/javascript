/**
 * Let's try javascript, again!
 * Multi-line comment.
 */

 // single line, comment!

 // Basic assignment:
 var myVariable= '38.9587'; // variable set as astring

 myVariable= myVariable + 5;
 console.log( myVariable + 5 );// opp, one of these is a string so plus is concatenating

// Type-handling:
 myVariable = parseFloat(myVariable);// Floating point number, decimal, maintained.

 console.log(myVariable); // Is now a numeric value.

 myVariable = parseInt( myVariable); // converted to integer, decimal removed.
 console.log(myVariable); // 38

 myVariable = Number( myVariable); // converted to any number type it can.
 console.log(myVariable); // no changes here.

 myVariable = myVariable + 5; // Addition. Beware "+" as it can add, or concatenate, depending on if any of the operands are strings!
 console.log(myVariable);

 myVariable = myVariable.toString(); // convert back to a string.
 console.log(myVariable);

 /**
  * Others types?
  */
var myArrayofDataTypes = [
    // Booleans:
    true,
    false,
// Null:
null,
//Number (float/integer):
34,
168.793,
// string:
'Hello World!',
// value not defined:
undefined,
// not a number:
NaN,
// An Array in an Array!?
[1, 2, 3, 4, 5]

];

/**
 * Creating elements for a webpage.
 */
 var myDataList = document.createElement( 'DL'); // Won't show yet! we didnt tell it where to go.

 // Let's loop through the array so we dont have to type out each item!
 for (var i = 0; i < myArrayofDataTypes.length; i++)
 { // (ASSIGNMENT; TERMINATION CONDITION; ITERATION )
    // create datalist title.
    var dataListTitle = document.createElement('DT');
    dataListTitle.textContent = typeof myArrayofDataTypes[i]; // output the datatype.

    // create datalist data.
    var dataListData = document.createElement('DD');
    dataListData.textContent = myArrayofDataTypes[i];

    // Add our new element to our datalist.
    myDataList.appendChild( dataListTitle);
    myDataList.appendChild( dataListData);
 }
 
var myHeadingText = ' Our Data-Type Test:';
// This is adding HTML to the end of our body.
 document.body.innerHTML += `<!-- Back ticks are used in JS for multi-line strings.-->
 <h2>
    `+myHeadingText/*concatenating strings!*/+`
 <h2>
 `;
 // Add ALL of that to the body! yay! we should be able to see it now.
 document.body.appendChild( myDataList);
 
 /**
  * collecting elements.
  */

  // Get by ID:
  var myHeading = document.getElementById('my-heading');
  myHeading.title = 'This is a heading.'; //Tooltip attribute.
  //myHeading.style.color = 'darkgrtay'; // Please avoid using inline styles.... this is the css file's job!!
  myHeading.className = 'gray-text'; // use classes instaed!

  /**
   * Events!
   */
  myHeading.addEventListener( 'mouseover' /*Here we say which event we are targeting.*/, function ( event/*we can capture info about the event*/ ) {
      this.className = ' salmon-text'; /* In an event, the "this" keyword represent our element (myHeading). */

  });
  myHeading.addEventListener( 'mouseleave' /*Here we say which event we are targeting.*/, function ( event/*we can capture info about the event*/ ) {
    this.className = ' indigo-text'; /* In an event, the "this" keyword represent our element (myHeading). */
  });

  //when you stop hovering....
  myHeading.addEventListener('click', function (event) {
      // The class we want to add.
      var bigClass = 'big-text'; // check if it already has it!
      if (!this.className.includes( bigClass )) // good to do checks like this so we dont have 500 of the same clas on here if the user keeps clicking!
      { // Exclamation 
        this.className += ' big-text'; // concatenating a new class!
        //Remember you ,must have a space between classes when assigning multiple.  
      }
      
  });
   /**
    * Lets make a function.
    */

    // function keyworf, followed by the function name (and parameters if any needed.)
    function addTwoNumbers (x, y)
    {
        x = Number(x); //  Enforce data-type (number.)
        y = Number(y); // Enforce data-type (number.)
        return (x+y); // Add the two together.
    }
function currentDayString ()
{
    // New date object.
    var date = new Date ();
    // Declare a string we can store date info im.
    var dateString = '';
    dateString += date.getFullYear(); // year
    dateString += '.';
    dateString += date.getMonth();// month
    dateString += '.';
    dateString += date.getDay(); // Date
    return dateString;
}

// Output to console.
console.log( 'The current date is \r\n' + currentDayString() ); //\r\n is return/newline - this will now output on TWO lines in your console.