'use strict';

let people = [];

class Person {
	constructor(name, birthDate, address, occupation) {
		this.name = name;
		this.birthDate = birthDate;
		this.address = address;
		this.occupation = occupation;
	}
}

function loadJSON() {
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "project2.json", true);
	
	xhr.onload = function() {
		let data = JSON.parse(xhr.responseText);
		
		for (let i = 0; i < data.length; i++) {
			let p = new Person(
				data[i].name,
				data[i].birthDate,
				data[i].address,
				data[i].occupation
			);
			people.push(p);
		}
		displayPeople();
	}
	xhr.send();
}

function displayPeople() {
	let output = "<table><tr><th>Name</th><th>Birth Year</th><th>Address</th><th>Occupation</th></tr>";
	
	for (let i = 0; i < people.length; i++) {
		output += "<tr>" + 
				  "<td>" + people[i].name + "</td>" +
				  "<td>" + people[i].birthDate + "</td>" +
				  "<td>" + people[i].address + "</td>" + 
				  "<td>" + people[i].occupation + "</td>" +
				  "</tr>";
	}
	output += "</table>";
	
	document.getElementById("output").innerHTML = output;
}

function addPerson(e) {
	e.preventDefault();
	
	try {
		let name = document.getElementById("name").value;
		let birthDate = document.getElementById("birthDate").value;
		let address = document.getElementById("address").value;
		let occupation = document.getElementById("occupation").value;
		
		if ( name === "" || birthDate === "" || address === "" || occupation === "") {
			throw new Error("All fields are required!");
		}
		
		let newPerson = new Person(name, birthDate, address, occupation);
		people.push(newPerson);
		displayPeople();
		
		document.getElementById("personForm").reset();
	}
	catch (err) {
		alert(err.message);
	}
}

function init() {
	document.getElementById("personForm").onsubmit = addPerson;
	loadJSON();
}

window.onload = init;
