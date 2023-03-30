import { CategoriesModel } from "./Categories.model";

export interface ArticleModel {
  id: string;
  title: string;
  description: string;
  image: string;
  category: CategoriesModel;
  content: string;
  isDraft: boolean;
}
