export type CartItem = {
  name: string;
  price: number;
  qty: number;
  image: string;
};

export type Product = {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
  stock: number;
};
