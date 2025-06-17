import type { Product } from "../Product/typing";

export type ChildCategory= {
  id: string;
  name: string;
  productbanner:string,
  image: string;
  category_slug: string;
  product: Product[];
}