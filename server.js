require("dotenv").config();
const express = require("express");
const Handlebars = require("handlebars");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.set("view engine", Handlebars);
app.set("views", "view");

app.use("/static", express.static("static"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//ROUTES

//home.hbs
app.get("/", (req, res) => {
	res.render("home.hbs");
	res.status(200);
});

//bottle.hbs
app.get("/bottle", (req, res) => {
	res.render("bottle.hbs");
	res.status(200);
});

//campfire.hbs
app.get("/campfire", (req, res) => {
	res.render("campfire.hbs");
	res.status(200);
});

//drafts.hbs
app.get("/drafts", async (req, res) => {
	let draft = await getDataFromDatabase("letters");
	res.render("drafts.hbs", {
		letters: draft,
	});
});

//letter.hbs
app.get("/letter", (req, res) => {
	res.render("letter.hbs");
	res.status(200);
});

app.post("/bottle", (req, res) => {
	console.log("posted");
	const db = client.db("bloktech");
	const collectionLetters = db.collection("letters");
	CreateNewDraft(collectionLetters, req.body.content, req.body.signed);

	res.render("bottle.hbs");
});

//ocean.hbs
app.get("/ocean", (req, res) => {
	res.render("ocean.hbs");
	res.status(200);
});

//404 Error
app.get("*", (req, res) => {
	res.send("Error 404 Not found..");
});

//Check if server is live
app.listen(port, () => {
	console.log(`Wow look at that port ${port}`);
});

//Database connection
const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
	"mongodb+srv://" +
	process.env.DB_USERNAME +
	":" +
	process.env.DB_PASS +
	"@" +
	process.env.DB_NAME +
	"." +
	process.env.DB_HOST +
	"/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	serverApi: ServerApiVersion.v1,
});

async function connectToCluster() {
	try {
		console.log("Connecting to MongoDB Atlas cluster...");
		await client.connect();
		console.log("Successfully connected to MongoDB Atlas!");
		return client;
	} catch (error) {
		console.error("Connection to MongoDB Atlas failed!", error);
		process.exit();
	}
}

async function getDataFromDatabase(dbCollection) {
	await connectToCluster();
	const db = client.db("bloktech");
	let collection = db.collection(dbCollection); // collectie naam
	collection = GetDraftsFromDatabase(collection);

	return collection;
}

async function CreateNewDraft(collection, content, input) {
	const draft = {
		text: content,
		signed: input,
		dateUpdated: new Date().toISOString().slice(0, 10), // oorspronkelijk date is handiger voor aanpassen later
	};

	await collection.insertOne(draft);
}

async function GetDraftsFromDatabase(collection) {
	return collection.find().toArray();
}
