import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const memes = createAsyncThunk(
    "get/getMemes", async () => {
        try {
            const res = await fetch('https://api.imgflip.com/get_memes', { cache: 'no-store' });
            const result = await res.json();
            console.log(result.data.memes)
            return result.data.memes
        } catch (error) {
            console.log(error.message)
        }

    }
)

export const fetchingMeme = createAsyncThunk(
    "single/SingleMeme", async (id) => {
        const res = await fetch('https://api.imgflip.com/get_memes', { cache: 'no-store' });
        const result = await res.json();
        const singleMeme = result.data.memes.find(meme => meme.id === id)
        return singleMeme

    }
)

export const newMeme = createAsyncThunk(
    "New/NewMeme", async ({ id, text1, text2 }) => {
        try {
            console.log(id, "text1", text1, "text2", text2)
            const response = await fetch(` https://api.imgflip.com/caption_image?template_id=${id}&username=MuneebAhmed3&password=muneeb12&text0=${text1}&text1=${text2}`, { cache: 'no-store' })
            const result = await response.json()

            console.log(result.data.url)
            return result.data.url

        } catch (error) {
            console.log(error.mesaage)
        }

    }
)

const initialState = {
    memes: [],
    meme: {},
    newMeme: "",
    status: "idle",
    error: null
}
const MemeSlice = createSlice({
    name: "memes",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(memes.pending, (state, { payload }) => {
                state.status = "loading"
            })

            .addCase(memes.fulfilled, (state, { payload }) => {
                state.memes = payload
            })

            .addCase(memes.rejected, (state, { payload }) => {
                state.status = "rejected"
                state.error = "error"
            })

            .addCase(fetchingMeme.fulfilled, (state, { payload }) => {
                state.meme = payload
            })
            .addCase(newMeme.fulfilled, (state, { payload }) => {
                state.newMeme = payload
            })
    }

})

export default MemeSlice.reducer

