//VARIABLES
// Stop for now pop-up
const stopPopup = document.getElementById("stop");

// letter.hbs pop-ups
const signPopup = document.getElementById("sign-letter");
const namePopup = document.getElementById("sign-name");

// bottle.hbs pop-ups
const planPopup = document.getElementById("plan-trajectory");
const destinationPopup = document.getElementById("destination");
const trajectoryPopup = document.getElementById("trajectory");

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
document.getElementById("close-button").addEventListener("click", () => {
	stopPopup.classList.remove("hidden");
	console.log("Open stop writing letter pop-up");
});

document.getElementById("close-stop").addEventListener("click", () => {
	stopPopup.classList.add("hidden");
	console.log("Close stop writing letter pop-up");
});

// letter.hbs pop-ups
if (document.getElementById("confirm-letter") != null) {
	document.getElementById("confirm-letter").addEventListener("click", () => {
		signPopup.classList.remove("hidden");
		console.log("Open sign or not sign letter pop-up");
	});
}

if (document.getElementById("open-form") != null) {
	document.getElementById("open-form").addEventListener("click", () => {
		namePopup.classList.remove("hidden");
		console.log("Open sign letter form pop-up");
	});
}

if (document.getElementById("close-sign") != null) {
	document.getElementById("close-sign").addEventListener("click", () => {
		signPopup.classList.add("hidden");
		console.log("Close sign or not sign letter pop-up");
	});
}

if (document.getElementById("close-form") != null) {
	document.getElementById("close-form").addEventListener("click", () => {
		namePopup.classList.add("hidden");
		console.log("Close sign letter form pop-up");
	});
}

if (document.getElementById("open-form") != null) {
	document.getElementById("open-form").addEventListener("click", () => {
		var delta = quill.container.firstChild.innerHTML;
		console.log(delta);
		document.getElementById("content").value = delta;
		console.log(document.getElementById("content").value);
	});
}

// bottle.hbs pop-ups
if (document.getElementById("confirm-bottle") != null) {
	document.getElementById("confirm-bottle").addEventListener("click", () => {
		planPopup.classList.remove("hidden");
		trajectoryPopup.classList.add("hidden");
		console.log("Open plan trajectory pop-up");
	});
}

if (document.getElementById("close-plan") != null) {
	document.getElementById("close-plan").addEventListener("click", () => {
		planPopup.classList.add("hidden");
		console.log("Close plan trajectory pop-up");
	});
}

if (document.getElementById("open-destination") != null) {
	document.getElementById("open-destination").addEventListener("click", () => {
		destinationPopup.classList.remove("hidden");
		console.log("Open plan trajectory pop-up");
	});
}

if (document.getElementById("close-destination") != null) {
	document.getElementById("close-destination").addEventListener("click", () => {
		destinationPopup.classList.add("hidden");
		console.log("Close plan trajectory pop-up");
	});
}

if (document.getElementById("open-trajectory-button") != null) {
	document
		.getElementById("open-trajectory-button")
		.addEventListener("click", () => {
			trajectoryPopup.classList.remove("hidden");
			console.log("Open plan trajectory form");
		});
}

if (document.getElementById("open-trajectory-popup") != null) {
	document
		.getElementById("open-trajectory-popup")
		.addEventListener("click", () => {
			planPopup.classList.add("hidden");
			trajectoryPopup.classList.remove("hidden");
			console.log("Open plan trajectory form");
		});
}

if (document.getElementById("close-trajectory") != null) {
	document.getElementById("close-trajectory").addEventListener("click", () => {
		trajectoryPopup.classList.add("hidden");
		console.log("close plan trajectory form");
	});
}
