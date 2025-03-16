import { BeautyProduct } from './beauty-product';

export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    image: string;
}

interface ProductResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

const basURl = 'https://dummyjson.com/products';

export async function getJsonResponse(): Promise<ProductResponse> {
    const response = await fetch(basURl);
    const json = await response.json() as ProductResponse;
    return json;
}

(async () => {
    const data = await getJsonResponse();
    console.log(data.products);
    console.log('price: ', data.products[0].price);
})();

(async () => {
    const data = await getJsonResponse();
    const dataBeautyProduct = data.products.filter(product => product.category === 'beauty')[0];
    const beautyProduct = new BeautyProduct(dataBeautyProduct);
    beautyProduct.printProductInfo();
})();
