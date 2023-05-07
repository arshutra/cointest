// hamberger


let hamberger = document.getElementById("hambergur")
let hamicon = document.getElementById("ham_icon")
let hamclose= document.getElementById("close_ham")


  
function open_ham(){
   hambergur.style.visibility="visible"
}
function close_ham(){
   hambergur.style.visibility="hidden"
}

// countdown

var countDownDate = new Date("June 13, 2023 00:00:00").getTime();


var x = setInterval(function() {


  var now = new Date().getTime();

  
  var distance = countDownDate - now;

  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);


// faq



function showContent(contentId) {
  var contents = document.querySelectorAll('.content div');
  for (var i = 0; i < contents.length; i++) {
    contents[i].classList.remove('active');
  }

  
  var content = document.getElementById(contentId);
  content.classList.add('active');
}

var menuItems = document.querySelectorAll('.menu li');
for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', function() {
    var contentId = this.getAttribute('onclick').replace("showContent('", '').replace("')", '');
    showContent(contentId);
  });
}


// menu

function hide_off_content(){
  document.getElementById("hide_content").style.display="none"
}

