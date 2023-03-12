//VARIABLES
const closeLetter = document.getElementById("close-letter");
const confirmLetter = document.getElementById("confirm-letter");
const closeWritingButton = document.getElementById("close-writing");
const writingPopup = document.getElementById("stop-writing");
const closeSignButton = document.getElementById("close-sign");
const signPopup = document.getElementById("sign-letter");
const closeFormButton = document.getElementById("close-form");
const openFormButton = document.getElementById("open-form");
const namePopup = document.getElementById("sign-name");

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
closeLetter.addEventListener("click", () => {
	writingPopup.classList.remove("hidden");
	console.log("Open stop writing letter pop-up");
});

confirmLetter.addEventListener("click", () => {
	signPopup.classList.remove("hidden");
	console.log("Open sign or not sign letter pop-up");
});

openFormButton.addEventListener("click", () => {
	namePopup.classList.remove("hidden");
	console.log("Open sign letter form pop-up");
});

closeWritingButton.addEventListener("click", () => {
	writingPopup.classList.add("hidden");
	console.log("Close stop writing letter pop-up");
});

closeSignButton.addEventListener("click", () => {
	signPopup.classList.add("hidden");
	console.log("Close sign or not sign letter pop-up");
});

closeFormButton.addEventListener("click", () => {
	namePopup.classList.add("hidden");
	console.log("Close sign letter form pop-up");
});
