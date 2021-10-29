document.getElementById("email").addEventListener("blur", (event) =>{
    if (event.target.value === "") {
        alert("Please check the fields and make sure they are not blank.");
    }
});

document.getElementById("password").addEventListener("blur", (event) =>{
    if (event.target.value === "") {
        alert("Please check the fields and make sure they are not blank.");
    }
});

document.getElementById("submitBtn").addEventListener("click", function (event) {
    event.preventDefault();
    if (document.getElementById("email").value === "" || 
        document.getElementById("password").value === "") {
        alert("Please check the fields and make sure they are not blank.");
    }
});
