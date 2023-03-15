// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
   if (`${blocks}` <= 42) {
     return 42 - `${blocks}`;
   } else {
     return `${blocks}` - 42;
   }
}
function distanceFromHqInFeet(feet) {
   if (`${feet}` <= 42) {
     return (42 - `${feet}`) * 264;
   } else {
     return (`${feet}` - 42) * 264;
   }
}  
function distanceTravelledInFeet(start, end) {
  if (end < start) {
    return (start - end) * 264;
  } else {
    return (`${end} ` - `${start}`) * 264;
   }
}
function calculatesFarePrice(start, end) {
  let distance= distanceTravelledInFeet(start,end);
  if (distance<=400){
    return 0;
  }else if(distance>=401,distance<=2000){
    return (Math.abs((distance-400)*0.02));
  }else if(distance>=2001,distance<=2500){
    return 25
  }else if(distance>2500){
    return 'cannot travel that far'
  }
}