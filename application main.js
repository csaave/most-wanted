"use strict"
window.alert("Enter Information Below")

/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
    searchByName(people);
    break;
    case 'no':
    searchByTraits(people);
    break;
    default:
    alert("Wrong! Please try again, following the instructions dummy. :)");
    app(people); // restart app
    break;
  }
}

function searchByTraits(people) {
  let userSearchChoice = prompt("What would you like to search by? 'height', 'weight', 'eye color', 'gender', 'age', 'occupation'.");
  let filteredPeople;

  switch(userSearchChoice) {
    case "height":
      filteredPeople = searchByHeight(people);
      break;
    case "weight":
      filteredPeople = searchByWeight(people);
      break;
    case "eye color":
      filteredPeople = searchByEyeColor(people);
      break;
    case "gender":
      filteredPeople = searchByGender(people);
      break;
    case "age":
      filteredPeople = searchByAge(people);
      break;
    // so on and so forth
    case "occupation":
      filteredPeople = searchByOccupation(people);
      break;
    default:
      alert("You entered an invalid search type! Please try again.");
      searchByTraits(people);
      break;
  }  
    displayPeople(filteredPeople);
   
  
 

//displayPeople(filteredPeople);


//function for validating the filtered array, and if true, go onto the main menu function


  let foundPerson = filteredPeople[0];

  mainMenu(foundPerson, people);

}


function searchByWeight(people) {
  let userInputWeight = promptFor("How much does the person weigh?", weightInput);

  let weightArray = data.filter(function (el) {
    if(el.weight == userInputWeight) {
      return true;

    }
    // return true if el.height matches userInputHeight
  });



  return weightArray;
}

function searchByHeight(people){
  let userInputHeight = promptFor("How tall is the person?", heightInput);


  let heightArray = data.filter(function(el){


    if((el.height == userInputHeight)){
      return true;
    }
  });
  return heightArray;
}

function searchByEyeColor(people){
  let userInputEyeColor = promptFor("What color is the person's eyes", chars);
  let filteredEyeColor;
  
  switch (userInputEyeColor){
    case "brown":
  
    break;
    case "black":
    filteredEyeColor = true;
    break;
    case "hazel":
    filteredEyeColor = true;
    break;
    case "blue":
    filteredEyeColor = true;
    break;
    case "green":
    filteredEyeColor = true;
    break;
    default:
    alert("Please enter only brown, black, hazel, blue, or green.");
    searchByEyeColor(people);
    break;
  }


  //let newArray = data.filter(function(el){

  

    //if(el.eyeColor == filteredEyeColor){
      //return true;
    //}
  //});
  return filteredEyeColor;
}


function searchByGender(people){
  let userInputGender = promptFor("What is the person's gender", genderInput);


  let genderArray = data.filter(function(el){

  

    if(el.gender == userInputGender){
      return true;
    }
  });
  return genderArray;
}

function searchByAge(people){
  let userInputAge = promptFor("How old is the person?")


}
function searchByOccupation(people){
  let userInputOccupation = promptFor("What is the person's occupation?", chars);


  let occupationArray = data.filter(function(el){

    if(el.occupation == userInputOccupation){
      return true;
    }
  });
  return occupationArray;
}
// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    displayPerson(person);
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}



// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  let personHeight = "Height: " + person.height + "\n";
  let personWeight = "Weight: " + person.weight + "\n";
  let personEyeColor = "Eye Color: " + person.eyeColor + "\n";
  let personGender = "Gender: " + person.gender + "\n";
  let personOccupation = "Occupation: " + person.occupation + "\n";
  let personID = "ID: " + person.id + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
  alert(personHeight);
  alert(personWeight);
  alert(personEyeColor);
  alert(personGender);
  alert(personOccupation);
  alert(personID);
}

// function that prompts and validates user input
function promptFor(question, valid){
    var response = prompt(question).trim();
    if(valid(response)){
      return response;
    }
    return promptFor(question, valid);

}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; 
  // default validation only
}

function heightInput(input){
  if (isNaN(input) === false) {
    return true;
  }
    alert("Please enter the height in inches. Example: 67 inches = 5 Feet 7 Inches");
    return false;

}

function weightInput(input){
  if (isNaN(input) == false) {
    return true;
  }

    alert("Please enter a number.");
    return false;

  }

function genderInput(input) {
  if (input == "male" || input == "female") {
    return true;
  }
    alert("Please enter 'male' or 'female'.");
    return false;
 
}




function searchByName(person) {
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);
  let nameArray = data.filter(function (el){
if (firstName === el.firstName && lastName === el.lastName)
  {return true;}

  });
  displayPeople(nameArray);


    //for(i = 0; i < data.length; i++){
      //if ((data[i].firstName = firstName) && (data[i].lastName = lastName)) {
      //return true;}
    
    
    
    //else {
      //return false;
      //return app(people);
    //}
  //});
  //return newArray;

  
   // 
 
  let personFound = nameArray[0];
  //console.log(personFound);
  mainMenu(personFound, data);
  
}


//checkName(data);












app();






  // body...


 
//function displayArray (info){
  //console.log(data);
//}



//function verifyResults(displayInformation){
  //let i = displayInformation();
  //console.log(i);
//}

//displayArray();





//console.log(data);


//function runSearch(name) {
  
//
//app();







/*function checkSomething(input){
  return data;
}

function newArray(array) {
  let people = checkSomething();*/
  //let person = [];
  //let combinedArray = people.concat(person);
  //console.log(combinedArray);
//}

//newArray();