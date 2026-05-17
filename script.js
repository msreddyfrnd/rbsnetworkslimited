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

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if(top < window.innerHeight - 50){
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});
// Fake form
function sendMail(e){
  e.preventDefault();
  alert("Message sent (connect backend for production)");
}
