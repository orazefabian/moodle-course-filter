
console.log("works")

function filterCourses(value) {
  let courses = document.getElementsByClassName("aalink");
  for (let i = 0; i < courses.length; i++) {
    let course = courses[i];
    let text = course.textContent;
    if (!text.includes(value)) {
      course.parentElement.parentElement.parentElement.remove();
      i--;
    }
  }
}

browser.runtime.onMessage.addListener((message) => {
  console.log("Message from the background script:")
  console.log(message.semester)
  filterCourses(message.semester);
});
