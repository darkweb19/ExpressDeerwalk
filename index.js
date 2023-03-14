//!express
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

let users = ["Sujan", "Prakanda"];
app.get("/user", (req, res) => {
	res.send(users);
});

app.post("/add-user", (req, res) => {
	if (req.body.name) {
		users = [...users, ...req.body.name];

		res.send("user added");
	} else {
		res.send("Please send the name");
	}
});

app.get("/delete-user", (req, res) => {
	if (req.query.name) {
		users = users.filter((user) => {
			return user != req.query.name;
		});
		res.send("User Deleted");
	}
});

app.listen(3000, () => {
	console.log("Server started on port : 3000");
});
