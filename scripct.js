const inputBox = document.getElementById("ip-box");
const listcuntainer = document.getElementById("list-cuntainer");


function addTask() {
    if (inputBox.value === '') {
        alert("You Must Add Something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcuntainer.appendChild(li);

        let dlt = document.createElement("dlt");
        dlt.innerHTML = "Delete";
        li.appendChild(dlt);
    }
    inputBox.value = "";
    saveData();
}
// ✅ Add support for pressing Enter
inputBox.addEventListener("keydown", function (e) {   // 🔹 This is the new line
    if (e.key === "Enter") {                         // 🔹 Checks if Enter is pressed
        addTask();                                   // 🔹 Calls addTask()
    }
});

//  for deletion
listcuntainer.addEventListener("click", function (e) {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "DLT") {
        e.target.parentElement.remove();
        saveData()
    }
}, false)

// Saving Data
function saveData() {
    localStorage.setItem("data", listcuntainer.innerHTML)
}
function showData() {
    listcuntainer.innerHTML = localStorage.getItem("data");
}
showData();