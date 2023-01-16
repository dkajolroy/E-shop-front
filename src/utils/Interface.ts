export interface ChildrenElement {
  children: JSX.Element;
}
export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};
export interface ProductInterface {
  products: ProductType[];
  limit: number;
  skip: number;
  total: number;
}
