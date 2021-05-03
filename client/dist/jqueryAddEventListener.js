console.log('welcome to the page from the jqueryAddEventListener.js file');

const handleResize = () => {
  console.log('resized to: ', window.innerWidth, 'x', window.innerHeight);
}

const handleScroll = () => {
  console.log('scrolling window...')
}

const handleAddEventListenerScroll = () => {
  console.log('scrolling ael-inner-container...')
}

const handleAddEventListenerClick = () => {
  console.log('ael-inner-container click')
}

let target = document.querySelector('#ael-inner-container');
let targetInner1 = document.querySelector('#inner1');


console.log('target: ', target);
console.log('targetInner1: ', targetInner1);


window.addEventListener('resize', handleResize);
window.addEventListener('scroll', handleScroll);

target.addEventListener('click', handleAddEventListenerClick);
targetInner1.addEventListener('click', ()=>console.log('targetInner1 clicked'));


const inner1Scroll = () => console.log('targetInner1 onscrolled');

$("#ael-inner").scroll(function() {
  console.log('hiiiii')
});


$("#AddEventListener-container").click(function() {
  if (document.querySelector('#AddEventListener-container').style.backgroundColor === 'red') {
    $("#AddEventListener-container").css("backgroundColor", "green");
  } else {
    $("#AddEventListener-container").css("backgroundColor", "red");
  }
});