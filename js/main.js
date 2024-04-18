// Errors and Error handling
// javascript is little forgiving:)
// for example 
variable = "dude";
console.log(variable);
/* as we know this shouldn't give out put,
we didn't define it as variable(const,let,var)
but it is giving out put */
// so we need to restrict the rules of javascript
// inorder to do that we have 
"use strict"; 
variable = "dude";
console.log(variable);
// now we have error (referenceError)
// to fix this we know we need define variable**
const variable = "dude";
console.log(variable); 
//////////////////////////////////////////
// let's look at some different types of errors (not included all)
"use strict";
// referenceError
variable = "dude";
console.log(variable); 

// syntaxError 
/* this error is detected by javascript easily 
we don't need catch the syntaxError. this won't 
allow the code to execute either. this error will 
stop the code right after finding it */
 Object..create(); 

// typeError
const variable = "dude";
variable = "jack"; 
/////////////////////////////////////////////////////
/* let's goahead and create a function that 
will intentionally make an error */
// and try to catch the create error (try and catch) ****

const makeError = () => {
 try {
   const name = "dude";
   name = "jack";
 } catch(err) {
   console.error(err);
 }
}
makeError();
/* here you see error is no more in red color
that's because we used .log method , we can use .log
.error, .warn, .table let's try each */
//////////////////////// 
// think of properties (.name, .massage, .stack)***

"use strict";
const makeError = () => {
  try {
    const name = "dude";
    name = "jack";
  } catch(e) {
    console.error(e.name);
  }
}
makeError();
/* during the developement beside just
logging error to the console you might wanna 
function with it, 
to do that we have ** logTheError *** */
////////////////////////////////////

"use strict";
const makeError = () => {
  try {
    const name = "dude";
    name = "jack";
  } catch (e) {
    console.log(e.stack)
    logTheError(e.stack);
  }
}
makeError();
/* your sending the error stack to logs 
you can record it and look at the logs later on */
/////////////////////////////////////////////////
// let's create a custom error****

"use strict";
const makeError = () => {
  try {
    // here we have new keyword ** throw ***
    throw new customError("This is a custom error");
  } catch(err) {
    console.error(err.name);
    console.error(err.message);
    console.error(err.stack);
  }
}
makeError();
//here in the custom error function 
//we using massage as parameter 
function customError(message) {
  this.name = "customError";
  this.message = message;
  this.stack = `${this.name} : ${this.message}`;
} 
//////////////////////////////////////////////
// one more time!

"use strict";
const makeError = () => {
  try {
    throw new customError("This is a customError");
  } catch(err) {
    console.error(err.name);
    console.error(err.message);
    console.error(err.stack);
  }
} 
makeError();
function customError(message) {
  this.name = "customError";
  this.message = message;
  this.stack = `${this.name} : ${this.message}`;
} 
//////////////////////////////////////////////////
// **** generic built-in error constructor ****

"use strict";
const makeError = () => {
  try {
    // Error = generic built-in error constructor
    throw new Error("This is a Error!");
  } catch (err) {
    console.error(err.name);
    console.error(err.message);
    console.error(err.stack);
  }
}
makeError()
/////////////////////////////////////
// *** finally ***
/* finally = always executes no matter 
what the condition is *** */
/* to bring * finally * fully functional we
need to use something that iterates the function 
several times. inorder to do that we have */

"use strict";
const makeError = () => {
  let i = 1;
  while (i<=5) {
    try {
      throw new Error("This is a Error");
    } catch (err) {
      console.error(err.name);
      console.error(err.message);
      console.error(err.stack);
    } finally {
      console.log("....finally this step is over!");
      i++; //we have increment in finally because 
          //finally executes for every step no what the condition is 
    }
  }
} 
//=================================//

"use strict";
const makeError = () => {
  let i = 1;
  while (i<=5) {
    try {
      // we can't directly use throw in try block. we need work on iteration too
      // i divided by 2 reminder is not equal to zero = odd number ***
      if (i%2 !==0) {
        throw new Error("Odd number");
      }
      // if there is error present in try block then else won't execute 
      // it'll directly go to the catch
      // else executes only if there is no error thrown in try block
      console.log("Even number");
    } catch (err) {
      console.error(err.stack);
    } finally {
      console.log("finally this step is done!");
      i++;
    }
  }
}
makeError(); 
//========================================//

"use strict";
const makeError = () => {
  let i = 1;
  while (i<=5) {
    try {
      if (i%2 !==0) {
        throw new Error("Odd number");
      }
      console.log(`${this.i} Even number`)
    } catch (err) {
      console.error(`${this.i}`+ err.stack);
    } finally {
      console.log("finally this step is done!");
      i++;
    }
  }
}
makeError(); 
//============================================//

"use strict";
const makeError = () => {
  let i = 1;
  while (i<=5) {
    try {
      if (i%2 !==0) {
        throw new Error("Odd number!");
      }
      console.log("Even number!");
    }catch (err) {
      console.error(err.stack);
    } finally {
      console.log("finally!");
      i++;
    }
  }
}
makeError(); 
//===========================================//

"use strict";
const makeError = () => {
  let i = 1;
  while (i<=6) {
    try {
      if (i%2 !==0) {
        throw new Error(`i = ${this.i}, Odd number!`);
      } 
      console.log(`i = ${this.i}, Even number!`);
    } catch (err) {
      console.error(err.stack);
    } finally {
      console.log("finally!");
      i++;
    }
  }
}
makeError(); 
//============================================//

"use strict";
const makeError = () => {
  let i = 1;
  while (i<=6) {
    try {
      if (i%2 !==0) {
        throw new Error("Odd number");
      } 
      console.log(i);
      console.log("Even number!");
    } catch (err) {
      console.log(i);
      console.error(err.stack);
    } finally {
      console.log("finally!");
      i++;
    }
  }
}
makeError(); 
//=======================================//
"use strict";
const makeError = () => {
  let i = 1;
  while (i<=6) {
    try {
      if (i%2 !==0) {
        throw new Error("Odd number");
      } 
      console.log("i = "+i);
      console.log("Even number!");
    } catch (err) {
      console.log("i = "+i);
      console.error(err.stack);
    } finally {
      console.log("finally!");
      i++;
    }
  }
}
makeError();














