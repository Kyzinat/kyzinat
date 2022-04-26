window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})


var images = document.getElementsByClassName("image");
var overlay = document.getElementById("overlay");
var body = document.getElementById("body");
var header = document.getElementById("header");
var heroDesc = document.getElementsByClassName("heroDesc");
var heroDescHolder = document.getElementById("heroDescHolder");

var number;
var clone;

function OpenImage(a)
{
  number = a;
  if (images[number].classList.contains("open"))
  {
    heroDescHolder.removeChild(heroDescHolder.lastChild);
    body.style.overflow = "visible";
    overlay.style.display = "none";
    images[number].classList.remove("open");
    heroDesc[number].style.visibility="hidden";
    heroDesc[number].style.fontSize="0";
    heroDesc[number].style.margin = "0";
  }
  else
  {
    images[number].classList.add("open");
    overlay.style.display = "block";
    body.style.overflow = "hidden";
    heroDesc[number].style.visibility = "visible";
    heroDesc[number].style.fontSize = "2vh";
    heroDesc[number].style.margin = "2vh";
    clone = heroDesc[number].cloneNode(true);
    heroDescHolder.append(clone);
    if (header.classList.contains("sticky"))
    {
      overlay.style.backgroundColor = "white";
    }
    else
    {
      overlay.style.backgroundColor = "black";
    };
  }
}


function CloseImage()
{
  heroDescHolder.removeChild(heroDescHolder.lastChild);
  body.style.overflow = "visible";
  overlay.style.display = "none";
  images[number].classList.remove("open");
  heroDesc[number].style.visibility="hidden";
  heroDesc[number].style.fontSize="0";
  heroDesc[number].style.margin = "0";
}

window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})

var bg = document.getElementsByClassName("secBG");
var logo = document.getElementById("kuzi");
var desc = document.getElementById("kuziDesc");

function bgHover()
{
  bg[0].style.opacity = "0.1";
  logo.style.opacity = "1";
  desc.style.opacity = "1";
}

function bgUnhover()
{
bg[0].style.opacity = "1";
logo.style.opacity = "0";
desc.style.opacity = "0";
}

var p = 0;
var pMin = 0;
var pMax = 3;
var e = 0;

var pages = document.getElementsByClassName("pgs");
var pageText = document.getElementsByClassName("pageCounter");
var edition = document.getElementsByClassName("Edition");
var editionText = document.getElementsByClassName("editionText");


function nextPage() {
for (let i=0; i < pages.length; i++)
    {
        pages[i].style.visibility = "hidden";
    }
if (p < pMax) {
    p += 1;
    pages[p].style.visibility = "visible";
    pageText[0].textContent = ((p-pMin)+1) + "/" + ((pMax - pMin)+1);
}
else {
    p = pMin;
    pages[p].style.visibility = "visible";
    pageText[0].textContent = ((p-pMin)+1) + "/" + ((pMax - pMin)+1);
    }

}
    

function prevPage() {
    for (let i=0; i < pages.length; i++)
        {
            pages[i].style.visibility = "hidden";
        }
    if (p > pMin) {
        p -= 1;
        pages[p].style.visibility = "visible";
        pageText[0].textContent = ((p-pMin)+1) + "/" + ((pMax - pMin)+1);
    }
    else {
        p = pMax;
        pages[p].style.visibility = "visible";
        pageText[0].textContent = ((p-pMin)+1) + "/" + ((pMax - pMin)+1);
    }
}

function nextEdition() {
    for (let i=0; i < edition.length; i++)
        {
            edition[i].style.width = "0";
            edition[i].style.zIndex = "-10";
        }
    if (e < edition.length - 1) {
        e += 1;
        edition[e].style.width = "auto";
        edition[e].style.zIndex = "10";
        editionText[0].textContent = "KUZINAT №" + (e + 1);
    }
    else {
        e = 0;
        edition[e].style.width = "auto";
        edition[e].style.zIndex = "10";
        editionText[0].textContent = "KUZINAT №" + (e + 1);
    }
    editionPageCalculation();
}

function prevEdition() {
    for (let i=0; i < edition.length; i++)
        {
            edition[i].style.width = "0";
            edition[i].style.zIndex = "-10";
        }
    if (e > 0) {
        e -= 1;
        edition[e].style.width = "auto";
        edition[e].style.zIndex = "10";
        editionText[0].textContent = "KUZINAT №" + (e + 1);
    }
    else {
        e = edition.length - 1;
        edition[e].style.width = "auto";
        edition[e].style.zIndex = "10";
        editionText[0].textContent = "KUZINAT №" + (e + 1);
    }
    editionPageCalculation();
}

function editionPageCalculation() {
    let button = document.getElementsByClassName("editionButton");
    
    for (let i = pMin; i <= pMax; i++)
    {
        pages[i].style.visibility = "hidden";
    }
    
    if (e == 0) {
        pMax = 3;
        pMin = 0;
        p = pMin;
        pages[p].style.visibility = "visible";
        button[0].style.visibility = "hidden";
    }
    else if (e == 1) {
        pMax = 7;
        pMin = 4;
        p = pMin;
        pages[p].style.visibility = "visible";
        button[0].style.visibility = "visible";
    }
    else if (e == 2) {
        pMax = 11;
        pMin = 8;
        p = pMin;
        pages[p].style.visibility = "visible";
    }
    else if (e == 3) {
        pMax = 15;
        pMin = 12;
        p = pMin;
        pages[p].style.visibility = "visible";
        button[1].style.visibility = "visible";
    }
    else if (e == 4) {
        pMax = 21;
        pMin = 16;
        p = pMin;
        pages[p].style.visibility = "visible";
        button[1].style.visibility = "hidden";
    }
    
    pageText[0].textContent = ((p-pMin)+1) + "/" + ((pMax - pMin)+1);
}



