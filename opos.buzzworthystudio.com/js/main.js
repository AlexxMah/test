// IMPORT MODULES /////////////////////////////////////////////////////////////////////////////////
import { menu, logoHide } from "/js/modules/menu.js";
import { lotties } from "/js/modules/lotties.js";
import { lazyLoad } from "/js/modules/lazy-load.js";
import { linkHover, bgMove } from "/js/modules/home.js";
import { textAnimations } from "/js/modules/text-animations.js";
import { inView, contactScript, clickScroll, pageToPage, mouseCursor, pressScroll, textDoubleHover } from "/js/modules/small-animations.js";
import { directorsHover, dotMove, dirMobile } from "/js/modules/directors.js";
import { heroAnim } from "/js/modules/hero-animation.js";
import { bio, work, thumbnails } from "/js/modules/dir-detail.js";
// import { videoPlay } from "/js/modules/video.js";
import { aboutDirectors } from "/js/modules/about.js";

//==============================================================================================================
// Smooth scrolling and scroll to top on refresh enabled ========================================================
//==============================================================================================================
window.onbeforeunload = function () {
	window.scrollTo(0, 0);
}
document.documentElement.className = 'js';


//=======================================================================================================================
// RERUN SCRIPTS ON RESIZE ====================================================================================
//=======================================================================================================================
const resetHeroSize = function() {
	if(isMobile() || window.innerWidth < 1024) {
		document.querySelector("html").classList.add("mobile")
		if(document.querySelector("#smooth-content:not(.home)") && document.querySelector("#smooth-content:not(.press)") && document.querySelector("#smooth-content:not(.directors)")) {
			const setHeight = () => {
				document.querySelector("#hero").style.height = window.innerHeight + "px"
			};
			let deviceWidth = window.matchMedia("(max-width: 1024px)");
			if (deviceWidth.matches) {
				window.addEventListener("load", setHeight);
				setHeight();
			}
		}
	} else {
		document.querySelector("html").classList.remove("mobile")
	}
}
resetHeroSize()
// function resizeUpdate(){
// 	resetHeroSize()
// }

// let updateScripts;
// window.onresize = function(){
//   clearTimeout(updateScripts);
//   updateScripts = setTimeout(resizeUpdate, 200);
// };

// THIS RUNS ON EACH PAGE BY DEFAULT
menu()
pageToPage()


// setting up propper height with for mobile devices %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
if(document.querySelector(".home") && isMobile()) {
	const setHeight = () => {
		document.querySelector("body").style.minHeight = window.innerHeight + "px"
		document.querySelector("#smooth-wrapper").style.minHeight = window.innerHeight + "px"
		document.querySelector(".home").style.height = window.innerHeight + "px"
	};
	let deviceWidth = window.matchMedia("(max-width: 1024px)");
	if (deviceWidth.matches) {
		window.addEventListener("resize", setHeight);
		setHeight();
	}
}

// RUN OUR MAIN SCRIPTS WITHIN THE INTRO LOADING FUNCTION
// MAIN HP SCREEN ANIMATION
let pageMain = gsap.timeline({paused: true})

const homeLoad = function() {
	let title = new SplitText(".home h1 span:first-of-type", { type: "chars" })
	let titleHover = new SplitText(".home h1 span:nth-of-type(2)", { type: "chars" })
	let cards = gsap.utils.toArray("#bgThumbs li")
	let cardsWidth = ((cards.length / 3) * cards[0].offsetWidth)
	console.log(cards[0].offsetWidth)


	gsap.set(["#logo", "#nav-bg", "#hamburger"], {opacity: 0})
	gsap.set(dirButton, {scale: 0})
	gsap.set("a.arrow-btn", {scale: 0})
	gsap.set(".gradient-bg", {yPercent: 100})

	if(!isMobile() && window.innerWidth > 1024) {
		gsap.set(cards, {x: -cardsWidth})
		gsap.set(title.chars, {transformOrigin: "0% 100%", y: "30%", scaleY: .2})
		gsap.set(titleHover.chars, {transformOrigin: "bottom left", scaleY: 0, y: "20%"})

		pageMain.to(cards, {x: 0, duration: 2, stagger: {amount: .2}, ease: "expo.inOut"})
		pageMain.to(".gradient-bg", {yPercent: 0, duration: 1, ease: "expo"}, "-=1")
		pageMain.to(title.chars, {y: 0, scaleY: 1, duration: 1, stagger: {amount: .15}, ease: customEase}, "<")
		pageMain.to(dirButton, {scale: 1, duration: 1, ease: customEase}, "-=.9")
		pageMain.to(["#logo", "#nav-bg", "#hamburger"], {opacity: 1, duration: .6, stagger: .1, ease: "power4"}, "-=.2")

	} else {
		gsap.set(title.chars, {transformOrigin: "0% 100%", y: "60%", scaleY: 0})
		gsap.set("#bgThumbs ul", { width: cardsWidth, x: -cardsWidth})
		gsap.set(cards, {x: 0})

		pageMain.to(".thumb-row:first-of-type", {x: -180, duration: 2, ease: "expo.inOut"})
		pageMain.to(".thumb-row:nth-of-type(2)", {x: -120, duration: 2, ease: "expo.inOut"}, "-=1.9")
		pageMain.to(".thumb-row:nth-of-type(3)", {x: -60, duration: 2, ease: "expo.inOut"}, "-=1.9")
		pageMain.to(title.chars, {y: 0, scale: 1, duration: 1, stagger: {amount: .15}, ease: "expo"}, "-=1")
		pageMain.to(dirButton, {scale: 1, duration: 1, ease: "expo"}, "-=.8")
		pageMain.to(["#logo", "#nav-bg", "#hamburger"], {opacity: 1, duration: .6, stagger: .1, ease: "power4"}, "-=.2")

	}
	pageMain.play()

}

// INTRO ANIAMTION
const introAnimation = function() {
	let dur = .8
	let items = gsap.utils.toArray("#introAnim path"),
		introIn = gsap.timeline({paused: true}),
		introOut = gsap.timeline({paused: true}),
		introBg = gsap.timeline({paused: true})


	// MAI NPAGE ANIMATION GOES HERE ///////////////////////////////////////////////////////////////////////////////////

	// ANIMATION SETUP FOR INTRO ANIMATION ///////////////////////////////////////////////////////////////////////////////////
	gsap.set(items[0], {opacity: 0, xPercent: -2000, scale: 10, transformOrigin: "50% 50%", filter:"blur(10px)"})
	gsap.set(items[1], {opacity: 0, xPercent: -1500, scale: 10, transformOrigin: "50% 50%", filter:"blur(10px)"})
	gsap.set(items[2], {opacity: 0, xPercent: -1000, scale: 10, transformOrigin: "50% 50%", filter:"blur(10px)"})
	gsap.set(items[3], {opacity: 0, xPercent: -500, scale: 10, transformOrigin: "50% 50%", filter:"blur(10px)"})
	gsap.set(items[4], {opacity: 0, xPercent: 0, scale: 10, transformOrigin: "50% 50%", filter:"blur(10px)"})
	gsap.set(items[5], {opacity: 0, xPercent: 500, scale: 10, transformOrigin: "50% 50%", filter:"blur(10px)"})
	gsap.set(items[6], {opacity: 0, xPercent: 1000, scale: 10, transformOrigin: "50% 50%", filter:"blur(10px)"})
	gsap.set(items[7], {opacity: 0, xPercent: 1500, scale: 10, transformOrigin: "50% 50%", filter:"blur(10px)"})
	gsap.set(items[8], {opacity: 0, xPercent: 2000, scale: 10, transformOrigin: "50% 50%", filter:"blur(10px)"})


	let videoBlink = gsap.timeline({repeat: -1, repeatDelay: .3, yoyo: true})
	videoBlink.to("#introAnim span span", {opacity: .25, duration: .1, ease: "linear"})
	videoBlink.to("#introAnim span i", {opacity: 0, duration: .1, ease: "linear"}, "<")

	introIn.to(items, {scale: 1,opacity: 1,xPercent: 0,filter: "blur(0px)",duration: dur,stagger: {amount: 2,from: "start"},ease: "none"})
	introOut.to(items, {filter: "blur(5px)", scale: .5, opacity: 0, duration: dur, stagger: {amount: .5},ease: "none",})
	introOut.to("#introAnim span", {opacity: 0, yPercent: -200, duration: dur, ease: "none", onStart: lazyLoad}, "<")
	introOut.to("#introAnim span i", {opacity: 0, yPercent: -260, duration: dur, ease: "none", onStart: lazyLoad}, "<")
	introBg.to("#introAnim .introBg", {xPercent: 100, duration: 1, ease: "none"})

	introMaster.to(introIn, {time:introIn.duration(), duration: introIn.duration(), ease:"power4.inOut"});
	introMaster.to(introOut, {time:introOut.duration(), duration: introOut.duration(), ease:"power4.inOut"});
	introMaster.to(introBg, {time:introBg.duration(), duration: introBg.duration(), ease:"expo.inOut", onComplete: () => {
		setTimeout(function(){
			linkHover()
		},1000)
	}}, "-=.85");
	introMaster.to("#introAnim", {pointerEvents: "none", duration: .01, ease: "none", onComplete: () => {
		lazyLoad()
		homeLoad()
		bodyTag.classList.remove("loading")
		textAnimations()
		lotties()
		bgMove()
	}}, "<");

}


//=======================================================================================================================
// MAKE INTRO ANIM AND THEN RUN THE OTHER SCRIPTS ==========================================================================
//=======================================================================================================================
// FIX HIDING ADDRESS BAR ON MOBILES
// ScrollTrigger.normalizeScroll({
// 	allowNestedScroll: false,
// 	lockAxis: true,
// 	type: "touch", // now the page will be drag-scrollable on desktop because "pointer" is in the list
// });


// DIRECTORS PAGE SCRIPTS ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (bodyTag.classList.contains("loading") && contentTag.classList.contains("home")) {
	introAnimation()
}

// SMOOTH SCROLL FOR INNER PAGES /////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(!document.querySelector(".home")) {
	smoothScroll()
}

// DIRECTORS PAGE SCRIPTS ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (document.querySelector(".directors")) {
	bodyTag.classList.remove("loading")
	gsap.to(".directors", {opacity: 1,duration: .5, ease: "power3.inOut"})
	lazyLoad()
	logoHide()
	inView()
	lotties()
	heroAnim()
	directorsHover()
	dotMove()
	dirMobile()
}

// DIRECTORS PAGE SCRIPTS ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(document.querySelector(".director-detail")) {
	bodyTag.classList.remove("loading")
	lazyLoad()
	logoHide()
	textAnimations()
	inView()
	lotties()
	heroAnim()
	clickScroll()
	bio()
	work()
	thumbnails()
	textDoubleHover()
	setTimeout(function(){
		linkHover()
	}, 2000)
}

// ABOUT ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(document.querySelector(".about")) {
	bodyTag.classList.remove("loading")
	lazyLoad()
	logoHide()
	textAnimations()
	inView()
	lotties()
	heroAnim()
	clickScroll()
	mouseCursor()
	aboutDirectors()
	textDoubleHover()

}

// PRESS ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(document.querySelector(".press")) {
	bodyTag.classList.remove("loading")
	lazyLoad()
	logoHide()
	pressScroll()
	textAnimations()
	inView()
	mouseCursor()
	lotties()
	heroAnim()
	textDoubleHover()

}

// contact ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(document.querySelector(".contact")) {
	bodyTag.classList.remove("loading")
	lazyLoad()
	logoHide()
	textAnimations()
	inView()
	contactScript()
	lotties()
	clickScroll()
	heroAnim()
	textDoubleHover()

}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AJAX REQUESTS
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const links = document.querySelectorAll("a")
let newHref
links.forEach(link => {
	link.addEventListener("click", function() {
		newHref = link.href
		return newHref
	})
})

$('.page-link').click(function (e) {
	e.preventDefault();
	var content = $('#smooth-wrapper').smoothState().data('smoothState');
	var href = $(this).attr('href');
	content.load(href);
});


// Smoothstate function
$(function () {
'use strict';

	var options = {
		prefetch: true,
		// scroll: true,
		cacheLength: 2,
		onStart: {
			duration: 1500, // Duration of our animation
			render: function ($container) {
				// Add your CSS animation reversing class
				$container.addClass('is-exiting');
				// Restart your animation
				smoothState.restartCSSAnimations();
				wrapperTag.style.pointerEvents = "none"

				// RUN PROPER FUNCTION ON CORRECT URL ///////////////////////////////////////////////
				let homeUrl = "/"
				let thisHref = window.location.pathname

				if(thisHref !=  homeUrl) {
					pageToPageAnim.restart()
					const runRotate = function() {
						let pageRotate = gsap.timeline()
						pageRotate.to("#smooth-content > *", {
							transformOrigin: "top left",
							yPercent: 35,
							opacity: 0,
							duration: 1.5,
							ease: customEase
						})
					}
					runRotate()
				}

				if(thisHref !=  homeUrl && !isMobile()) {
					setTimeout(function() {
						smoother.kill()
					}, 1300)
				}

				// IF HOME RUN CUSTOM ANIMATION
				if(thisHref === homeUrl && !isMobile()) {
					let cards = gsap.utils.toArray("#bgThumbs li")
					let cardsWidth = ((cards.length / 3) * cards[0].offsetWidth)
					gsap.to("#bgThumbs li", {
						x: -cardsWidth,
						duration: 1,
						stagger: {
							each: .025
						},
						ease: "power4.inOut"
					})
					gsap.to("h1 span div", {
						x: -window.innerWidth,
						duration: 1,
						stagger: {
							each: .025
						},
						ease: "power4.inOut"
					})
					gsap.to(".arrow-btn", {
						x: -window.innerWidth,
						duration: 1,
						ease: "power4.inOut",
						delay: .45
					})
				} else if (thisHref === homeUrl && isMobile()) {
					let cards = gsap.utils.toArray("#bgThumbs li")
					let cardsWidth = ((cards.length / 3) * cards[0].offsetWidth)
					gsap.to("#bgThumbs li", {
						x: -cardsWidth * 2,
						duration: 1,
						stagger: {
							each: .025
						},
						ease: "power4.inOut"
					})
					gsap.to("h1 span div", {
						x: -window.innerWidth,
						duration: 1,
						stagger: {
							each: .025
						},
						ease: "power4.inOut"
					})
					gsap.to(".arrow-btn", {
						x: -window.innerWidth,
						duration: 1,
						ease: "power4.inOut",
						delay: .25
					})
				}

				setTimeout(function() {
					ScrollTrigger.killAll()
				}, 1300)

				// RESET LOGO POSITION ON PAGE CHANGE ////////////////////////////////////////////////////////////////
				gsap.to("#logo .letter-first", {
					transformOrigin: "center left",
					scale: 1,
					duration: .4,
					ease: "power4.inOut"
				})
				gsap.to("#logo path:not(.letter-first)", {
					xPercent: 0,
					transformOrigin: "center left",
					scale: 1,
					duration: .4,
					stagger: {
						amount: .1,
						from: "start"
					},
					ease: "power4.inOut"
				})
				// gsap.to("#navigation a span:first-of-type div", {yPercent: 15, scaleY: 1,duration: .2})

			}
		},
		onReady: {
			render: function ($container, $newContent) {
				// Remove your CSS animation reversing class
				$container.removeClass('is-exiting pending');
				$container.addClass('is-animating');
				$container.html($newContent);
				wrapperTag.style.pointerEvents = "auto"
			}
		},
		onAfter: function ($container, $newContent) {
			$container.removeClass('is-animating');

				// UPDATE ACTIVE NAV ITEM CHANGE ACTIVE LINK on page change %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
				if(!document.querySelector(".home")) {
					if(document.querySelector("#navigation .active")) {
						document.querySelector("#navigation .active").classList.remove("active")
						let curPage = document.querySelector("#smooth-content").dataset.curloc
						document.querySelector("[data-page= " + curPage + "]").classList.add("active")
					} else {
						let curPage = document.querySelector("#smooth-content").dataset.curloc
						document.querySelector("[data-page= " + curPage + "]").classList.add("active")
					}
				} else if (document.querySelector(".home")) {
					if(document.querySelector("#navigation .active")) {
						document.querySelector("#navigation .active").classList.remove("active")
					}
				}

				// HIDE CURSOR on other page than PRESS //////////////////////////////////////////////
				if(!document.querySelector(".press")) {
					gsap.to("#customCursor", {
						scale: 0,
						duration: .4,
						ease: "power4"
					})
				}

				// rerun hero size on mobiles
				resetHeroSize()

				if(document.querySelector(".home")) {
					homeLoad()
					lazyLoad()
					textAnimations()
					lotties()
					bgMove()
					setTimeout(function(){
						linkHover()
					},2000)
				}

				// DIRECTORS PAGE SCRIPTS ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
				if(document.querySelector(".directors")) {
					gsap.to(".directors", {opacity: 1,duration: .5, ease: "power3.inOut"})
					smoothScroll()
					lazyLoad()
					logoHide()
					textAnimations()
					inView()
					lotties()
					heroAnim()
					directorsHover()
					dotMove()
					dirMobile()
				}

				// DIRECTORS PAGE SCRIPTS ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
				if(document.querySelector(".director-detail")) {
					smoothScroll()
					lazyLoad()
					logoHide()
					textAnimations()
					inView()
					lotties()
					heroAnim()
					clickScroll()
					bio()
					work()
					thumbnails()
					textDoubleHover()
					setTimeout(function(){
						linkHover()
					}, 2000)

				}

				// ABOUT ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
				if(document.querySelector(".about")) {
					smoothScroll()
					lazyLoad()
					logoHide()
					textAnimations()
					inView()
					lotties()
					heroAnim()
					clickScroll()
					mouseCursor()
					aboutDirectors()
					textDoubleHover()

				}

				// PRESS ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
				if(document.querySelector(".press")) {
					smoothScroll()
					lazyLoad()
					pressScroll()
					logoHide()
					textAnimations()
					inView()
					mouseCursor()
					lotties()
					heroAnim()
					textDoubleHover()

				}

				// contact ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
				if(document.querySelector(".contact")) {
					smoothScroll()
					lazyLoad()
					logoHide()
					textAnimations()
					inView()
					contactScript()
					lotties()
					clickScroll()
					heroAnim()
					textDoubleHover()

				}



		},
	},
	smoothState = $("#smooth-wrapper").smoothState(options).data('smoothState');
});





