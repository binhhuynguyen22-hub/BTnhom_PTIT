let students = [];

function addStudent() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let className = document.getElementById("class").value;
    let age = document.getElementById("age").value;

    if (id === "" || name === "" || className === "" || age === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    let student = {
        id: id,
        name: name,
        className: className,
        age: age
    };

    students.push(student);
    renderStudents();
    clearForm();
}

function renderStudents() {
    let list = document.getElementById("studentList");
    list.innerHTML = "";

    for (let i = 0; i < students.length; i++) {
        list.innerHTML += `
            <tr>
                <td>${students[i].id}</td>
                <td>${students[i].name}</td>
                <td>${students[i].className}</td>
                <td>${students[i].age}</td>
                <td>
                    <button onclick="deleteStudent(${i})">Xóa</button>
                </td>
            </tr>
        `;
    }
}

function deleteStudent(index) {
    students.splice(index, 1);
    renderStudents();
}

function clearForm() {
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("class").value = "";
    document.getElementById("age").value = "";
}
