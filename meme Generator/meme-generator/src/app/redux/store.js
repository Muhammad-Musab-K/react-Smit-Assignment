import action from "./action";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        "memes":action ,
    }
})

export default store