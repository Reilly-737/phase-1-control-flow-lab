function scuberGreetingForFeet(feet){
  // Write your code here!
let freesample = 'This one is on me!'
  if (feet <= 400){
return freesample; 
  }else if (feet > 2500){
    return "No can do.";
  } else if (feet > 400 && feet <= 2000){
   return "That will be twenty bucks.";
} else if (feet > 2000 && feet <= 2500){
  return "I will gladly take your thirty bucks.";
}
}

function ternaryCheckCity(city){
  // Write your code here!
 
   if (city === "NYC"){
    return "Ok, sounds good.";
   } else {
    return "No go.";
   }
}

function switchOnCharmFromTip(value){
  // Write your code here!
 switch (value) {
  case 'generous':
    return 'Thank you so much.';
    case 'regular':
      return 'Thank you.';
      default: 
        return 'Bye.';
 }
}