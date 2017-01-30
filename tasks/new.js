var fs = require('fs');

var name = process.argv[2];
console.log(name)

if (!fs.existsSync("./src/" + name)) {
	fs.mkdirSync("./src/" + name, function (err) {
		if (err) {
			return console.log(err);
		}

		console.log("The folder was created!");

	});
	fs.writeFile("./src/" + name + "/" + name.charAt(0).toUpperCase() + name.slice(1) + ".js", "import React, { Component } from"+ "'react';\n"+
"import logo from '../styles/img/logo.svg';\n"+

"class " + name.charAt(0).toUpperCase() + name.slice(1) + " extends Component {\n"+
"  render() {\n"+
"    return (\n"+
"      <div className=\"App\">\n"+
"        <div className=\"App-header\">\n"+
"          <img src={logo} className=\"App-logo\" alt=\"logo\" />\n"+
"          <h2>Welcome to Reacteeeeeeeee</h2>\n"+
"        </div>\n"+
"        <p className=\"App-intro\">\n"+
"          To get started, edit <code>src/App.js</code> and save to reload.\n"+
"        </p>\n"+
"      </div>\n"+
"    );\n"+
"  }\n"+
"}\n"+

"export default " + name.charAt(0).toUpperCase() + name.slice(1) + ";", function (err) {
		if (err) {
			return console.log(err);
		}

		console.log("The file was saved!");
	});
}