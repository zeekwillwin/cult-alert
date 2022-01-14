alert("Hello there!");

function ageRemark(age) {
    var age = prompt("What is your age?");
    if (age > 30) {
        alert("Wow, you are getting up there aren't you?");
    } else if (age <= 30) {
        alert("The power of youth is a beautiful thing.");
    }
}

ageRemark();

document.querySelector("h1").innerHTML = "So then, wanna join zeekwillwin's cult?";