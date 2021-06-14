// JS Helpers Library

function clog(message) {
    // Short form of console.log
    console.log(message);
}

function getid(id) {
    // Short form of document.getElementById
    return document.getElementById(id);
} 

function addListener(id, event, callBack) {
    // Short form of document.getElementById.addEventListener
    getid(id).addEventListener(event, callBack);
}

function randomDec(low, high) {
    // Return a random decimal between low (inclusive) and high (exclusive)
    return Math.random() * (high - low) + low;
}

function randomInt(low, high) {
    // Return a random integer between low(inclusive) and high (exclusive)
    return Math.floor(randomDec(low, high));
}





