function getData() {
    return fetch('https://dummyjson.com/products')
        .then((response) => response.json())
        .then((data) => {
            if (data) {
                printData(data);
            }
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}

function printData(response) {
    console.log('Data:', response);
}

getData();
