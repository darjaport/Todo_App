const input = document.querySelector(".todo__form-input");
const output = document.querySelector(".todo__output ul");
const numberOfTasks = document.querySelector(".number-of-tasks");
const hidde = document.querySelector(".hidde");

manageTasks();

function manageTasks() {
  let todoTasks = [];

  if (todoTasks.length === 0) {
    numberOfTasks.innerHTML = "0";
  } else {
    numberOfTasks.innerHTML = todoTasks.length;
  }

  const btn = document
    .querySelector(".todo__form-btn")
    .addEventListener("click", (e) => {
      e.preventDefault();

      if (input.value == "") {
        console.log("Try again");
      } else {
        todoTasks.push(input.value);
        numberOfTasks.innerHTML = todoTasks.length;

        output.innerHTML += `
                                  <li>
                                      <div class='todo__element'>${input.value}</div>
                                      <span>
                                          <div class="finish"><i class="fas fa-check"></i></div>
                                          <div class="trash"><i class="fas fa-trash"></i></div>
                                      </span>
                                  </li>
              `;

        todoTasks.length === 1
          ? (hidde.style.display = "none")
          : (hidde.style.display = "inline");
      }

      document.querySelectorAll(".finish").forEach((item) =>
        item.addEventListener("click", () => {
          item.parentElement.previousElementSibling.classList.add(
            "line-trough"
          );
          // const span = document.createElement('span');
          // document.querySelector('.line-trough').insertBefore(span, )
        })
      );

      document.querySelectorAll(".trash").forEach((item) => {
        item.addEventListener("click", () => {
          item.parentElement.parentElement.remove();
          const index = todoTasks.indexOf(item);
          todoTasks.splice(index, 1);
          numberOfTasks.innerHTML = todoTasks.length;

          todoTasks.length === 1
            ? (hidde.style.display = "none")
            : (hidde.style.display = "inline");
        });
      });
      input.value = "";
    });
}
