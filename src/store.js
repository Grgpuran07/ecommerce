import { configureStore } from "@reduxjs/toolkit";
import dataReducers from "../src/fetchdataslice/dataSlice";

const store = configureStore({
    reducer:{
        productstore:dataReducers
    }
})

export default store