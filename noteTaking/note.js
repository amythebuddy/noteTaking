const input = document.getElementById("add");
document.getElementById("add").addEventListener("click", addNote);
function addNote(){
    //create a div for note
    let container = document.createElement("div");
    container.classList.add("containerStyle");
    localStorage.setItem("note", container);

    let title = document.createElement("input");
    title.placeholder = "Title";
    title.classList.add("titleStyle")

    let description = document.createElement("input");
    description.placeholder = "Description";
    description.classList.add("descStyle");

    let addBtn = document.createElement("button");
    addBtn.innerText = "Save";
    addBtn.classList.add("saveBtn");
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    //delete the container
    deleteBtn.onclick = function (){
        document.body.removeChild(container);
    }

    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(addBtn);
    container.appendChild(deleteBtn);
    document.body.appendChild(container);

    //create a div to save the note
    addBtn.onclick = function (){
        if(title.value == "" && description.value == ""){
            alert("Please type in something!");
            return;
        }
        window.localStorage.setItem("saveTitle", title.value);
        window.localStorage.setItem("saveDesc", description.value);

        let note = document.createElement("div");
        note.classList.add("noteBox");
        let titleElement = document.createElement("h2");
        let descElement = document.createElement("p");

        titleElement.innerText = localStorage.getItem("saveTitle");
        descElement.innerText = localStorage.getItem("saveDesc");

        //delete the note
        deleteBtn.onclick = function (){
            document.body.removeChild(note);
        }

        note.appendChild(titleElement);
        note.appendChild(descElement);
        document.body.appendChild(note);
        note.appendChild(deleteBtn);
        container.remove(title);
    }

    
}