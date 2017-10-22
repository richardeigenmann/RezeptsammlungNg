export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    description: string;
    price: number;
    releaseDate: string;
    starRating: number;
    imageUrl: string;
}

export class Product implements IProduct {
    constructor(
        public productId: number,
        public productName: string,
        public productCode: string,
        public description: string,
        public price: number,
        public releaseDate: string,
        public starRating: number,
        public imageUrl: string,
    ) { }
    calculatediscount(percent: number): number {
        return this.price - (this.price * percent / 100);
    }
}