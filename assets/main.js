//Angular
var app = angular.module("devOmamode", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/main.html",
            controller: "MainInit"
        })
        .when("/projects", {
            templateUrl: "views/projects.html"
        })
        .when("/skills", {
            templateUrl: "views/skills.html"
        })
        .when("/contacts", {
            templateUrl: "views/contacts.html"
        })
        .when("/hire", {
            templateUrl: "views/hire.html"
        });
});

app.run(function($rootScope, $location) {
  $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
    const currentPath = $location.path();
    if (currentPath === "/") {
      alert(1);
    }
  });
});

//Active Navigation Link
const navLinks = document.querySelectorAll(".nav-links li");
navLinks.forEach(item => {
    item.addEventListener("click", function () {
        navLinks.forEach(i => {
            i.classList.remove("active");
        });
        item.classList.add("active");
        menuControl();
    });
});

//Navigation bar button
const navBarBtn = document.querySelectorAll("nav .nav-bar")[0];
const navMenu = document.querySelectorAll("nav .nav")[0];
const dMenu = document.querySelectorAll("nav .nav-links")[0];
const dMenuList = document.querySelectorAll("nav .nav-links li");
navBarBtn.addEventListener("click", menuControl);

function menuControl() {
    navBarBtn.classList.toggle("open");

    if (navBarBtn.classList.contains("open")) {
        navMenu.classList.add("open");
        setTimeout(function () {
            dMenu.classList.add("open");
        }, 500);
        dMenuList.forEach(function (li, i) {
            setTimeout(
                function () {
                    li.classList.add("open");
                },
                (i + 1) * 500
            );
        });
    } else {
        dMenuList.forEach(function (li, i) {
            setTimeout(
                function () {
                    li.classList.remove("open");
                },
                (i + 1) * 500
            );
        });
        dMenu.classList.remove("open");
        setTimeout(function () {
            navMenu.classList.remove("open");
        }, 1000);
    }
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
    );
}

//Loading Projects
var isLoaded = false;
window.onscroll = () => {
    if (isInViewport(document.querySelectorAll("header div.content")[0])) {
        document.querySelectorAll(".nav-bar")[0].classList.remove("changebg");
    } else {
        document.querySelectorAll(".nav-bar")[0].classList.add("changebg");
    }
};

const msgs = [
    "Thank you for visiting.",
    "I am a fullstack web developer.",
    "I can create amazing websites and applications.",
    "Since 2017, I have experienced learning and working with various web technologies and languages.",
    "In terms of academics, I am a graduate with proven academic prowess.",
    "It may also interest you to know that I am fast at learning new stuffs and languages given the right environment and tools.",
    "All these portrays I am the right person for your job.",
    "Please, do kindly get in touch.",
    "Permit me to recap."
];

let current_msg = 0;

function displayMsg(el) {
    var msg = msgs[current_msg],
        text = document.querySelector(el);
    if (isset(text)) {
        text.innerHTML = "";
        if (current_msg > msgs.length - 2) {
            current_msg = 0;
        } else {
            current_msg += 1;
        }

        for (let i = 0; i < msg.length; i++) {
            setTimeout(function () {
                text.innerHTML += msg.charAt(i);
                if (i == msg.length - 1) {
                    setTimeout(function () {
                        removeMsg(".brief .text");
                    }, 3000);
                }
            }, 30 * i);
        }
    }
}

function removeMsg(el) {
    var text = document.querySelector(el);
    msg = text.innerHTML;
    var str = "";
    for (let j = 0; j < msg.length - 1; j++) {
        str += msg.charAt(j);
    }
    text.innerHTML = str;
    if (msg.length > 0) {
        setTimeout(function () {
            removeMsg(".brief .text");
        }, 10);
    } else {
        setTimeout(function () {
            displayMsg(".brief .text");
        }, 2000);
    }
}

function isset(el) {
    return el != "" && el != null && el !== undefined;
}

//Skills caret
window.onload = function () {
    const carets = document.querySelectorAll(
        "section.skills .content ul li .item-det .caret"
    );
    carets.forEach(item => {
        item.addEventListener("click", function () {
            let parent = item.parentNode.parentNode.parentNode;
            let desc = document.querySelectorAll(
                "section.skills .content ul li .desc"
            );
            desc.forEach(e => {
                if (
                    parent
                        .getElementsByClassName("desc")[0]
                        .classList.contains("active") &&
                    e.classList.contains("active")
                ) {
                } else {
                    e.classList.remove("active");
                }
            });
            parent.getElementsByClassName("desc")[0].classList.toggle("active");
        });
    });

    setTimeout(function () {
        displayMsg(`.brief .text`);
    }, 3000);

const canvas = document.getElementById('snow-canvas');
if (canvas){
const ctx = canvas.getContext('2d');

let width, height;
let snowflakes = [];

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

// 15 flakes in total, but only 2-3 visible at any moment
function createSnowflakes() {
  snowflakes = [];
  const total = 10;
  for (let i = 0; i < total; i++) {
    snowflakes.push({
      x: Math.random() * width,
      y: Math.random() * -height, // start above the screen
      height: Math.random() * 35 + 5,
      width: Math.random() * 2,
      speed: Math.random() * 0.5 + 0.3,
      delay: Math.random() * 5000 // spread them out over time
    });
  }
}
createSnowflakes();

function draw() {
  ctx.clearRect(0, 0, width, height);
  const now = Date.now();

  ctx.fillStyle = 'white';

  for (let flake of snowflakes) {
    // Delay the start of some flakes to simulate 2-3 at a time
    if (!flake.start) flake.start = now + flake.delay;
    if (now >= flake.start) {
      ctx.fillRect(flake.x, flake.y, flake.width, flake.height);
      flake.y += flake.speed;

      if (flake.y > height) {
        flake.y = Math.random() * -height;
        flake.x = Math.random() * width;
        flake.start = now + Math.random() * 5000;
      }
    }
  }

  requestAnimationFrame(draw);
}
draw();
}  
};
