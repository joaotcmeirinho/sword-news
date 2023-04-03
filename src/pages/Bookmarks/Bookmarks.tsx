import { ArticlesList } from "../../components";
import { useBookmarks } from "../../contexts";

const Bookmarks = () => {
  const { bookmarks } = useBookmarks();

  return (
    <>
      <h1>My Bookmarks</h1>
      <ArticlesList articlesData={bookmarks} />
    </>
  );
};

export default Bookmarks;
