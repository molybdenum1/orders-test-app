export interface Order {
  number: number;
  createdAt: number;
  price: number;
  currency: string;
  itemName: string;
  amount: number;
  shippedAt?: number;
}
