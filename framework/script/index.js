var acc = document.getElementsByClassName("accordion");
var i;
         
function toggleMobileNav() {
   document.querySelector(".navbar-nav").classList.toggle("active");
}

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
   this.classList.toggle("active");
   var panel = this.nextElementSibling;
   if (panel.style.maxHeight) {
   panel.style.maxHeight = null;
   } else {
   panel.style.maxHeight = panel.scrollHeight + "px";
   } 
});
}

var click1 =false
function spin1(){
      var spin1 = document.getElementById("arrow-right-2");
   if(!click1){
      spin1.style.transform = "rotate(90deg)";
      click1=true;
   }else{
      click1=false;
      spin1.style.transform = "rotate(360deg)";
   }
}

var click2 =false
function spin2(){
      var spin2 = document.getElementById("arrow-right-3");
   if(!click2){
      spin2.style.transform = "rotate(90deg)";
      click2=true
   }else{
      click2=false;
      spin2.style.transform = "rotate(360deg)";
   }
}

var click3 =false
function spin3(){
      var spin3 = document.getElementById("arrow-right-4");
   if(!click3){
      spin3.style.transform = "rotate(90deg)";
      click3=true
   }else{
      click3=false
      spin3.style.transform = "rotate(360deg)";
   }
}

// // get the x value of element with class .navbar-barnd
// const x = document.querySelector("a.navbar-brand").offsetLeft;

// // assign x to the text-indent of .animated-words.span
// // document.querySelector(".animated-words.span").style.textIndent = x + "px";
// document.querySelector("#l-p-text").style.textIndent = 3*x + "px";



function changeTextOnHover(elementId, textValues) {
   // const parent_element = document.getElementById("l-p-text");
   // // parent_element.style.backgroundPosition = "left";

   // Get the element with the specified elementId
   const element = document.getElementById(elementId);
 
   // Set the initial text value of the element to the first value in the textValues array
   initial_text = "";
   let text = initial_text;
 
   // Set the text value of the element to the initial value
   element.innerText = text;
 
   // Set up a hover event listener on the element
   element.addEventListener("mouseenter", function() {
      element.innerText = textValues[0];
      let i = 0; // Initialize a counter variable
   
      // Set up an interval that changes the text value of the element every 2 seconds
      const interval = setInterval(() => {
         // Increment the counter variable
         i = (i+1) % textValues.length;
   
         // Change the text value to the next value in the textValues array, or loop back to the beginning if we've reached the end of the array
         text = textValues[i];
         element.innerText = text;
      }, 2000);
   
      // Set up a mouseleave event listener to clear the interval when the mouse leaves the element
      element.addEventListener("mouseleave", function() {
         clearInterval(interval);
         element.innerText = initial_text;
      });
   });


   document.getElementById("launch-button").addEventListener("mouseenter", function() {
      const parent_element = document.getElementById("l-p-text");
      parent_element.style.backgroundPosition = "left";

      element.innerText = textValues[0];
      let i = 0; // Initialize a counter variable
   
      // Set up an interval that changes the text value of the element every 2 seconds
      const interval = setInterval(() => {
         // Increment the counter variable
         i = (i+1) % textValues.length;
   
         // Change the text value to the next value in the textValues array, or loop back to the beginning if we've reached the end of the array
         text = textValues[i];
         element.innerText = text;
      }, 2000);

      document.getElementById("launch-button").addEventListener("mouseleave", function() {
         clearInterval(interval);
         const parent_element = document.getElementById("l-p-text");
         parent_element.style.backgroundPosition = "";
         element.innerText = initial_text;
      });
   });
}

// mobiel version of text animation
function changeTextMobile(elementId, textValues) {
   console.log("mobile")

   const element = document.getElementById(elementId);
 
   // Set the initial text value of the element to the first value in the textValues array
   initial_text = "";
   let text = initial_text;
 
   // Set the text value of the element to the initial value
   element.innerText = text;

   element.innerText = textValues[0];
   let i = 0; // Initialize a counter variable

   // Set up an interval that changes the text value of the element every 2 seconds
   const interval = setInterval(() => {
      // Increment the counter variable
      i = (i+1) % textValues.length;

      // Change the text value to the next value in the textValues array, or loop back to the beginning if we've reached the end of the array
      text = textValues[i];
      element.innerText = text;
   }, 2000);
}

const text = ["is practical", "is accessible", "is real-time", "is live captioning reimagined"];

(window.innerWidth < 992) ? changeTextMobile("l-p-text", text) : changeTextOnHover("l-p-text", text);




// const resizeImageToFitParent = (imageId, parentId) => {
//    // First, get the parent element and the image element
//    const parent = document.getElementById(parentId);
//    const image = document.getElementById(imageId);

//    // Get the width and height of the parent element
//    const parentWidth = parent.offsetWidth;
//    const parentHeight = parent.offsetHeight;

//    // Get the original width and height of the image
//    const originalWidth = image.naturalWidth;
//    const originalHeight = image.naturalHeight;

//    // Calculate the aspect ratio of the image
//    const aspectRatio = originalWidth / originalHeight;

//    // Check if the width or height of the parent element is the limiting factor in resizing the image
//    if (parentWidth / aspectRatio <= parentHeight) {
//       // If the width is the limiting factor, set the width of the image to the width of the parent element and the height accordingly
//       image.style.width = parentWidth + "px";
//       image.style.height = parentWidth / aspectRatio + "px";
//    } else {
//       // If the height is the limiting factor, set the height of the image to the height of the parent element and the width accordingly
//       image.style.height = parentHeight + "px";
//       image.style.width = parentHeight * aspectRatio + "px";
//    }
// }

// resizeImageToFitParent("grainger", "3rd-img");
// resizeImageToFitParent("vr-illinois", "3rd-img");
// resizeImageToFitParent("uiuc", "3rd-img");


//     const scrollPosition = window.scrollY;
//     const header = document.querySelector('header');
//     const headerHeight = header.offsetHeight;
//     const nav = document.querySelector('nav');
//     const navHeight = nav.offsetHeight;
//     const navLinks = document.querySelectorAll('nav a');
//     const navLogo = document.querySelector('.logo');
//     const navLogoHeight = navLogo.offsetHeight;
//     const navLogoWidth = navLogo.offsetWidth;
//     const navLogoMargin = navLogoHeight / 2;
//     const navLogoMarginTop = navLogoHeight / 2;
//     const navLogoMarginLeft = navLogoWidth / 2;

//     // console.log(scrollPosition, headerHeight);
//     if (scrollPosition > headerHeight) {
//         nav.classList.add('fixed');
//         nav.style.top = `${navHeight}px`;
//         nav.style.height = `${navHeight}px`;
//         nav.style.width = `100%`;
//         nav.style.background = `#fff`;
//         nav.style.boxShadow = `0 2px 4px 0 rgba(0, 0, 0, 0.1)`;
//         nav.style.zIndex = `999`;
//         navLogo.style.marginTop = `${navLogoMarginTop}px`;
//         navLogo.style.marginLeft = `${navLogoMarginLeft}px`;
//         navLinks.forEach(link => {
//             link.style.color = `#000`;
//         });
//     }
//     else {
//         nav.classList.remove('fixed');
//         nav.style.top = `0`;
//         nav.style.height = `auto`;
//         nav.style.width = `auto`;
//         nav.style.background = `transparent`;
//         nav.style.boxShadow = `none`;
//         navLogo.style.marginTop = `${navLogoMargin}px`;
//         navLogo.style.marginLeft = `${navLogoMargin}px`;
//         navLinks.forEach(link => {
//             link.style.color = `#fff`;
//         });
//     }
// });