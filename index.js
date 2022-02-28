// // Code your solution here
// function findMatching(array, string){ 
// let result = [];
// for(let driver of array){
//   if(string(driver) === true){
//     result = driver;
//     break;
//   }
// }
// return result;
// }
// findMatching.filter(drivers);
// findMatching.filter(drivers.name);
//   function superbowlWin(array){
//     let conclusion = undefined
//     for(const game of array){
//         if(game.result === "W"){
//              conclusion = game.year;
//             break;

//         }

//     }
//    return conclusion; 
// }
// superbowlWin.find(record);

function findMatching(array, string){
  const result = array.filter(word => word.toLowerCase() === string.toLowerCase());
  return result;
}  
  
function fuzzyMatch(array, string){
  const result = array.filter(letters => letters.slice(0,2) === string.slice(0,2));
  return result;
}
function matchName(driver, string){
  const result = driver.filter(word => word.name === string);
    return result;
  }

  
     

  
