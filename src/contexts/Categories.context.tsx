import { createContext, PropsWithChildren, useContext, useState } from "react";
import { articleCategories } from "../data";

interface CategoriesContextModel {
  articleCategories: string[];
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const CategoriesContext = createContext<CategoriesContextModel>(
  {} as CategoriesContextModel
);

export const useCategories = () => {
  const context = useContext(CategoriesContext);
  return context;
};

const CategoriesProvider = ({ children }: PropsWithChildren) => {
  const [filter, setFilter] = useState("");

  return (
    <CategoriesContext.Provider
      value={{ articleCategories, filter, setFilter }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
