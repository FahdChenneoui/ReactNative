import Api from "../Axios/Api";
const ARTICLE_API="/articles"
const fetchArticles=async()=> {
return await Api.get(ARTICLE_API);
}
const fetchArticleById=async(articleId)=> {
return await Api.get(ARTICLE_API + '/' + articleId);
}
const deleteArticle=async(articleId) =>{
return await Api.delete(ARTICLE_API + '/' + articleId);
}
const addArticle=async(article)=> { 
return await Api.post(ARTICLE_API,article);
} 
const editArticle=(article) =>{ 
return Api.put(ARTICLE_API + '/' + article._id, article);
}
const fetchArticleByCat=async(catId)=> {
return await Api.get(ARTICLE_API + '/affparcat/' + catId);
} 
export const ArticleService = {
fetchArticles,
fetchArticleById,
deleteArticle,
addArticle,
editArticle,
fetchArticleByCat
}
