// Create an object called user that has name, age, password properties and assign them appropriate values.

var user = {
    name: "Grady Truitt",
    age: 25,
    password: "pa55w0rd"
};

console.log(user);

// Add an email and username, as well as a method called alertUser that alerts the users name, to your user object using dot notation.

user.email = "gradytruitt@gmail.com";
user.username = "GradyTruitt777";
user.alertUser = function() {
    alert(user.name);
};

console.log(user);



// Now loop over your user object and alert each of the keys.

function alertKeys(user) {
    for (var key in user) {
        alert(key);
    }
}

alertKeys(user);



// Now loop over your user object and alert each of the values for each key.

function alertValues(user) {
    for (var key in user) {
        alert(user[key]);
    }
}

alertValues(user);



// Remove the username from your user object


function remove(user) {
    for (var key in user) {
        if (key === username) {
            delete user[key];
        }
    }
}

console.log(user);


// Create an object called creditCard that has number, cvc, type, and limit properties and assign them appropriate values.

var creditCard = {
    number: 1234567869009,
    cvc: 667,
    type: "Visa",
    limit: 555000
};





// Create a variable called alternating. Set it equal to the string bonusCategories.

var alternating = "bonusCategories";



/* Using bracket notation, add a bonusCategories key to your creditCard object using 'alternating'.
    Set it's value to an array of 3 items that are objects. 
    Each object should have one key value pair. 
    That key value pair should be the category as the key and the percent it's work for the bonus as the value.
    (e.g. Department Stores, 5%) 
    
    Using dot notation add another key to your object called 'bank' with the value being an object with 2 keys,
        the bank name, and the bank address.
    
    */

creditCard[alternating] = [
    {
        restaurants: "5%"
    },
    {
        gas: "3%"
    },
    {
        cabelas: "25%"
    }
];

creditCard.bank = [{
    name: "Centennial"
},
{
    address: "1357 Falling Springs Rd. Siloam Springs, AR 72761"
}];




// Write a function that will take your creditCard object and user object as arguments and combine them into one object. /* HINT: You will need a for..in loop */

function changeCard(creditCard, user) {
    for (var key in user) {
        var x = 0;
      for (var i in creditCard) {
        if (key !== i ) {
          x++
        }
      }
      if (x > 0) {creditCard[key] = user[key];}
    }
}
changeCard(creditCard, user)


console.log(creditCard);


/*Below you are given an object. Write a function that will loop over the allies property, remove LittleFinger, and insert Dragon Lady.
    It will also change alive to 'More Than Ever'.
    Return the object. */

var obj = {
    user: 'Jon Snow',
    allies: ['That guy into Brienne', 'Ser Davos', 'LittleFinger'],
    alive: 'Sort of',
  };

  function changeObj(obj){
    for (var key in obj) {
        if (key === "allies") {
            for (var i in obj[key]) {
                if (obj[key][i] === "LittleFinger") {
                    obj[key][i] = "Dragon Lady"
                }
            }
        }
    }
    for (var key2 in obj) {
      if (key2 === "alive") {
              obj["More Than Ever"] = obj.key2;
              delete obj[key2];
        }
    }
}

  
