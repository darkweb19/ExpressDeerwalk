//!express
const express = require("express");
const app = express();
const uuidv4 = require("uuid").v4;

//this is used to encode the body of data send.
app.use(express.urlencoded({ extended: true }));

let users = [
	{ id: uuidv4(), name: "Sujan", email: "user1@gmail.com" },
	{ id: uuidv4(), name: "Subani", email: "subani@gmail" },
];

app.get("/user", (req, res) => {
	res.send(users);
});

app.post("/add-user", (req, res) => {
	if (req.body.name && req.body.email) {
		users.push({
			id: uuidv4(),
			name: req.body.name,
			email: req.body.email,
		});
		res.send("user added");
	} else {
		res.send("Please send the name");
	}
	console.log(req.body.name);
});

app.get("/delete-user", (req, res) => {
	if (req.query.id) {
		users = users.filter((user) => {
			return user.id != req.query.id;
		});
		res.send("User Deleted");
	} else {
		res.send("Please provide name");
	}
});

//added category feature
let categories = ["name", "age"];

app.get("/categories", (req, res) => {
	res.send(categories);
	console.log(categories);
});

app.post("/add-category", (req, res) => {
	if (req.body.category) {
		categories = [...categories, ...req.body.category];
		res.send("Category added");
	} else {
		res.send("Please provide any category");
	}
});

app.get("/delete-category", (req, res) => {
	categories = categories.filter((cat) => {
		return cat != req.query.name;
	});
	res.send("Category Deleted");
});

app.listen(3000, () => {
	console.log("Server started on port : 3000");
});
//this is the change

//added  objects in category as well
let objCategory = [
	{ id: uuidv4(), category: "work" },
	{ id: uuidv4(), category: "college" },
];

app.get("/object", (req, res) => {
	res.send(objCategory);
});

app.post("/add-object", (req, res) => {
	if (req.body.category) {
		objCategory.push({
			id: uuidv4(),
			category: req.body.category,
		});
	} else {
		res.send("please provide the details");
	}
	res.send("Added the object");
});

app.get("/delete-object", (req, res) => {
	if (req.query.id) {
		objCategory = objCategory.filter((obj) => {
			return obj.id != req.query.id;
		});
		res.send("Object category was deleted");
	}
});
