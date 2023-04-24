// First Banner Slider start
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("banner_item");
    let dots = document.getElementsByClassName("first-slider_dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" first-slider-active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " first-slider-active";
}
// First Banner Slider end
setInterval(() => {
    // const slider = document.querySelector('.banner_slider');
    let slides2 = document.getElementsByClassName("banner_slider");
    
    let slides = document.getElementsByClassName("banner_item");

    // const firstImg = slider.querySelector('banner_item');
    slides2.appendChild(slides);
  }, 10000);

// product zoom effect
const imgContElement = document.querySelector(".img-container");
const imgEle = document.querySelector(".img-container img");
const listProductEle = document.querySelector(".list_product");
// precentage of zoom
const zoom = 300;
imgContElement.addEventListener('mouseenter', function () {
    imgEle.style.width = zoom + '%';
});
imgContElement.addEventListener('mouseleave', function () {
    imgEle.style.width = '100%';
    imgEle.style.top = '0';
    imgEle.style.left = '0';
});
imgContElement.addEventListener('mousemove', function (mouseEvent) {
    let obj = imgContElement;
    let obj_left = 0;
    let obj_top = 0;
    let xpos;
    let ypos;

    while (obj.offsetParent) {
        obj_left += obj.offsetLeft;
        obj_top += obj.offsetTop;
        obj = obj.offsetParent;
    }
    if (mouseEvent) {
        xpos = mouseEvent.pageX;
        ypos = mouseEvent.pageY;
    }
    else {
        xpos = window.event.x + document.body.scrollLeft - 2;
        ypos = window.event.y + document.body.scroltop - 2;

    }
    xpos -= obj_left;
    ypos -= obj_top;
    const imgWidth = imgEle.clientWidth;
    const imgHeight = imgEle.clientHeight;
    imgEle.style.top = -(((imgHeight - this.clientHeight) * ypos) / this.clientHeight) + 'px';
    imgEle.style.left = -(((imgWidth - this.clientWidth) * xpos) / this.clientWidth) + 'px';
    // change image
    Array.from(listProductEle.children).forEach((productElm, i, list) => {
        productElm.addEventListener('click', function () {
            const newSrc = productElm.querySelector('img').src;
            imgEle.src = newSrc;
            list.forEach(prod => prod.classList.remove('active'))
            productElm.classList.add('active');
        });
    });
});
// change height of the image container
function chnageHeight(){
    imgContElement.style.height = imgContElement.clientWidth + 'px'
}
chnageHeight();
// changeHeight
window.addEventListener('resize',chnageHeight);
// ============================================================= top Delas Slider====================================
let slideIndexTop = 1;
showSlides_top(slideIndexTop);

function plusSlides(n) {
    showSlides_top(slideIndexTop += n);
  // alert("hello panka");

}

function showSlides_top(n) {
  let i;
  let slides = document.getElementsByClassName("Top_Best_Celler_slider");
  // let dots = document.getElementsByClassName("dot_top");
  if (n > slides.length) {
    slideIndexTop = 1;
    // alert("hello panka");

  }
  if (n < 1) {
    slideIndexTop = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" activetop", "");

 
  // }
  slides[slideIndexTop - 1].style.display = "block";
  // dots[slideIndexTop - 1].className += " activetop";
}
// Number increment decrement
let a=1;
let Number=document.getElementById('Number');
Number.innerHTML=a;
// console.log(Number);
function Nuber_Click_increment(){
  a++;
//   alert('heloo');
//   console.log(a);
  Number.innerHTML=a;
}
 function Nuber_Click_decrement(){
    // alert('heloo');
  a--;
  Number.innerHTML=a;

}