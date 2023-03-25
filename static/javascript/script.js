//VARIABLES
// Stop for now pop-up
const stopPopup = document.getElementById("stop");

// letter.hbs pop-ups
const signPopup = document.getElementById("sign-letter");
const namePopup = document.getElementById("sign-name");

// bottle.hbs pop-ups
const photoPopup = document.getElementById("insert-photo");
const photoInput = document.getElementById("insert-input");
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

// Get quill text input
if (document.getElementById("open-form") != null) {
	document.getElementById("open-form").addEventListener("click", () => {
		var delta = quill.container.firstChild.innerHTML;
		console.log(delta);
		document.getElementById("content").value = delta;
		console.log(document.getElementById("content").value);
	});
}

// FileReader API
if (photoInput != null) {
	photoInput.addEventListener("change", (e) => {
		let reader = new FileReader();

		reader.onload = () => {
			document.getElementById("output").src = reader.result;
		};

		reader.readAsDataURL(e.target.files[0]);

		// output is hidden so that the border style only shows when an image is uploaded
		document.getElementById("output").classList.remove("hidden");

		// show a different button to fake a confirm button
		document.getElementById("upload-photo").classList.add("hidden");
		document.getElementById("confirm-photo").classList.remove("hidden");
	});
}

// Add photo to bottle
if (document.getElementById("confirm-photo") != null) {
	document.getElementById("confirm-photo").addEventListener("click", () => {
		document.getElementById("bottle").src =
			"static/img/bottle-letter-photo-open.svg"; // add a polaroid photo into the bottle when a photo is selected

		photoPopup.classList.add("hidden"); // hide the select photo pop-up

		//make it so that when the user clicks on the pop-up again, they can upload a different photo
		document.getElementById("upload-photo").classList.remove("hidden");
		document.getElementById("confirm-photo").classList.add("hidden");
	});
}

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

// bottle.hbs pop-ups
if (document.getElementById("camera-button") != null) {
	document.getElementById("camera-button").addEventListener("click", () => {
		photoPopup.classList.remove("hidden");
		console.log("Open insert photo pop-up");
	});
}

if (document.getElementById("close-photo") != null) {
	document.getElementById("close-photo").addEventListener("click", () => {
		photoPopup.classList.add("hidden");
		console.log("Close insert photo pop-up");
	});
}

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
		console.log("Close plan trajectory form");
	});
}
