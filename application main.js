"use strict"
window.alert("Enter Information Below")






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
    app(people); 
    break;
  }
}

function searchByTraits(people) {
  let userSearchChoice = prompt("What would you like to search by? 'height', 'weight', 'eye color', 'gender', 'age', 'date of birth',  'occupation'.");
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
    
    case "occupation":
      filteredPeople = searchByOccupation(people);
      break;
    case "date of birth":
      filteredPeople = searchByDob(people);
      break;
    default:
      alert("You entered an invalid search type! Please try again.");
      searchByTraits(people);
      break;
  }  
    displayPeople(filteredPeople);


  let foundPerson = filteredPeople[0];

  mainMenu(foundPerson, people);

}



function searchByWeight(people) {
  let userInputWeight = promptFor("How much does the person weigh?", weightInput);

  let weightArray = data.filter(function (el) {
    if(el.weight == userInputWeight) {
      return true;

    }
    
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
    filteredEyeColor = "brown";
    break;
    case "black":
    filteredEyeColor = "black";
    break;
    case "hazel":
    filteredEyeColor = "hazel";
    break;
    case "blue":
    filteredEyeColor = "blue";
    break;
    case "green":
    filteredEyeColor = "green";
    break;
    default:
    alert("Please enter only brown, black, hazel, blue, or green.");
    searchByEyeColor(people);
    break;
  }


  let eyeColorArray = data.filter(function(el){

  

    if(el.eyeColor == filteredEyeColor){
      return true;
    }
  });
  return eyeColorArray;
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

function mainMenu(person, people){

  

  if(!person){
    alert("Could not find that individual.");
    return app(people); 
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    displayPerson(person);
    break;
    case "family":
    displayPeople(person);
    
    break;
    case "descendants":
    displayPeople(person);
    
    break;
    case "restart":
    app(people); 
    break;
    case "quit":
    return; 
    default:
    return mainMenu(person, people); 
  }
}

function dobInput(input){
 if(input == false){
   return true;
 }
 alert("please enter date of birth 12/3/4567");
}

function getDescendants(people){

}


function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
 
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  let personHeight = "Height: " + person.height + "\n";
  let personWeight = "Weight: " + person.weight + "\n";
  let personEyeColor = "Eye Color: " + person.eyeColor + "\n";
  let personGender = "Gender: " + person.gender + "\n";
  let personOccupation = "Occupation: " + person.occupation + "\n";
  let personID = "ID: " + person.id + "\n";
  let persondescendants = "Descendants: " + person.descendants + "\n";
  
  alert(personInfo);
  alert(personHeight);
  alert(personWeight);
  alert(personEyeColor);
  alert(personGender);
  alert(personOccupation);
  alert(personID);
  alert(persondescendants);
}

function searchByDob(people){
  let userInputDob = promptFor("What is the person's date of birth?", dobInput);
  let newArray = data.filter(function(el){
    if(el.dob == userInputDob){
      return true;
    }
    
});
return newArray;
}


function promptFor(question, valid){
    var response = prompt(question).trim();
    if(valid(response)){
      return response;
    }
    return promptFor(question, valid);

}


function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}


function chars(input){
  return true; 
 
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


    

 
  let personFound = nameArray[0];
  //console.log(personFound);
  mainMenu(personFound, data);
  
}















app();





