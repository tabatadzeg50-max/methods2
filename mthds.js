
const namee = "giorgi";

console.log("სიგრძე:", namee.length);

if (namee.length > 5) {
    console.log("გრძელი სახელი");
} else {
    console.log("მოკლე სახელი");
}

const text = "JavaScript aris programirebis ena ";
console.log(text.toUpperCase());

console.log(text.toLowerCase());

const username = "    gio_dev123    ";
console.log(username.length);
console.log(username.trim());
console.log(username.trim().length);

const sentence = "JavaScript არის საუკეთესო პროგრამირების ენა";

console.log(sentence.toLowerCase().includes("javascript"));
console.log(sentence.toLowerCase().includes("phyton"));

const greeting = "hello world";
const result = greeting
  .replace("hello", "გამარჯობა")
  .replace("world", "საქართველო");

console.log(result);

const csv = "გიორგი,25,თბილისი,დეველოპერი";
console.log(csv.split(","));

const fullName = "გიორგი გელაშვილი";

const firstName = fullName.slice(0, 6);
const lastName = fullName.slice(7);

console.log(firstName);
console.log(lastName);

const email1 = "  GIO@EXAMPLE.COM  ";
const email2 = "invalidEmail";

function validateEmail(email) {
  const cleanedEmail = email.trim().toLowerCase();

  if (cleanedEmail.includes("@") && cleanedEmail.includes(".")) {
    console.log("Email:", cleanedEmail);
    console.log("ვალიდურია: true");
  } else {
    console.log("Email:", cleanedEmail);
    console.log("ვალიდურია: false");
  }
}

validateEmail(email1);
validateEmail(email2);
