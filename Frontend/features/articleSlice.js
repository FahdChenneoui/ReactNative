import { createSlice, createAsyncThunk } from
    '@reduxjs/toolkit'
import { ArticleService } from "../Services/ArticlesServices"
export const createArticle = createAsyncThunk(
    "article/createArticle",
    async (article) => {
        const res = await ArticleService.addArticle(article);
        return res.data
    }
);
export const getArticles = createAsyncThunk(
    "article/getArticles",
    async () => {
        const res = await ArticleService.fetchArticles();
        return res.data;
    }
);
export const updateArticle = createAsyncThunk(
    "article/updateArticle",
    async (art) => {
        const res = await ArticleService.editArticle(art);
        return res.data;
    }
);
export const deleteArticle = createAsyncThunk(
    "article/deleteArticle",
    async (id) => {
        await ArticleService.deleteArticle(id);
        return id;
    }
);
export const findArticleByID = createAsyncThunk(
    "article/findArticleByID",
    async (id) => {
        const res = await
            ArticleService.fetchArticleById(id);
        return res.data;
    }
);
export const articleSlice = createSlice({
    name: 'article',
    initialState: {
        articles: [],
        article: {},
        status: null,
    },
    reducers: {
        removeSelectedArticles: (state) => {  
            articles=[]
            state.success=null
            state.error=null
        
            
          }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getArticles.fulfilled, (state, action) => {
                state.status = "success";
                state.articles = action.payload;
            })
            .addCase(createArticle.fulfilled, (state, action) => {
                state.status = "success";
                state.articles.push(action.payload);
            })
            .addCase(updateArticle.fulfilled, (state, action) => {
                const index = state.articles.findIndex(article =>
                    article._id === action.payload._id);
                state[index] = {
                    ...state[index],
                    ...action.payload,
                };
            })
            .addCase(deleteArticle.fulfilled, (state, action) => {
                let index = state.articles.findIndex(({ id }) => id
                    === action.payload._id);
                state.articles.splice(index, 1);
            })
            .addCase(findArticleByID.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = null
                state.article = action.payload;
            })

    }
})
export const { removeSelectedArticles } =articleSlice.actions

export default articleSlice.reducer;
