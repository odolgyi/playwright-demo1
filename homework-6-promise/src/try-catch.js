class SelfError extends Error {
    constructor(message) {
        super(message);
        this.name = 'SelfError';
    }
}

async function getData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch data from url_1: ${url}, status: ${response.status}`);
    }
    return await response.json();
}

async function handleData(url) {
    const data = await getData(url);
    console.log('Data:', data);
    return data;
}

async function main(){
    try {
        await handleData('https://api.typicode.com/55invalid-endpoint');
    } catch (err) {
        console.log('First request failed:', err.message);
        try {
            const info = await handleData('https://dummyjson.com/products');
            if (!info.ok) {
                throw new SelfError('First request returned empty data');
            }
        } catch (secondError) {
            console.log('Error:', secondError.message);
        }
    }
}

main();

