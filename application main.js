window.alert("Enter Information Below")

function app(people){
  let searchType = prompt("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
    searchByName(people);
    break;
    case 'no':
    searchByTraits(people);
    break;
    default:
    alert("Wrong! Please try again, follow the instructions dummy. :)");
    app(people); // restart app
    break;
  }
}
// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}

function searchByName(people){
  let firstName = prompt("What is the person's first name?", chars);
  let lastName = prompt("What is the person's last name?", chars);
  let newArray = data.filter(function (el) {
    if ((el.firstName==firstName)&& (el.lastName==lastName)) {
      return true;
    }
  });
  console.log(newArray);
}


function searchByTraits(people) {
  let userSearchChoice = prompt("What would you like to search by? 'height', 'weight', 'eye color', 'gender', 'age', 'occupation'.");
  let filteredPeople ;

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
}


function searchByHeight(people){
	let userInputHeight = prompt("What is the person height");

	let newArray = data.filter(function(el){
		if(el.height == userInputHeight){
			return true;
		}
	});
	return newArray;
}

  function searchByWeight(people) {
  let userInputWeight = prompt("How much does the person weigh?");

  let newArray = data.filter(function (el) {
    if(el.weight == userInputWeight) {
      return true;
    }
    // return true if el.height matches userInputHeight
  });

  console.log(newArray);
}

function searchByEyeColor(people){
	let userInputEyeColor = prompt("What color is the person's eyes");

	let newArray = data.filter(function(el){
		if(el.eyeColor == userInputEyeColor){
			return true;
		}
	});
	return newArray;
}

function searchByGender(people){
	let userInputGender = prompt("What is the person's gender");

	let newArray = data.filter(function(el){
		if(el.gender == userInputGender){
			return true;
		}
	});
	return newArray;
}

function searchByAge(people){
	let userInputAge = prompt("How old is the person");

	let newArray = data.filter(function(el){
		if(el.age == userInputAge){
			return true;
		}
	});
	return newArray;
}

function searchByOccupation(people){
	let userInputOccupation = prompt("What is the person's occupation");

	let newArray = data.filter(function(el){
		if(el.occupation == userInputOccupation){
			return true;
		}
	});
	return newArray;
}



app();