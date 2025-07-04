const addBtn = document.getElementById("addTask");
const input = document.getElementById("task");
const list = document.querySelector(".taskList");

let tasks = [];

function showTasks() {
    list.innerHTML = "";
    tasks.forEach((task, i) => {
        const li = document.createElement("li");
        const cb = document.createElement("input");
        cb.type = "checkbox";
        cb.checked = task.done;

        const p = document.createElement("p");
        p.textContent = task.text;
        if (task.done) {
            p.style.textDecoration = "line-through";
            p.style.opacity = "0.6";
        }

        const del = document.createElement("button");
        del.textContent = "X";

        cb.addEventListener("change", function() {
            tasks[i].done = cb.checked;
            showTasks();
        });

        del.addEventListener("click", function() {
            tasks.splice(i, 1);
            showTasks();
        });

        li.appendChild(cb);
        li.appendChild(p);
        li.appendChild(del);
        list.appendChild(li);
    });
    list.style.display = tasks.length ? "flex" : "none";
}

addBtn.addEventListener("click", function() {
    const text = input.value.trim();
    if (text) {
        tasks.push({ text: text, done: false });
        input.value = "";
        showTasks();
    }
});

input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addBtn.click();
    }
});

showTasks();
