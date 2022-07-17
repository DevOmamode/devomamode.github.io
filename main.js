//Active Navigation Link
const navLinks = document.querySelectorAll(".nav-links li");
navLinks.forEach((item) => {
  item.addEventListener("click", function(){
    navLinks.forEach((i) => {
      i.classList.remove("active");
    });
    item.classList.add("active");
  });
});

//Navigation bar button
const navBarBtn = document.querySelectorAll("nav .nav-bar")[0];
const navMenu = document.querySelectorAll("nav .nav")[0];
const dMenu = document.querySelectorAll("nav .nav-links")[0];
navBarBtn.addEventListener("click", function(){
  navBarBtn.classList.toggle("open");
  
  if (navBarBtn.classList.contains("open")){
    navMenu.classList.add("open");
    setTimeout(function(){
    dMenu.classList.add("open");
    }, 500);
  }
  else
  {
    dMenu.classList.remove("open");
    setTimeout(function(){
    navMenu.classList.remove("open");
    }, 500);
  }
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

//Loading Projects
var isLoaded = false;
window.onscroll = () => {
  if (isInViewport(document.querySelectorAll("header div.content")[0]))
  {
  document.querySelectorAll(".nav-bar")[0].classList.remove("changebg");
  }
  else
  {
  document.querySelectorAll(".nav-bar")[0].classList.add("changebg");
}
  };

const msgs = ["Thank you for visiting.", "I am a fullstack web developer.","I can create amazing websites and applications.","I have 5+ years of experience learning and working with various web technologies and languages.", "In terms of academics, I am currently in my final semester in pursuit of a BSc. Degree in Business Management and so far, I have demonstrated great academic prowess having being topping my class and faculty.","It may also interest you to know that i am fast at learning new stuffs and languages given the right environment and tools.","All these portrays i am the right person for your job.", "Please, do kindly get in touch.", "Permit me to recap."];
var current_msg = 0;

function displayMsg(){
 var msg = msgs[current_msg], text = document.querySelectorAll(".brief .text")[0];
 text.innerHTML = "";
  if (current_msg > msgs.length - 2)
  {
    current_msg = 0;
  }
  else
  {
    current_msg += 1;
  }
  for (let i = 0; i < msg.length; i++)
  {
    setTimeout(function(){
      text.innerHTML += msg.charAt(i);
      if (i == msg.length - 1)
    {
      setTimeout(function (){
      removeMsg(msg);
      }, 2000);
    }
  }, 20 * i);
  }
}

function removeMsg(){
var text = document.querySelectorAll(".brief .text")[0];
msg = text.innerHTML;
var str = "";
  for (let j = 0; j < msg.length - 1; j++)
  {
    str += msg.charAt(j);
  }
  text.innerHTML = str;
  if (msg.length > 0)
  {
    setTimeout(removeMsg, 5);
  }
  else
  {
    setTimeout(displayMsg, 1000);
  }
}

setTimeout(displayMsg, 2000);

//Skills caret
window.onload = function(){
const carets = document.querySelectorAll("section.skills .content ul li .item-det .caret");
carets.forEach((item) => {
  item.addEventListener("click", function(){
    let parent = item.parentNode.parentNode.parentNode;
    let desc = document.querySelectorAll("section.skills .content ul li .desc");
    desc.forEach((e) => {
      if (parent.getElementsByClassName("desc")[0].classList.contains("active") && e.classList.contains("active"))
      {

      }
      else
      {
      e.classList.remove("active");
      }
    })
    parent.getElementsByClassName("desc")[0].classList.toggle("active");
  });
});
};
