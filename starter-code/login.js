console.log("login.js loaded");

let userLogin = {
  userName: 'Panda',
  passWord: 'hi'
}

let login = function () {
  // let numberOfTries = 3
  // debugger;
  for ( let i = 0; i < 3; i++ ) {
    let pwInput = prompt(`Enter password for ${userLogin.userName}`)
    if ( pwInput === userLogin.passWord ) {
      alert('Great! Password matches!')
      return;
    } else {
      alert(`Try Again`);
    }
  }

  alert('You ran out of tries');
}
login();

/* solution works
let login = function () {
  let pwInput = prompt(`Enter password for ${userLogin.userName}`)
    if ( pwInput === userLogin.passWord ) {
      alert('Great! Password matches!')
    } else {
      alert('Try Again');
  }
}
login();
*/
