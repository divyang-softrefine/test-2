///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// Button Navigation 

const btnNavEl = document.querySelector(".logo-mobile");
const headerEl = document.querySelector(".container__header-nav");
btnNavEl.addEventListener('click',function(){
  headerEl.classList.add("left-open")
})

const btnNavEl1 = document.querySelector(".logo-mobile-close");
btnNavEl1.addEventListener('click',function(){
  headerEl.classList.remove("left-open")
})

const btnNavEl2 = document.querySelector(".mobile-user-button");
const headerEl2 = document.querySelector(".container__user-menu");
btnNavEl2.addEventListener('click',function(){
  headerEl2.classList.add("right-open")
})
const btnNavEl3 = document.querySelector(".mobile-user-button-close");
btnNavEl3.addEventListener('click',function(){
  headerEl2.classList.remove("right-open")
})

var allButtons = document.querySelectorAll('button[class^=btn__menu]');
const headerEl4 = document.querySelector(".dropdown-menu");
for (var i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener('click',function(clickbtn){
    if(this.classList.contains("active"))
    {

    }
    else{
      headerEl4.classList.remove("btn__menu-toggled");
      setTimeout(()=>{
        headerEl4.classList.add("btn__menu-toggled");
      }, 300)
      for( var l=0; l<allButtons.length;l++){
        if (this != allButtons[l]){
          allButtons[l].classList.remove("active");
        }
      }
      this.classList.add("active");
    }
  })
}

var allMenus = document.querySelectorAll('h4[class*=dropdown-heading]');
var allDropMenus = document.querySelectorAll('div[class*=dropmenu]');
for (var j = 0; j< allMenus.length; j++) {
  allMenus[j].addEventListener('click',function(){
    for(var k=0 ; k<allDropMenus.length ; k++){
      if(this.parentElement!=allDropMenus[k]){
        allDropMenus[k].classList.remove("menu-open");
      }
    }
    this.parentElement.classList.toggle("menu-open");
  })
}


// const headerEl4 = document.querySelector(".dropdown-menu");
// document.getElementsByClassName("btn__menu").addEventListener('click',function(clickmenu){
//   headerEl4.classList.remove("btn__menu-toggled");
//   setTimeout(()=>{
//     headerEl4.classList.add("btn__menu-toggled");
//   }, 300)
// })




///////////////////////////////////////////////////////////
// Smooth Scrolling animation

const allLinksEl = document.querySelectorAll('a:link');

allLinksEl.forEach(function(link){
  link.addEventListener('click',function(e){
    e.preventDefault();
    const hrefEl = link.getAttribute('href');
    

    // scroll back to top
    if(hrefEl==="#") window.scrollTo({
      top : 0,
      behavior : "smooth",
    })

    // scroll to other links
    if(hrefEl!=="#" && hrefEl.startsWith('#')) {
      const sectionEl = document.querySelector(hrefEl);
      sectionEl.scrollIntoView({ behavior : "smooth"});
    }

    // close mob nav
    if(link.classList.contains('main-nav-link')){
      headerEl.classList.toggle('nav-open');
    }
  })
})

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js



