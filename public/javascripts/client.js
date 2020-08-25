// Cache DOM
const postGoal = document.querySelectorAll("#post-goal");
const editButton = document.querySelectorAll("#edit-button");

// When user clicks the edit button
// A prompt opens with the prefilled text
// The user edits the text and press OK
// Ok sends a PUT request to our API with the correct headers

document.addEventListener("click", (e) => {
  // Check if our target contains a specific class
  switch (true) {
    // If it contains class edit-button, then edit function
    case e.target.classList.contains("edit-button"): {
      editGoal(e);
      break;
    }
    // If it contains class delete-button, then delete function
    case e.target.classList.contains("delete-button"): {
      deleteGoal(e);
      break;
    }
    default:
      return;
  }
});

function editGoal(e) {
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
          .getAttribute("data-id")
      })
      .then(() => {
        e.target.parentElement.parentElement.querySelector(
          ".item"
        ).textContent = userInput;
      })
      .catch((err) => console.log(err));
  }
}

function deleteGoal(e) {
  let userConfirmation = confirm("Finished with this goal?");
  let dataId = e.target.parentElement.parentElement
    .querySelector(".item")
    .getAttribute("data-id");

  if (userConfirmation) {
    axios
      .post("/delete-item", {
        id: dataId
      })
      .then(() => {
        e.target.parentElement.parentElement.remove();
      })
      .catch((err) => console.log(err));

    // axios
    //   .delete("/update-item", {
    //     goal: userInput,
    //     id: e.target.parentElement.parentElement
    //       .querySelector(".item")
    //       .getAttribute("data-id")
    //   })
    //   .then(() => {
    //     e.target.parentElement.parentElement.querySelector(
    //       ".item"
    //     ).textContent = userInput;
    //   })
    //   .catch((err) => console.log(err));
  }
}
