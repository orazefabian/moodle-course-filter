function getSemesterValue() {
  var input = document.getElementById("course-filter").value;
  return input;
}

function sendSemesterValue() {
  let semesterValue = getSemesterValue();
  browser.tabs.sendMessage(1, {
    semester: semesterValue,
  });
  console.log(semesterValue);
}

function send() {
  browser.tabs
    .query({ active: true, currentWindow: true })
    .then(sendSemesterValue);
}

function reportError(error) {
  document.body.style.border = "2px solid red";
  console.error(`Failed to execute content-script: ${error.message}`);
}

document
  .querySelector("#filter-button")
  .addEventListener("click", sendSemesterValue);
document.querySelector('#course-filter').addEventListener('keypress', e => {
    if(e.key === 'Enter'){
        sendSemesterValue()
    }
});
