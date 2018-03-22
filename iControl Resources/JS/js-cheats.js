/*Replace text in HTML using script*/

$(document).ready(function(){
document.getElementById('youeIDselectorHere').innerHTML = 'Your text here';
});

/*Inserting new class*/

$(document).ready(function(){
var varName = $('<div class="yourClass"><h2>Test</h2></div>');
varName.insertAfter('.yourTargetClass');
});

/*Appending class*/

$(document).ready(function(){
var varName = $('.targetClass');
varName.appendTo('.targetClassLocation');
});
