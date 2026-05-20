# PROJECT-2-Events-Errors-Classes-Ajax-JSON

A web-based application that loads, displays, and creates Person records using JavaScript, HTML, and JSON. Built as a final project for CIT 152 (Web Script Language Programming) at TMCC, Spring 2026.

## What It Does
When the page loads, the application reads an initial list of people from a JSON file and displays them on the page (which will be none becuase you will add them). A form on the page allows the user to enter a new Person's name, birth date, address, and occupation. When the "Create New Person" button is pressed, the input is validated, a new Person object is created, added to the array, and the display updates instantly to include the new entry.

## Concepts Demonstrated
- Object-oriented JavaScript with a custom `Person` class (name, birthDate, address, occupation)
- Reading and parsing data from an external JSON file
- Dynamic DOM manipulation to render an array of objects in HTML
- Form handling and event listeners
- Input validation for all Person properties before adding to the array
- Re-rendering the display when the array is updated

## Files
- `index.html` — page structure, display area, and form
- `[your-js-file].js` — Person class definition and application logic
- `[your-json-file].json` — initial Person data loaded on page start

## How to Run
1. Copy the code and paste it. 
