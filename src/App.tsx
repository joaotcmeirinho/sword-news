import "./App.css";
import {
  CategoriesProvider,
  ArticlesProvider,
  SessionProvider,
} from "./contexts";
import Layout from "./layouts/Layout/Layout";

function App() {
  return (
    <SessionProvider>
      <CategoriesProvider>
        <ArticlesProvider>
          <Layout />
        </ArticlesProvider>
      </CategoriesProvider>
    </SessionProvider>
  );
}

export default App;
