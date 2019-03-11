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
  //have an array that includes the traits I searched so that it will run through and make sure the user enters a new one and not the same
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
    case "occupation":
      filteredPeople = searchByOccupation(people);
      break;
    default:
      alert("You entered an invalid search type! Please try again.");
      searchByTraits(people);
      break;
  }  
  displayPeople(filteredPeople);
  let correctPerson = promptFor("Did you find the person you were looking for? Please enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(correctPerson){
    case "yes":
      let foundPerson = filteredPeople[0];
      mainMenu(foundPerson, people);
      return;
    case "no":
      searchByTraits(filteredPeople);
      break;
    /*let foundPerson = filteredPeople[0];
  }
  }
  }
  mainMenu(foundPerson, people);*/
  }
  /*let firstNameOfPerson = prompt("What is the first name of the person?");
  let lastNameOfPerson = prompt("What is the last name of the person?");
  for (var i = 0; i < filteredPeople.length; i++) {
    if ((firstNameOfPerson === filteredPeople[i].firstName) && (lastNameOfPerson === filteredPeople[i].lastName)) {

    }
    else{
      continue;
    }
  }
  let foundPerson = searchByPersonInArray(people);*/
}

  function searchByPersonInArray(people){
     for (var i = 0; i < people.length; i++) {
       alert(people[i].firstName + ' ' + people[i].lastName);
       let foundPerson = promptFor("Is this the person you were looking for? Please enter 'yes' or 'no'", yesNo).toLowerCase();
       switch(foundPerson){
        case "yes":
          let person = people[i];
          return person;
        case "no":
          break;
       }
     }
  }
  





function searchByWeight(people) {
  let userInputWeight = promptFor("How much does the person weigh?", weightInput);
  if (people === undefined) {
    let weightArray = data.filter(function (el) {
    if(el.weight === userInputWeight) {
      return true;
    }
    });
    if (weightArray.length > 0) {
      return weightArray;
    }
    else if (weightArray.length === 0) {
      return people;
    }
    
  }
  else if (people.length > 0) {
    let weightArray = people.filter(function(el){
      if (el.weight === userInputWeight) {
        return true;
      }
    });
    if (weightArray.length > 0) {
      return weightArray;
    }
    else if (weightArray.length === 0) {
      return people;
    }
    
  }
  



  
}

function searchByHeight(people){
  let userInputHeight = promptFor("How tall is the person?", heightInput);
  if (people === undefined) {
    let heightArray = data.filter(function(el){
    if((el.height === userInputHeight)){
      return true;
    }
  });
    if (heightArray.length > 0) {
      return heightArray;
    }
    else if (heightArray.length === 0) {
      return people;
    }
    
  }
  else if (people.length > 0) {
    let heightArray = people.filter(function(el){
      if (el.height === userInputHeight) {
        return true;
      }
    });
    if (heightArray.length > 0) {
      return heightArray;
    }
    else if (heightArray.length === 0) {
      return people;
    }
    
  }
  
  
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

  if (people === undefined) {
    let eyeColorArray = data.filter(function(el){
    if(el.eyeColor === filteredEyeColor){
      return true;
    }
  });
    if (eyeColorArray.length > 0) {
      return eyeColorArray;
    }
    else if (eyeColorArray === 0) {
      return people;
    }
    
  }
  else if (people.length > 0) {
    let eyeColorArray = people.filter(function(el){
      if (el.eyeColor === filteredEyeColor) {
        return true;
      }
    });
    if (eyeColorArray.length > 0) {
      return eyeColorArray;
    }
    else if (eyeColorArray.length === 0) {
      return people;
    }
    
  }
  
  
}


function searchByGender(people){
  let userInputGender = promptFor("What is the person's gender", genderInput);
  if (people === undefined) {
    let genderArray = data.filter(function(el){
    if(el.gender === userInputGender){
      return true;
    }
  });
    if (genderArray.length > 0) {
      return genderArray;
    }
    else if (genderArray.length === 0) {
      return people;
    }
    
  }
  else if (people.length > 0) {
    let genderArray = people.filter(function(el){
      if (el.gender === userInputGender) {
        return true;
      }
    });
    if (genderArray.length > 0) {
      return genderArray;
    }
    else if (genderArray.length === 0) {
      return people;
    }
    
  }
  
  
}

function searchByAge(people){
  let userInputAge = promptFor("How old is the person?")


}
function searchByOccupation(people){
  let userInputOccupation = promptFor("What is the person's occupation?", chars);
  if (people === undefined) {
    let occupationArray = data.filter(function(el){

    if(el.occupation === userInputOccupation){
      return true;
    }
  });
    if (occupationArray.length > 0) {
      return occupationArray;
    }
    else if (occupationArray.length === 0) {
      return people;
    }
  }
  else if (people.length > 0) {
    let occupationArray = people.filter(function(el){
      if (el.occupation === userInputOccupation) {
        return true;
      }
    });
    if (occupationArray.length > 0) {
      return occupationArray;
    }
    else if (occupationArray.length === 0) {
      return people;
    }
  }

  
  
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
    getFamily(person);
    
    break;
    case "descendants":
    var personDescendants = [];
    var people = data;
    getDescendants(person, personDescendants, people);
    
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



function getDescendants(person, descendants, database){
  var arrayLength = database.length;
  for (var i = 0; i < arrayLength; i++) {
   var element = database[i];
    if ((element.parents[0] === person.id) || (element.parents[1] === person.id)) {
      descendants.push(element);
      var newPeople = database.filter(function(el){
        if (el.id !== element.id) {
          return true;
        }
        
      });
      return getDescendants(person, descendants, newPeople);
    }
    else {
      continue;
   }
   break;
 }
 for (var i = 0; i < arrayLength; i++) {
   var element = database[i];
   for (var j = 0; j < descendants.length; j++) {
     if ((element.parents[0] === descendants[j].id) || (element.parents[1] === descendants[j].id)){
      descendants.push(element);
      var newPeople = database.filter(function(el){
        if (el.id !== element.id) {
          return true;
        }
      });
      return getDescendants(person, descendants, newPeople);
     }
     else{
      continue;
     }
   }
 }
 if (descendants.length === 0) {
  window.alert("This person has no descendants.");
 }
 else{
  displayPeople(descendants);
 }
 
   
   mainMenu(person, data);
 }
   
 
 

 



function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
 
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "Height: " + person.height + "\n";
  personInfo += "Weight: " + person.weight + "\n";
  personInfo += "Eye Color: " + person.eyeColor + "\n";
  personInfo += "Gender: " + person.gender + "\n";
  personInfo += "Occupation: " + person.occupation + "\n";
  personInfo += "ID: " + person.id + "\n";
  
  
  alert(personInfo);
  mainMenu(person, data);
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


function getFamily(person){
  var family = [];
  var arrayLength = data.length;
  for (var i = 0; i < arrayLength; i++) {
    var element = data[i];
   if (element.lastName === person.lastName) {
    if (element.firstName !== person.firstName) {
      if ((element.parents[0] === person.id) || (element.parents[1] === person.id)) {
        family.push(element.firstName + ' ' + element.lastName + "\n");
      }
      else if ((element.id === person.parents[0]) || (element.id === person.parents[1])) {
        family.push(element.firstName + ' ' + element.lastName + "\n");
      }
      else if ((element.id === person.currentSpouse) && (element.currentSpouse === person.id)) {
        family.push(element.firstName + ' ' + element.lastName + "\n");
      }
      else if (element.parents.length === person.parents.length) {
        if ((element.parents.length === 2) && (person.parents.length === 2)) {
          if ((element.parents[0] === person.parents[0]) && (element.parents[1] === person.parents[1])) {
          family.push(element.firstName + ' ' + element.lastName + "\n");
          }
          else{
            continue;
          }

        }
        else{
          continue;
        }
      }
      
      else if ((element.parents.length === 0) && (person.parents.length === 0)) {
        continue;
      }
      else{
        continue;
    }
   }

   
   
   
   
   }
   else if (element.lastName !== person.lastName) {
     if ((element.parents[0] === person.id) || (element.parents[1] === person.id)) {
    family.push(element.firstName + ' ' + element.lastName + "\n");
   }
   else if ((element.id === person.parents[0]) || (element.id === person.parents[1])) {
    family.push(element.firstName + ' ' + element.lastName + "\n");
   }
   else if (element.parents.length === person.parents.length) {
    if ((element.parents.length === 0) && (person.parents.length === 0)) {
      continue;
    }
    else if ((element.parents.length === 2) && (person.parents.length === 2)) {
      if ((element.parents[0] === person.parents[0]) && (element.parents[1] === person.parents[1])) {
        family.push(element.firstName + ' ' + element.lastName + "\n");
      }
      else{
        continue;
      }
    }
   }
   }
   else{
    continue;
   }
  }

  
  window.alert(family);
  mainMenu(person, data);
}






function searchByName(person) {
  let firstName = promptFor("What is the person's first name?", chars).toLowerCase();
  let lastName = promptFor("What is the person's last name?", chars).toLowerCase();
  let nameArray = data.filter(function (el){
  if (firstName === el.firstName.toLowerCase() && lastName === el.lastName.toLowerCase())
  {return true;}

  });
  displayPeople(nameArray);


    

 
  let personFound = nameArray[0];
  //console.log(personFound);
  mainMenu(personFound, data);
  

}












app();





