export interface Product {
    id?: number;
    attributes: {
        name: string;
        image_urls: string[];
        slug: string;
    };
}