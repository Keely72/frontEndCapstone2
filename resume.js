const text = document.querySelector(".banner")
document.addEventListener('click', myFunction);

let verses = document.querySelector("#verses").children
let count = 0
function myFunction() {
  Array.from(verses).forEach(el=> el.style.display="none")
  if(count < verses.length){
    verses[count].style.display = 'block'
    count ++
    if(count===verses.length) count =0
  } 
}