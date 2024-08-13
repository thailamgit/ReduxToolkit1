import { createSlice, PayloadAction} from '@reduxjs/toolkit'

interface ArrayState {
    arr: string[]
}

const initialState: ArrayState = ({
    arr: []
})

const arraySlice = createSlice({
    name: 'array',
    initialState,
    reducers: {
        addArray: (state) => {
            state.arr.push('a')
        },
        removeArray: (state) => {
            state.arr.push
        }
    }
})
export const {addArray, removeArray} = arraySlice.actions
export default arraySlice.reducer