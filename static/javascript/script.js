//VARIABLES
// Stop for now pop-up
const closeButton = document.getElementById("close-button");
const stopPopup = document.getElementById("stop");
const closeStopPopupButton = document.getElementById("close-stop");

// letter.hbs pop-ups
const confirmLetterButton = document.getElementById("confirm-letter");

const closeSignButton = document.getElementById("close-sign");
const signPopup = document.getElementById("sign-letter");

const closeFormButton = document.getElementById("close-form");
const openFormButton = document.getElementById("open-form");

const namePopup = document.getElementById("sign-name");

// bottle.hbs pop-ups
const confirmBottleButton = document.getElementById("confirm-bottle");

const closePlanButton = document.getElementById("close-plan");
const planPopup = document.getElementById("plan-trajectory");

const openDestinationButton = document.getElementById("open-destination");
const closeDestinationButton = document.getElementById("close-destination");
const destinationPopup = document.getElementById("destination");

//QUILL EDITOR
var toolbarOptions = [
	["bold", "italic", "underline", "strike"], // toggled buttons
	["clean"], // remove formatting button
];

var quill = new Quill("#editor", {
	modules: {
		toolbar: toolbarOptions,
	},

	placeholder: "Write your letter",

	theme: "snow",
});

// POP-UPS
closeButton.addEventListener("click", () => {
	stopPopup.classList.remove("hidden");
	console.log("Open stop writing letter pop-up");
});

closeStopPopupButton.addEventListener("click", () => {
	stopPopup.classList.add("hidden");
	console.log("Close stop writing letter pop-up");
});

// letter.hbs pop-ups
if (confirmLetterButton != null) {
	confirmLetterButton.addEventListener("click", () => {
		signPopup.classList.remove("hidden");
		console.log("Open sign or not sign letter pop-up");
	});
}

if (openFormButton != null) {
	openFormButton.addEventListener("click", () => {
		namePopup.classList.remove("hidden");
		console.log("Open sign letter form pop-up");
	});
}

if (closeSignButton != null) {
	closeSignButton.addEventListener("click", () => {
		signPopup.classList.add("hidden");
		console.log("Close sign or not sign letter pop-up");
	});
}

if (closeFormButton != null) {
	closeFormButton.addEventListener("click", () => {
		namePopup.classList.add("hidden");
		console.log("Close sign letter form pop-up");
	});
}

// bottle.hbs pop-ups
if (confirmBottleButton != null) {
	confirmBottleButton.addEventListener("click", () => {
		planPopup.classList.remove("hidden");
		console.log("Open plan trajectory pop-up");
	});
}

if (closePlanButton != null) {
	closePlanButton.addEventListener("click", () => {
		planPopup.classList.add("hidden");
		console.log("Close plan trajectory pop-up");
	});
}

if (openDestinationButton != null) {
	openDestinationButton.addEventListener("click", () => {
		destinationPopup.classList.remove("hidden");
		console.log("Open plan trajectory pop-up");
	});
}

if (closeDestinationButton != null) {
	closeDestinationButton.addEventListener("click", () => {
		destinationPopup.classList.add("hidden");
		console.log("Close plan trajectory pop-up");
	});
}
