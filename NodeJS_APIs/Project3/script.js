//references to DOM
const priceForm = document.getElementById("price-form");
const price = document.getElementById("price");
//endpoint for bticon price api
const endpoint = "https://api.coindesk.com/v1/bpi/currentprice.json";

//event listener for price button
priceForm.addEventListener("submit", (event) => {
    event.preventDefault();
    //get the currency option selected
    const curr = new FormData(event.target).get("curr");
    console.log(curr);

    //make call to the api to retrieve price data
    fetch(endpoint)
        .then((res) => res.json())
        .then((json) => {
            const trun = truncate(json.bpi[curr].rate_float);
            price.innerHTML = `${json.bpi[curr].symbol} ${trun}`;
        })
        .catch(() => (price.innerHTML = "Unable to get data."));
});

//add commas to num and restrict to 2 decimal places
function truncate(num) {
    return num.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}
