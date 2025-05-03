export interface Product {
  name: string;
  id: number;
  content: string | null;
  price: number;
  imageUrl: string | null;
  authorId: number;
  createdAt: Date;
}
