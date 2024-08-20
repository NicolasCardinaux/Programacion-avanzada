const apikey = "fdfd0ebc-f93a-4e5f-b5ef-f74f2412ade1";

async function fetchElements() {
    const response = await fetch(`https://rest.coinapi.io/v1/exchanges`, {
        headers: {
            'X-CoinAPI-Key': apikey
        }
        });

    const data = await response.json();

    return data.slice(0, 16).map(item => ({
        name: item.name,
        volume_1hrs_usd: item.volume_1hrs_usd,
        volume_1day_usd: item.volume_1day_usd
    }));
}


async function displayElements() {
    const cryptoList = document.getElementById('crypto-list');
    const cryptoData = await fetchElements();

    if (cryptoData && cryptoData.length > 0){ //checks if truthy
        cryptoData.forEach(element => {
            const listItem = document.createElement("li");
            listItem.textContent = `Name: ${element.name}, Volume (1hr): $${element.volume_1hrs_usd}, Volume (1day): $${element.volume_1day_usd}`;
            cryptoList.appendChild(listItem);
        });
    } else{
        cryptoList.textContent = "No elements"
    }   
}

displayElements()
