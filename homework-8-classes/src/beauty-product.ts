import { Product } from './product';

export class BeautyProduct {
    public title: string;
    public brand: string;
    public price: number;
    public discount: number;
    public totalAmount: number;

    public constructor(product: Product) {
        this.title = product.title;
        this.brand = product.brand;
        this.price = product.price;
        this.discount = product.discountPercentage;

        const amount: number = this.price - (this.price * this.discount) / 100;
        this.totalAmount = Math.round(amount * 100) / 100;
    }

    public printProductInfo(): void {
        console.log('title=', this.title);
        console.log('brand=', this.brand);
        console.log('price=', this.price);
        console.log('discount=', this.discount);
        console.log('totalAmount=', this.totalAmount);
    }
}
