import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface InitialState { 
    value: number;
}

const initialState: InitialState = {
    value: 0
}

const countSlice = createSlice({
    name: "@count",
    initialState,
    reducers: {
        addCount: (state, action: PayloadAction<number>) => {
            state.value += action.payload     
        },
        removeCount: (state, action: PayloadAction<number>) => {
            state.value= state.value > 0 ? 
            state.value - action.payload : state.value 
        }
    }
})

export const { addCount, removeCount} = countSlice.actions;

export default countSlice.reducer;