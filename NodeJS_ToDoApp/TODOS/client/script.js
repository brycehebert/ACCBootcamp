// NOTE: Original trial class code

//Create
$("input").keypress(function (event) {
    if (event.which === 13 && $(this).val() !== "") {
        var newTodoItem = { description: $(this).val() };
        let endpoint = `${baseURL}/todos`

        fetch(endpoint, { 
            method: "POST", 
            body: JSON.stringify(newTodoItem), 
            headers: { "Content-Type": "application/json" }
        })
        .then(function(response){
            if(!response.ok){
                throw Error("No Response")
            } else {
                return response.json();
            }
        })
        .then(function (newTodo) {
            $("ul").append(
                `<li data-id=${newTodo.id}>${newTodo.description}<span><i class='far fa-trash-alt'></i></span></li>`
            );
            $("input").val("");
        })
        .catch(function(error){
            console.error("Failed to CREATE data:", error);
        });
    }
});

const baseURL = "http://localhost:3000";

//Read
$(document).ready(function() {
    let endpoint = `${baseURL}/todos`;
    fetch(endpoint)
    .then(function (response) {
        if (!response.ok){
            throw Error("No Response");
        } else {
            return response.json();
        }
    })
    .then(function (dataArray) {
        console.log(dataArray);
        $("ul").empty();
        dataArray.forEach(todo => {
            let completed = todo.isComplete ? "completed" : "";
            $("ul").append(
                `<li data-id=${todo.id} class=${completed}>${todo.description}<span><i class='far fa-trash-alt'></i></span></li>`
            );
        });
    })
    .catch(function (error){
        console.error("Failed to READ data:", error);
    });
})

//Update
$("ul").on("click", "li", function () {
    let thisId = $(this).data("id");
    let endpoint = `${baseURL}/todos/${thisId}`;
    let self = this;

    fetch(endpoint, { method: "PUT" })
    .then(function(response){
        if (!response.ok) {
            throw Error("Problem with UPDATING");
        } else {
            return response.json();
        }
    })
    .then(function(data) {
        $(self).toggleClass("completed");

    })
    .catch(function(error){
        console.error("Update error:", error);
    })
});

//Delete
$("ul").on("click", "span", function (event) {
    event.stopPropagation();

    let thisId = $(this).parent().data("id");
    let endpoint = `${baseURL}/todos/${thisId}`;
    let self = this;

    fetch(endpoint, { method: "DELETE" })
    .then(function(response) {
        if (!response.ok) {
            throw Error("Cannot delete");
        } else {
            return response.json()
        }
    })
    .then(function (data) {
        console.log(data);
        $(self).parent().remove();
    })
    .catch(function (error) {
        console.error("Problem deleting data", error)
    });

});
