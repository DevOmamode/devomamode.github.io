let animationFrameId;
//Angular
var app = angular.module("devOmamode", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/main.html"
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
setTimeout(function () {
        displayMsg(`.brief .text`);
    }, 1000);    
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

  animationFrameId = requestAnimationFrame(draw);
}
draw();
}
}else{
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  ctx.clearRect(0, 0, width, height);
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

const msgs = [
  "Thank you for visiting my portfolio.",
  "I am a full-stack web developer dedicated to crafting robust and scalable solutions.",
  "My core expertise lies in backend development, where I build the foundation for seamless web applications.",
  "I have the skills to develop stunning websites and powerful applications that meet your unique needs.",
  "Since 2017, I've immersed myself in a diverse range of web technologies and programming languages, constantly expanding my skillset.",
  "Academically, I am a graduate with a strong record of achievement, demonstrating a solid foundation for complex problem-solving.",
  "Furthermore, I possess a proven ability to quickly learn new technologies and languages when provided with the appropriate resources and environment.",
  "Therefore, my comprehensive skills and dedication make me the ideal candidate for your web development needs.",
  "Ready to bring your vision to life? Contact me now, and let's build something extraordinary together.",
  "Let me recap,"
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
                    }, 1000);
                }
            }, 20 * i);
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

window.onload = function () {
    
};
