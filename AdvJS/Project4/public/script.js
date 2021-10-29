document.addEventListener("DOMContentLoaded", () => {
    const jobApp = document.getElementById("jobApplication");

    jobApp.addEventListener("submit", (event) => {
        if (jobApp.checkValidity() === false){
            event.preventDefault();
            event.stopPropagation();
        }
        jobApp.classList.add("was-validated");
    })
})