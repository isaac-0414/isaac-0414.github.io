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
         panel.style.maxHeight = 2000 + "px";
      } 
   });
}

function changeTextAnimation(elementId, textValues) {
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

changeTextAnimation("l-p-text", text);

const currentMembersInfo = [
   {
      photo: "",
      name: "First Last",
      title: "Research Assistant"
   },
   {
      photo: "",
      name: "First Last",
      title: "Research Assistant"
   },
   {
      photo: "",
      name: "First Last",
      title: "Research Assistant"
   },
   {
      photo: "",
      name: "First Last",
      title: "Research Assistant"
   },
   {
      photo: "",
      name: "First Last",
      title: "Research Assistant"
   },
   {
      photo: "",
      name: "First Last",
      title: "Research Assistant"
   },
   {
      photo: "",
      name: "First Last",
      title: "Research Assistant"
   },
];

const currentMemberDiv = document.querySelector('.current-members');

for (member of currentMembersInfo) {
   let tpl = document.createElement("template");
   tpl.innerHTML = `
   <div class="member-card d-flex flex-column align-items-center">
      <div class="photo">
      </div>
      <div class="member-info d-flex flex-column align-items-center">
         <h2 class="name">
            ${member.name}
         </h2>
         <p class="title">
            ${member.title}
         </p>
      </div>
   </div>
   `;
   currentMemberDiv.append(tpl.content);

}