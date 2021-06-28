export interface IProduct {
  id: number;
  image: string;
  content: string;
  delivery?: string;
  price: number;
  categoryId: number;
}
