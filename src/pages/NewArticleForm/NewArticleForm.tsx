import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import { Button, InputSelect, InputText } from "../../components";
import { useArticles, useCategories } from "../../contexts";
import { ArticleModel } from "../../models";
import { BtnContainer, FormContainer } from "./NewArticle.styles";

const NewArticleForm = () => {
  const navigate = useNavigate();
  const newArticleId = uuid();

  const [newArticle, setNewArticle] = useState<ArticleModel>({
    id: newArticleId,
    title: "",
    description: "",
    image: "",
    category: "",
    content: "",
    isDraft: false,
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
    setArticles([newArticle, ...articles]);
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
          label="Publish"
          onClickHandler={handleOnSubmit}
          width={"200px"}
        />
        <label>Draft</label>
        <input onChange={handleOnChangeDraft} type="checkbox" />
      </BtnContainer>
    </FormContainer>
  );
};

export default NewArticleForm;
