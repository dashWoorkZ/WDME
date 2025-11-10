
// // CHILD of BODY - Contains Everything
// const container = document.querySelector('.container');
// // Logo Image - Left Side of Header
// const logo = document.querySelector('.logo');
// // Brand Name in a SPAN - CSS Styled
// const brandNameTitle = document.querySelector('.brandNameTitle');
// // Login Button - Filler Item at prsent
// const login = document.querySelector('.login');
// // Sidebar of sites i found useful
// const links = document.querySelector('.links');
// // Navigation Bar for entir site
// const navLinks = document.getElementsByTagName('nav');
// // Body Last Child - last minute info
// const footer = document.getElementsByTagName('footer');
// // Main Body Content - Future Single Page Display
// const main = document.getElementsByTagName('main');
// // First Child of Main Container - Page Identity
// const header = document.getElementsByTagName('header');
// // Two SECTIONS used for product promotion 
// const product1 = document.querySelector('.product__new--1');
// const product2 = document.querySelector('.product__new--2');

const bttns = document.querySelectorAll(".btn");
const nav = document.getElementById('hdrNav');
	bttns.forEach((bttn) => {
		bttn.addEventListener("click", () => {
		const currentState = bttn.getAttribute("data-state");
		if (!currentState || currentState === "closed") {
			bttn.setAttribute("data-state", "opened");
			bttn.setAttribute("aria-expanded", "true");
			nav.style.display = 'flex';
			nav.style.visibility = 'visible';
			nav.style.opacity = 1;
			nav.style.animation = "reveal 900ms ease-in-out forwards";
			} else {
			bttn.setAttribute("data-state", "closed");
			bttn.setAttribute("aria-expanded", "false");
			nav.style.animation = "hide 900ms ease-in-out forwards";
		}
	});
	});
