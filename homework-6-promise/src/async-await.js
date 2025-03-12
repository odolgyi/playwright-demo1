async function getData(){
    const response = await fetch('https://dummyjson.com/products');
    return await response.json();
}

async function handleData() {
    const data = await getData();
    console.log('Data:', data);
}

(async () => {
    console.log('before start');

    await handleData();

    console.log('after start');
})();
