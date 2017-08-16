console.log("sing.js loaded");

let bottlesOfBeer = function (){
  let numOfBottles = prompt('Matt, how many bottles of the goodstuff do you want to drink?');
  // if ( numOfBottles === 0 ) {
  //   return console.log('No bottles to start with');
  // } ;
  for ( let i = numOfBottles; i > 1; i-- ) {
    console.log(`${i} bottles of beer on the wall \n
    ${i} bottles of beer! \n
    Take one down and pass it around, \n
    ${i-1} bottles of beer on the wall!`);
  }
  console.log(`1 bottle of beer on the wall \n
  1 bottle of beer! \n
  Take one down and pass it around, \n
  0 bottles of beer on the wall!`)
  console.log(`No more bottles...`)
}
bottlesOfBeer();
