import "./App.css";
import { CategoriesProvider } from "./contexts";
import ArticlesProvider from "./contexts/Articles.context";
import Layout from "./layouts/Layout/Layout";

function App() {
  return (
    <CategoriesProvider>
      <ArticlesProvider>
        <Layout />
      </ArticlesProvider>
    </CategoriesProvider>
  );
}

export default App;
