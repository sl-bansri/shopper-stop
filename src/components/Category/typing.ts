import type { ChildCategory } from "../SubCategory/typing";

export type Category= {
  id: string;
  name: string;
  mainbanner:string;
  category_slug: string;
  category_type: string;
  image: string;
  child_categories: ChildCategory[];
}