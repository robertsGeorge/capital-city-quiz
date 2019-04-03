
var QandA = [
  ['what is the capital of france?', 'paris'],
  ['what is the capital of spain?', 'madrid'],
  ['what is the capital of portugal?', 'lisbon'],
  ['what is the capital of italy?', 'rome'],
  ['what is the capital of germany?', 'berlin']
];
// put variables used in program up top, even those used in the loop
var question;
var answer; // offical answer
var response; // user answer

var score = 0;
var questionsRight = [];
var questionsWrong = [];
var html;
// var report; // will contain array of questions right followed by questions wrong

function print(message) {
  // document.write(message);
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}
function buildList(arr) {
  var listHTML = '<ol>';
  for (var i = 0; i < arr.length; i++) {
    listHTML += `<li>${arr[i]}</li>`;
  }
  listHTML += '</ol>';
  return listHTML;
}

/* 
- ask each question in turn
- compare user answer to correct answer
- increment score and list of right and wrong questions */
for (var i = 0; i < QandA.length; i += 1) {
  question = QandA[i][0];
  answer = QandA[i][1];
  response = prompt(question);
  response = response.toLowerCase();
  if ( response === answer ) {
    score += 1;
    questionsRight.push(question);
  } else {
    questionsWrong.push(question);
  }
}

html = `<p>You got ${score} out of ${QandA.length} questions right.</p>`;
html += '<h3>You got these questions right:</h3>';
html += buildList(questionsRight);
html += '<h3>You got these questions wrong:</h3>';
html += buildList(questionsWrong);
print(html);

// complete questionsRight/Wrong html strings
// questionsRight.push('</ol>');
// questionsWrong.push('</ol>');
// // concatenate the two arrays into one array (report)
// var report = questionsRight.concat(questionsWrong);
// join the array's elements into one string with no comma seperator (empty string as argument), and print
// print(report.join(''));




// print(`<p>You got ${score} out of ${QandA.length} questions right.</p>` + questionsRight + questionsWrong);

/* for (var j = 0; j <  ) {

}
reportHTML +=  */