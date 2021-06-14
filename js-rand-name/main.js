// Generate a random first and last name

clog("test");

// Add event listener - click event to the button
getid("name-btn").addEventListener('click', getName);

function getName() {
    // Grab a random name and display it
    let firstName = randomName("Mike", "Samuel", "Anthony", "Brad");
    let lastName = randomName("Smith", "Jenkins", "Hollingsworth", "Stevens");
    let fullName = firstName + " " + lastName;

    // Output Random Name
    getid('result').innerHTML = fullName;
}


function randomName(name1, name2, name3, name4) {
    // Return a random name from the given name arguments

    let randNum = Math.random(); // Generate random decimal between 0 and 1

    if (randNum < 0.25) {
        return name1;
    } else if (randNum < 0.5) {
        return name2;
    } else if (randNum < 0.75) {
        return name3;
    } else {
        return name4;
    }
}
