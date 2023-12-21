var acc = document.getElementsByClassName("accordion");
var i;
         
function toggleMobileNav() {
   document.querySelector("#l-p-header nav").classList.toggle("active");
}

for (i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
         panel.style.maxHeight = null;
      } else {
         panel.style.maxHeight = 9999 + "px";
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


// The following section is to generate all the members

const currentMembersInfo = [
   {
      photo: "framework/images/members/yun.jpg",
      name: "Yun Wang",
      description: "'24 Math and Computer Science"
   },
   {
      photo: "framework/images/members/joni.jpg",
      name: "Joni Li",
      description: "Master of Computer Science"
   },
   {
      photo: "framework/images/members/james.png",
      name: "James Zhu",
      description: "'25 Math and Computer Science"
   },
   {
      photo: "framework/images/members/himnish.jpg",
      name: " Himnish Jain",
      description: "'25 dual degree in Computer Science and Statistics"
   },
   {
      photo: "framework/images/members/isaac.jpg",
      name: "Isaac Zheng",
      description: "'25 Computer Science"
   },
   {
      photo: "framework/images/members/yuxuan.jpg",
      name: "Yuxuan Chen",
      description: "'24 Math and Computer Science"
   },
   {
      photo: "framework/images/members/chengyi.jpg",
      name: "Chengyi Wang",
      description: "'25 Computer Science"
   },
   {
      photo: "framework/images/members/default.png",
      name: "Arman Michael Mehdipour",
      description: "Grad in Psych/CS"
   },
   {
      photo: "framework/images/members/atharva.jpg",
      name: "Atharva Naik",
      description: "'24 Math and Computer Science"
   }
];

const pastMembers = ["Guru Nanma P", "Kedar Manda", "Chen Yang", "Ayan Bhowmick", "Nathan Sparacino", "Ashank Kumar", "Garret Lualdi", "Anisha Gummadi", 
   "Ansh Sharma", "Brandon Dang", "Eric Armendariz", "Garima Sharma", "Alex Ackerman", "Jason Situ", "Nikhil Richard", "Timur Javid", 
   "Jiaming Zhang", "Harsh Deep", "Joanna Huang", "Cindy Feng", "Mona Jawad", "Sicong Zhang", "Yun Huang", "Blair Wang", 
   "William Foster", "Avinash Nathan", "Siyi Weng", "Aashi Agrawal", "Abhiram Tamvada", "Saurav Chittal", "Helen Ilkiu", 
   "Xinyu Liu", "Xiping Sun"];

const currentMemberDiv = document.querySelector('.current-members');

// render current members
for (const member of currentMembersInfo) {
   let tpl = document.createElement("template");
   tpl.innerHTML = `
   <div class="member-card">
      <div class="photo">
         <img src=${member.photo} alt=${member.name}>
      </div>
      <div class="member-info">
         <h2 class="name">
            ${member.name}
         </h2>
         <p class="description">
            ${member.description}
         </p>
      </div>
   </div>
   `;
   currentMemberDiv.append(tpl.content);
}

// render past members

pastMembers.sort();

const pastMemberDiv = document.querySelector('.past-members');

for (const member of pastMembers) {
   const nameDiv = document.createElement("div");
   nameDiv.innerText = member;
   pastMemberDiv.append(nameDiv);
}

// Get the current year
var currentYear = new Date().getFullYear();
    
// Update the copy-right with the current year
document.getElementById("copy-right").textContent = "© " + currentYear + " University of Illinois Board of Trustees";
