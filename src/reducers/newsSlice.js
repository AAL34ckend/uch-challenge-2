import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
    const response = await axios.get('https://api-berita-indonesia.vercel.app/antara/tekno');
    console.log('data diambil : ', response.data)
    return response.data.data.posts
})

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        articles: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.status = 'success';
                state.articles = action.payload;
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
                console.log('Error fetching data:', action.error.message);
            })
    }
})


export default newsSlice.reducer;