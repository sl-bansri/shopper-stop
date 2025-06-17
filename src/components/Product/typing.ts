export type ProductDetail = {
  Gender?: string;
  pattern?: string;
  packof?: number;
  Neckline?: string;
  Occasion?: string;
  Fabric?: string;
  Material?: string;
  color?: string;
  Type?: string;
  Weave?: string;
};

export type ProductSize = {
  size: string ;
  price: number;
};

export type Product = {
  id: string;
  name: string;
  image: string;
  Price: number;
  Description: string;
  hasSize:boolean;
  sizes?: ProductSize[];
  productdetail?: ProductDetail[];
};
