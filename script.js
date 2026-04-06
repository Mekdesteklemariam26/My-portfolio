// Smooth scroll
document.querySelectorAll('a').forEach(link=>{
link.onclick=function(e){
if(this.hash){
e.preventDefault();
document.querySelector(this.hash).scrollIntoView({behavior:'smooth'});
}
}
});

// Modal
const modal=document.getElementById('modal');
function openModal(t,d,i){
modal.style.display='flex';
document.getElementById('modalTitle').innerText=t;
document.getElementById('modalDesc').innerText=d;
document.getElementById('modalImage').src=i;
}
function closeModal(){modal.style.display='none';}

// Fade animation
const faders=document.querySelectorAll('.fade-up');
const obs=new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting){e.target.classList.add('show');}
});
});
faders.forEach(f=>obs.observe(f));

// Typing animation
const textArray=["Health","Confidence","Wellness","Growth","Success"];
let index=0;
let charIndex=0;
const typing=document.querySelector(".typing-text");

function type(){
if(charIndex<textArray[index].length){
typing.textContent+=textArray[index].charAt(charIndex);
charIndex++;
setTimeout(type,100);
}else{
setTimeout(erase,1500);
}
}

function erase(){
if(charIndex>0){
typing.textContent=textArray[index].substring(0,charIndex-1);
charIndex--;
setTimeout(erase,50);
}else{
index=(index+1)%textArray.length;
setTimeout(type,200);
}
}

document.addEventListener("DOMContentLoaded",type);