import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    sizes:[],
    category:[],
    price:"",
    brands:[]

}

const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        setCategory:(state,action)=>{
            state.category.find(cat => cat ===action.payload) ? 
            state.category =state.category.filter((cat)=> cat !== action.payload) : 
            state.category = [...state.category,action.payload]
        },
        setBrand:(state,action)=>{
            state.brands.find(cat => cat ===action.payload) ? 
            state.brands =state.brands.filter((cat)=> cat !== action.payload) : 
            state.brands = [...state.brands,action.payload]
        },
        setSizes:(state,action)=>{
            state.sizes.find(cat => cat ===action.payload) ? 
            state.sizes =state.sizes.filter((cat)=> cat !== action.payload) : 
            state.sizes = [...state.sizes,action.payload]
        },
        setPrice:(state,action) =>{
            state.price = action.payload;
            console.log(state.price)
        },
        resetFilters:(state) =>{
            state.category = [];
            state.brands=[];
            state.price="";
            state.sizes=[]
            console.log(state.category)
        }
    }

})

export default productSlice.reducer;
export const {setCategory,setBrand,setSizes,setPrice,resetFilters} = productSlice.actions;