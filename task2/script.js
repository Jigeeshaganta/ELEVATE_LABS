function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskValue = taskInput.value.trim();

  if (taskValue === "") return;

  const taskList = document.getElementById("taskList");

  const taskDiv = document.createElement("div");
  taskDiv.className = "task";

  const taskText = document.createElement("span");
  taskText.textContent = taskValue;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerHTML = "&#10060;";
  deleteBtn.onclick = () => taskDiv.remove();

  taskDiv.appendChild(taskText);
  taskDiv.appendChild(deleteBtn);

  taskList.appendChild(taskDiv);

  taskInput.value = "";
}
