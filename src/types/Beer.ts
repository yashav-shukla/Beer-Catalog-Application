export interface Beer {
  id: number;
  name: string;
  price: string;
  rating: {
    average: number;
    reviews: number;
  };
  image: string;
  description?: string;
}