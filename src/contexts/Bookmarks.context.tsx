import { createContext, PropsWithChildren, useContext, useState } from "react";
import { ArticleModel } from "../models";

interface BookmarksContextModel {
  bookmarks: ArticleModel[];
  setBookmarks: React.Dispatch<React.SetStateAction<ArticleModel[]>>;
}

export const BookmarksContext = createContext<BookmarksContextModel>(
  {} as BookmarksContextModel
);

export const useBookmarks = () => {
  const context = useContext(BookmarksContext);
  return context;
};

const BookmarksProvider = ({ children }: PropsWithChildren) => {
  const [bookmarks, setBookmarks] = useState<ArticleModel[]>([]);

  return (
    <BookmarksContext.Provider value={{ bookmarks, setBookmarks }}>
      {children}
    </BookmarksContext.Provider>
  );
};

export default BookmarksProvider;
