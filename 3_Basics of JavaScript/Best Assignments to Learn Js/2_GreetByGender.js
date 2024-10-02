// 2. Write a program that greets a person based on their gender. (If else)

function greetByGender(firstName, lastName, gender) {
  let greet = "";

  if (gender.toLowerCase() === "male") {
    greet = `Hello, Mr. ${firstName}, ${lastName}`;
  } else if (gender.toLowerCase() === "female") {
    greet = `Hello, Ms. ${firstName}, ${lastName}`;
  } else {
    greet = `Hello, ${firstName}, ${lastName}`;
  }
  return greet;
}

console.log(greetByGender("Laksh", "Solanki", "Male"));
console.log(greetByGender("Smriti", "Mandhana", "Female"));
console.log(greetByGender("Alex", "Taylor", "other"));

/*

Output : 
Hello, Mr. Laksh, Solanki
Hello, Ms. Smriti, Mandhana
Hello, Alex, Taylor

*/
