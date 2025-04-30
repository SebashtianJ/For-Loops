for (let i = 1; i <= 5; i++) {
    console.log(i);
}

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

for (let i = 5; i >= 1; i--) {
    console.log(i);
}

for (let i = 0; i < 3; i++) {
    console.log("George");
}

const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

const nums = [2, 4, 6];
let total = 0;
for (let i = 0; i < nums.length; i++) {
    total += nums[i];
}
console.log(total); //Output: 12

const original = [1, 2, 3];
const doubled = [];
for (let i = 0; i < original.length; i++) {
    doubled.push(original[i] * 2);
}
console.log(doubled); //Output: [2, 4, 6]

for (let i = 10; i <= 15; i++) {
    if (i === 13) continue;
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i === 6) break;
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Part 1
const fruits1 = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < fruits1.length; i++) {
    const li = document.createElement("li");
    li.textContent = fruits1[i];
    document.getElementById("fruits1").appendChild(li);
}

// Part 2
for (let i = 1; i <= 5; i++) {
    const btn = document.createElement("button");
    btn.textContent = "Button" + i;
    document.getElementById("buttons").appendChild(btn);
}

// Part 3
const paragraphs = document.querySelectorAll(".changeMe");
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].textContent = `New Text ${i + 1}`;
}

// Part 4
const colorBoxes = document.querySelectorAll(".colorBox");
const colors = ["red", "green", "blue"];

for (let i = 0; i < colorBoxes.length; i++) {
    colorBoxes[i].style.backgroundColor = colors[i];
}

// Part 5
const langs = ["HTML", "CSS", "JavaScript"];
let html = "";

for (let i = 0; i < langs.length; i++) {
    html += `<li>${langs[i]}</li>`
}

document.getElementById("languages").innerHTML = html;