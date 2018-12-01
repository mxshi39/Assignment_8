// navigation bar scroll up to see scroll down to hide
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}



// scroll reveal
$(document).ready( function scrollReveal() {
  window.sr = ScrollReveal();
  
  sr.reveal('.card-box', {
    duration   : 600,
    distance   : '20px',
    easing     : 'ease-out',
    origin     : 'bottom',
    reset      : true,
    scale      : 1,
    viewFactor : 0,
    afterReveal  : revealChildren,
  }, 150);
  
    var revealChildren = sr.reveal('.card-title, .card-text', {
    duration   : 500,
    scale      : 1,
    distance   : '20px',
    origin     : 'bottom',
    reset      : true,
    easing     : 'ease-out',
    viewFactor : 1,
  }, 75);
});

// on click make filling
$(document).on("click","#makeFilling",function () {
	if ($(this).attr("data-state")=="static") {
		$(this).attr("src","./Assets/animation/makeFilling.gif")
		$(this).attr("data-state","dynamic")
	}
	else {
		$(this).attr("src","./Assets/animation/makefilling.png")
		$(this).attr("data-state","static")
	}
});

// on click make wet dough
$(document).on("click","#makeWetDough",function () {
	if ($(this).attr("data-state")=="static") {
		$(this).attr("src","./Assets/animation/makeWetDough.gif")
		$(this).attr("data-state","dynamic")
	}
	else {
		$(this).attr("src","./Assets/animation/makeWetDough.png")
		$(this).attr("data-state","static")
	}
});

// on click make dry oil dough
$(document).on("click","#makeDryOilDough",function () {
	if ($(this).attr("data-state")=="static") {
		$(this).attr("src","./Assets/animation/makeDryOilDough.gif")
		$(this).attr("data-state","dynamic")
	}
	else {
		$(this).attr("src","./Assets/animation/makeDryOilDough.png")
		$(this).attr("data-state","static")
	}
});

// on click make cake skin
$(document).on("click","#makeCakeSkin",function () {
	if ($(this).attr("data-state")=="static") {
		$(this).attr("src","./Assets/animation/makeCakeSkin.gif")
		$(this).attr("data-state","dynamic")
	}
	else {
		$(this).attr("src","./Assets/animation/makeCakeSkin.png")
		$(this).attr("data-state","static")
	}
});

// on click add filling
$(document).on("click","#addFilling",function () {
	if ($(this).attr("data-state")=="static") {
		$(this).attr("src","./Assets/animation/addFilling.gif")
		$(this).attr("data-state","dynamic")
	}
	else {
		$(this).attr("src","./Assets/animation/addFilling.png")
		$(this).attr("data-state","static")
	}
});

// on click styling
$(document).on("click","#styling",function () {
	if ($(this).attr("data-state")=="static") {
		$(this).attr("src","./Assets/animation/styling.gif")
		$(this).attr("data-state","dynamic")
	}
	else {
		$(this).attr("src","./Assets/animation/styling.png")
		$(this).attr("data-state","static")
	}
});

// on click finish
$(document).on("click","#finish",function () {
	if ($(this).attr("data-state")=="static") {
		$(this).attr("src","./Assets/animation/finish.gif")
		$(this).attr("data-state","dynamic")
	}
	else {
		$(this).attr("src","./Assets/animation/finish.png")
		$(this).attr("data-state","static")
	}
});
