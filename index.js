//!express
const express = require("express");
const app = express();
//this is used to encode the body of data send.
app.use(express.urlencoded({ extended: true }));

let users = ["Sujan", "Prakanda"];
app.get("/user", (req, res) => {
	res.send(users);
});

let categories = ["name", "age"];

app.post("/add-user", (req, res) => {
	if (req.body.name) {
		users = [...users, ...req.body.name];
		res.send("user added");
	} else {
		res.send("Please send the name");
	}
	console.log(req.body.name);
});

app.get("/delete-user", (req, res) => {
	if (req.query.name) {
		users = users.filter((user) => {
			return user != req.query.name;
		});
		res.send("User Deleted");
	}
});

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
