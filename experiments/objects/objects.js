"use strict";

// Your code here
// manipulate objects
// 1. Create an object with properties
export const person = {
	name: "John",
	age: 30,
	city: "New York",
};

// 2. Add a property to the object
person.country = "USA";
// 3. Remove a property from the object
delete person.city;
// 4. Check if a property exists in the object
const hasAge = "age" in person;
// 5. Get the value of a property
const name = person.name;
// 6. Get all keys of the object
const keys = Object.keys(person);
// 7. Get all values of the object
const values = Object.values(person);
// 8. Get the number of properties in the object
const numberOfProperties = Object.keys(person).length;
// 9. Create a new object with the properties of the original object
const newPerson = { ...person };
// 10. Create a new object with the properties of the original object and add a new property
const newPersonWithCountry = { ...person, country: "USA" };
// 11. Create a new object with the properties of the original object and remove a property
const newPersonWithoutCity = { ...person };
delete newPersonWithoutCity.city;
// 12. Create a new object with the properties of the original object and change a property
const newPersonWithNewName = { ...person, name: "Jane" };
// 13. Create a new object with the properties of the original object and change multiple properties
const newPersonWithNewNameAndAge = { ...person, name: "Jane", age: 25 };
// 14. Create a new object with the properties of the original object and change multiple properties using Object.assign
