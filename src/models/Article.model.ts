export interface ArticleModel {
  id: string;
  authorId: string;
  title: string;
  description: string;
  image: string;
  category: string;
  content: string;
  isDraft: boolean;
  isHighlighted: boolean;
}
