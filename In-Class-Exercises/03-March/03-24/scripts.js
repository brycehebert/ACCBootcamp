document.getElementById("form").addEventListener("submit", (event) => {
    const data = new FormData(event.target);
    let errors = [];

    if (data.get("name") === "") {
        errors.push("Please enter a name");
    }

    if (data.get("password").length <= 6) {
        errors.push("Password must be greater than 6 characters.");
    }

    if (errors.length > 0) {
        event.preventDefault();
        showError(errors);
    }
});

function showError(errors) {
    document.getElementById("wrapper").style.border = "1px solid red";
    document.getElementById("msg").innerText = errors.join(", ");
}
