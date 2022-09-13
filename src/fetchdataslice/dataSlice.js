import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products:[],
    cart:[],
    status:"idle"
}

export const fetchProducts = createAsyncThunk("productstore/fetchproducts",async ()=>{
    const response = await axios.get("http://localhost:8000/data")
    return response.data
})

const dataSlice = createSlice({
    name:"Store",
    initialState,
    reducers:{
        addItemtocart:(state,action)=>{
            const Alreadypresent = state.cart.find(item=>item.id.toString()===action.payload.id.toString())
            if(Alreadypresent){
                Alreadypresent.number++;
            }else{
                state.cart.push(action.payload)
            }
        },
        increaseNumberincart:(state,action)=>{
            const item = state.cart.find(item => item.id.toString()===action.payload.id.toString())
            item.number++;
        },
        decreaseNumberincart:(state,action)=>{
            const item = state.cart.find(item => item.id.toString()===action.payload.id.toString())
            if(item.number === 0){
                item.number=0
            }else{
                item.number--
            }
        },
        removeItemincart:(state,action)=>{
            const newcart = state.cart.filter((item)=>{
                return item.id.toString() !== action.payload.id.toString()
            })
            state.cart = newcart;
        }

    },
    extraReducers:builder => {
        builder.addCase(fetchProducts.pending,(state,action)=>{
            state.status= "Loading"
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.products = action.payload
            state.status = "idle"
        })
        .addCase(fetchProducts.rejected,(state,action)=>{
            state.status="Error"
        })
    }
})

export default dataSlice.reducer;
export const {addItemtocart,increaseNumberincart,decreaseNumberincart,removeItemincart} = dataSlice.actions
export const getAllproducts = state => state.productstore.products
export const getCartproducts = state => state.productstore.cart
export const getStatus = state => state.productstore.status