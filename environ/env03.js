
let environmentTitle = "The Great Snow Storm";

let environmentElements = ["snow", "mountains", "fish", "snowball"];

let mainEntity = {
    name: "bobby",
    type: "cat",
    mood: "hungry",
    isMoving: true,
    favoriteElement: environmentElements[1]
};

function askNumber() {
}
function askNumber(whatNumber) {
    let userNumber = prompt("How many fish should Bobby Eat?");
     if (userNumber == whatNumber) 
        {
    $("#output").html("Perfect! Bobby ate just enough!"); 
    }
    else {
$("#output").html("Bobby did not get the right amount of fish. He's sick.");
    }
}
$("#health").click(function () {
 askNumber(5);
});

function askNumber() {
}
function askNumber(whatNumber) {
    let userNumber = prompt("How many snowballs should Bobby pack?");
     if (userNumber == whatNumber) 
        {
    $("#output").html("Perfect! Bobby will get rid of anything in his way!"); 
    }
    else {
$("#output").html("Bobby did not get the right amount of ammo. He will likely not survive the night.");
    }
}
$("#health").click(function () {
 askNumber(3);
});