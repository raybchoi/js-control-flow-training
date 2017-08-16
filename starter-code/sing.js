console.log("sing.js loaded");

let bottlesOfBeer = function (){
  // debugger;
  let numOfBottles = prompt('Matt, how many bottles of the goodstuff do you want to drink?');
  // if ( numOfBottles === 0 ) {
  //   return console.log('No bottles to start with');
  // } ;
  if ( numOfBottles == 2 ) {
    console.log(`2 bottles of beer on the wall \n
    2 bottles of beer! \n
    Take one down and pass it around, \n
    1 bottle of beer on the wall!`);
    console.log(`1 bottle of beer on the wall \n
    1 bottle of beer! \n
    Take one down and pass it around, \n
    0 bottle of beer on the wall!`)
    console.log(`No more bottles...`);
    return;
  } else if ( numOfBottles == 1 ) {
      console.log(`1 bottle of beer on the wall \n
      1 bottle of beer! \n
      Take one down and pass it around, \n
      0 bottle of beer on the wall!`)
      console.log(`No more bottles...`);
      return;
  } else if ( numOfBottles == 0 ) {
      console.log(`No bottles to start with sadness`);
      return;
  }
  else {
  for ( let i = numOfBottles; i > 2; i-- ) {
    console.log(`${i} bottles of beer on the wall \n
    ${i} bottles of beer! \n
    Take one down and pass it around, \n
    ${i-1} bottles of beer on the wall!`);
  }
  console.log(`2 bottles of beer on the wall \n
  2 bottles of beer! \n
  Take one down and pass it around, \n
  1 bottle of beer on the wall!`);
  console.log(`1 bottle of beer on the wall \n
  1 bottle of beer! \n
  Take one down and pass it around, \n
  0 bottles of beer on the wall!`)
  console.log(`No more bottles...`)
  }



}
bottlesOfBeer();
