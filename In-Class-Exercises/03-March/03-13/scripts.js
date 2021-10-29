document.querySelector("#hide-img").addEventListener("change", () => {
    document.querySelector("img").style.display = document.querySelector("#hide-img").checked ? "none" : "initial";
});