
// var hideme = document.querySelector('.hideme')
// var damn = document.querySelector('#hider')

// $(function() {
// 	$(document).scroll(function() {
// 		if($(window).scrollLeft() >= 3500)
// 			// $(hideme).fadeIn();
// 			$(damn).animate({'opacity':'1'},500)
// 		// else 
// 		// 	$(damn).fadeOut();
// 	});
// });

// $(function() {
// 	$(document).scroll(function() {
// 		if($('body').scrollLeft() == 0)
// 			$("#tenet-one").fadeIn();
// 		else 
// 			$("#tenet-one").fadeOut();
// 	});
// });

window.onscroll = function() {
	// console.log(window.pageYOffset || document.documentElement.scrollTop);
		// 'top: '  + (window.pageYOffset || document.documentElement.scrollTop) + ' ' +
		// 'left: ' + (window.pageXOffset || document.documentElement.scrollLeft)
}

var rightArrow = document.querySelector('.right')
var leftArrow = document.querySelector('.left')
var first = document.querySelector('.first')
var second = document.querySelector('.second')
var third = document.querySelector('.third')
var speechBubble = document.querySelector('.speech-bubble')

// $(document).ready(function() {
// 	/* Every time the window is scrolled ... */
// 	$(window).scroll( function(){
// 			/* Check the location of each desired element */
// 			$(speechBubble).each( function(i){
// 					var bottom_of_object = $(this).offset().left + $(this).outerWidth();
// 					var bottom_of_window = $(window).scrollX() + $(window).width();
// 					/* If the object is completely visible in the window, fade it it */
// 					if( bottom_of_window > bottom_of_object ){	
// 							$(this).animate({'opacity':'1'},500);			
// 					}
// 			}); 
// 	});
// });

var left = function() {
	 console.log('left!')
	 var counter = 0

	 if (third.style.display === 'block') {
		first.style.display = 'none'
		second.style.display = 'block';
		third.style.display = 'none';
		// leftArrow.style.display = 'display';
		counter +=1 
	} else if (second.style.display === 'block') {
		first.style.display = 'block'
		second.style.display = 'none';
		third.style.display = 'none';
		// leftArrow.style.display = 'none';
		counter +=2
	}

	// if (counter === 2) {
	// 	leftArrow.style.opacity = "0.5";
	// } else {
	// 	leftArrow.style.opacity = "1.0";
	// }
	// console.log(counter)
}

var right = function() {
    console.log('right!');
		
		if (first.style.display === 'block' || first.style.display === '') {
			first.style.display = 'none'
			second.style.display = 'block';
			third.style.display = 'none';
			// rightArrow.style.display = 'display';
		} else if (second.style.display === 'block') {
			first.style.display = 'none'
			second.style.display = 'none';
			third.style.display = 'block';
			// rightArrow.style.display = 'none';
		}
}

var whenScrolledLeft = () => {
	if ((window.scrollX + window.innerWidth) >= 4000 && (window.scrollX + window.innerWidth) <= 7000) {
		speechBubble.style.opacity = "1.0"
	} else {
		speechBubble.style.opacity = "0.0"
	}
};

leftArrow.addEventListener('click', left)
rightArrow.addEventListener('click', right)

window.addEventListener('scroll', whenScrolledLeft);