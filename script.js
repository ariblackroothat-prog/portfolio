// =========================
// Smooth Navbar Active
// =========================

const links = document.querySelectorAll("nav ul li a");

links.forEach(link=>{
    link.addEventListener("click",()=>{
        links.forEach(item=>item.classList.remove("active"));
        link.classList.add("active");
    });
});

// =========================
// Scroll Animation
// =========================

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section").forEach(sec=>{
    sec.classList.add("hidden");
    observer.observe(sec);
});

// =========================
// Typing Effect
// =========================

const text = [
    "AI & Data Science Engineer",
    "Full Stack Developer",
    "Python Developer",
    "AWS Enthusiast"
];

let count = 0;
let index = 0;
let current = "";
let letter = "";

(function type(){

    if(count === text.length){
        count = 0;
    }

    current = text[count];
    letter = current.slice(0, ++index);

    document.querySelector(".left h3").textContent = letter;

    if(letter.length === current.length){

        count++;
        index = 0;

        setTimeout(type,1200);

    }else{

        setTimeout(type,100);

    }
    const btn=document.getElementById("themeToggle");

btn.onclick=function(){

document.body.classList.toggle("light");

}

})();
