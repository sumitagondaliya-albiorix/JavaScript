// ===================JavaScript==================================
// // JavaScript and Java are completely different languages, both in concept and design.

// JavaScript was invented by Brendan Eich in 1995, and became an ECMA standard in 1997.

// ECMA-262 is the official name of the standard. ECMAScript is the official name of the language.
// JavaScript is the default scripting language in HTML.


// ==================What Can JavaScript Do?=======================

//JavaScript Can Change HTML Content

// Method:getElementById().--> finds an HTML element (with id=" "), and changes the element content (innerHTML)

// e.g.<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>

// JavaScript accepts both double and single quotes:e.g.-> "Hello JS" and 'Hello JS' are correct

// JavaScript Can Change HTML Attribute Values e.g-->In this case JavaScript changes the value of
//  the src (source) attribute of an image.</p>

/* <button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>

<img id="myImage" src="pic_bulboff.gif" style="width:100px">

<button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button> */

// JavaScript Can Change HTML Styles (CSS)
// Changing the style of an HTML element, is a variant of changing an HTML attribute:

// =====================JavaScript Where To??=======================
// In HTML, JavaScript code is inserted between <script> and </script> tags.
// e.g. <p id="demo"></p>
/* {<script>
document.getElementById("demo").innerHTML = "My First JavaScript";
</script> }*/

// ============================JavaScript Functions and Events=============================
// A JavaScript function is a block of JavaScript code, that can be executed when "called" for.

// For example, a function can be called when an event occurs, like when the user clicks a button.


// =======================JavaScript in <head> or <body>======================================
// You can place any number of scripts in an HTML document.
// Scripts can be placed in the <body>, or in the <head> section of an HTML page, or in both.

// e.g.
/* <head>
// <script>
// function myFunction() {
//   document.getElementById("demo").innerHTML = "Paragraph changed.";
// }
// </script>
// </head> 
<body>
<button type="button" onclick="myFunction()">Try it</button>
</body>*/

// =>Note:Placing scripts at the bottom of the <body> element improves the
//        display speed, because script interpretation slows down the display.

// =======================External JavaScript=============================
// Scripts can also be placed in external files:

/*Placing scripts in external files has some advantages:

It separates HTML and code
It makes HTML and JavaScript easier to read and maintain
Cached JavaScript files can speed up page loads

==>An external script can be referenced in 3 different ways:

With a full URL (a full web address)==><script src="https://www.w3schools.com/js/myScript.js"></script>
With a file path (like /js/)==><script src="/js/myScript.js"></script>
Without any path ==><script src="myScript.js"></script>*/ 

/*
============================JavaScript Display Possibilities==================
JavaScript can "display" data in different ways:

Writing into an HTML element, using innerHTML.
Writing into the HTML output using document.write().
Writing into an alert box, using window.alert().
Writing into the browser console, using console.log().
*/ 

// =================JavaScript Variables=========================================
// Variables are containers for storing values.
// Automatically
// Using var
// Using let
// Using const

// 
// ==================When to Use var, let, or const?================================
// 1. Always declare variables

// 2. Always use const if the value should not be changed

// 3. Always use const if the type should not be changed (Arrays and Objects)

// 4. Only use let if you can't use const

// 5. Only use var if you MUST support old browsers.


//========let==============
// Variables defined with let cannot be Redeclared

// Variables defined with let must be Declared before use

// Variables defined with let have Block Scope

// =================var========================
// 