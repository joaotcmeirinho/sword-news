import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import { Button, InputSelect, InputText } from "../../components";
import { useArticles, useCategories, useSession } from "../../contexts";
import { ArticleModel } from "../../models";
import { BtnContainer, FormContainer } from "./NewArticle.styles";

const NewArticleForm = () => {
  const navigate = useNavigate();
  const newArticleId = uuid();

  const { state } = useLocation();

  const { id, title, description, image, category, content, isDraft } =
    state || {};

  const isEditingArticle = !!state;

  const { user } = useSession();

  const [newArticle, setNewArticle] = useState<ArticleModel>({
    id: newArticleId,
    title: title || "",
    description: description || "",
    image: image || "",
    category: category || "",
    content: content || "",
    isDraft: isDraft || false,
    authorId: user?.userId!,
    isHighlighted: false,
  });

  const { articleCategories } = useCategories();
  const { articles, setArticles } = useArticles();

  const handleOnChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewArticle({ ...newArticle, title: e.target.value });

  const handleOnChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewArticle({ ...newArticle, description: e.target.value });

  const handleOnChangeImageUrl = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewArticle({ ...newArticle, image: e.target.value });

  const handleOnChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setNewArticle({ ...newArticle, category: e.target.value });

  const handleOnChangeContent = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewArticle({ ...newArticle, content: e.target.value });

  const handleOnChangeDraft = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewArticle({ ...newArticle, isDraft: e.target.checked });

  const handleOnSubmit = () => {
    if (isEditingArticle) {
      const articleIndex = articles.findIndex((article) => article.id === id);
      const articlesCopy = articles.map((article) =>
        Object.assign({}, article)
      );
      articlesCopy[articleIndex] = newArticle;
      setArticles(articlesCopy);
    } else {
      setArticles([
        { ...newArticle, authorId: user?.userId || "" },
        ...articles,
      ]);
    }
    navigate("/");
  };

  return (
    <FormContainer>
      <InputText
        value={newArticle.title}
        onChangeHandler={handleOnChangeTitle}
        label="Title"
        styles={{ width: "300px", height: "25px" }}
      />
      <InputText
        value={newArticle.description}
        onChangeHandler={handleOnChangeDescription}
        label="Small description"
        styles={{ width: "300px", height: "150px" }}
      />
      <InputText
        value={newArticle.image}
        onChangeHandler={handleOnChangeImageUrl}
        label="Image URL"
        styles={{ width: "300px", height: "25px" }}
      />
      <InputSelect
        value={newArticle.category}
        onChangeHandler={handleOnChangeCategory}
        items={articleCategories}
        label={"Categoria"}
      />
      <InputText
        value={newArticle.content}
        onChangeHandler={handleOnChangeContent}
        label="Content"
        styles={{ width: "300px", height: "300px" }}
      />
      <BtnContainer>
        <Button
          label={isEditingArticle ? "Edit" : "Publish"}
          onClickHandler={handleOnSubmit}
          width={"200px"}
        />
        <label>Draft</label>
        <input
          checked={newArticle.isDraft || false}
          onChange={handleOnChangeDraft}
          type="checkbox"
        />
      </BtnContainer>
    </FormContainer>
  );
};

export default NewArticleForm;
