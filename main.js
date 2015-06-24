alert('ayy lmao');

var options = ['yes', 'no', 'ayy lmao', 'this isn\'t new york wtf is this'];

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
 return Math.round(Math.random() * (max - min) + min);
}

document.getElementsByClassName('activate')[0].onclick = function () {
   var win = getRandomArbitrary(0,3);
   var userValue = document.getElementById('toss').value;
   document.getElementById('lmao-says').innerHTML= options[win];
   if (options[win] === userValue) {
     document.getElementById('result').innerHTML='you won! AYY LMAO, CONTINUE AYY LMAOING';
   } else {
   document.getElementById('result').innerHTML='you aren\'t worthy of an ayy lmao!';
   }

};