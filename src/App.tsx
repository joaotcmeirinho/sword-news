import "./App.css";
import {
  CategoriesProvider,
  ArticlesProvider,
  SessionProvider,
  BookmarksProvider,
} from "./contexts";
import Layout from "./layouts/Layout/Layout";

function App() {
  return (
    <SessionProvider>
      <CategoriesProvider>
        <ArticlesProvider>
          <BookmarksProvider>
            <Layout />
          </BookmarksProvider>
        </ArticlesProvider>
      </CategoriesProvider>
    </SessionProvider>
  );
}

export default App;
