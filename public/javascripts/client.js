// Cache DOM
const postGoal = document.querySelectorAll("#post-goal");
const editButton = document.querySelectorAll("#edit-button");

// When user clicks the edit button
// A prompt opens with the prefilled text
// The user edits the text and press OK
// Ok sends a PUT request to our API with the correct headers

document.addEventListener("click", (e) => editGoal(e));

function editGoal(e) {
  if (e.target.classList.contains("edit-button")) {
    let userInput = prompt(
      "Enter your new text.",
      e.target.parentElement.parentElement
        .querySelector(".item")
        .textContent.trim()
    );

    if (userInput) {
      axios
        .post("/update-item", {
          goal: userInput,
          id: e.target.parentElement.parentElement
            .querySelector(".item")
            .getAttribute("data-id"),
        })
        .then(() => {
          e.target.parentElement.parentElement.querySelector(
            ".item"
          ).textContent = userInput;
        })
        .catch((err) => console.log(err));
    }
  }
}
