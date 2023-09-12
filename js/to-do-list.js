const inputValue = document.getElementById("input-value");
const addButton = document.getElementById("add-btn");
const listContainer = document.getElementById("list-container");

addButton.addEventListener("click", () => {
  let getInputValue = inputValue.value;
  if (getInputValue == "") {
    alert("Please Enter a write task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = getInputValue;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputValue.value = "";
  saveData();
});

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
