let image = document.getElementById("pic");
image.setAttribute("src", "https://images.dog.ceo/breeds/pyrenees/n02111500_7655.jpg")

const endpoint = "https://dog.ceo/api/breeds/image/random";

let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    fetch(endpoint)
    .then(response => {
        if (response.ok) {
            return response.json()
        }
        throw Error("Something Broke");
    })
    .then(data => image.setAttribute("src", data.message))
    .catch(err => console.log(err));

})