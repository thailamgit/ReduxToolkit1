import { createSlice, PayloadAction} from '@reduxjs/toolkit'

interface ArrayState {
    arr: number[]
}

const initialState: ArrayState = ({
    arr: []
})

const arraySlice = createSlice({
    name: 'array',
    initialState,
    reducers: {
        addArray: (state) => {
            state.arr.push(state.arr.length)
        },
        removeArray: (state) => {
            state.arr.push
        }
    }
})
export const {addArray, removeArray} = arraySlice.actions
export default arraySlice.reducer