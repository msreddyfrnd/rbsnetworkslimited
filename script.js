// Slider
let slides = document.querySelectorAll(".slide");
let i=0;
setInterval(()=>{
  slides[i].classList.remove("active");
  i=(i+1)%slides.length;
  slides[i].classList.add("active");
},3000);

// Counter
let counters=document.querySelectorAll(".count");
counters.forEach(c=>{
  let update=()=>{
    let target=+c.getAttribute("data-target");
    let count=+c.innerText;
    let inc=target/100;
    if(count<target){
      c.innerText=Math.ceil(count+inc);
      setTimeout(update,30);
    }else{
      c.innerText=target;
    }
  }
  update();
});

// Sticky header shadow
window.addEventListener("scroll", function(){
  let header = document.getElementById("header");
  if(window.scrollY > 50){
    header.style.boxShadow = "0 3px 10px rgba(0,0,0,0.2)";
  } else {
    header.style.boxShadow = "none";
  }
});

// Fake form
function sendMail(e){
  e.preventDefault();
  alert("Message sent (connect backend for production)");
}
