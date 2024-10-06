// variables
const accordionQuestions = document.querySelectorAll(".accordion h2");

// create a loop for multiple questions/answers toggle
for (const question of accordionQuestions) {
  question.addEventListener("click", function () {
    // toggle active class
    question.classList.toggle("active");

    // find the next sibling div of h2 tag
    const answer = question.nextElementSibling;

    // FontAwesome <i>
    const toggleIcon = question.querySelector("i");

    // toggle the visibility of FAQ's answer
    if (answer.classList.contains("hidden")) {
      answer.classList.remove("hidden");
      toggleIcon.classList.remove("fa-chevron-down");
      toggleIcon.classList.add("fa-chevron-up");
    } else {
      answer.classList.add("hidden");
      toggleIcon.classList.remove("fa-chevron-up");
      toggleIcon.classList.add("fa-chevron-down");
    }
  });
}
