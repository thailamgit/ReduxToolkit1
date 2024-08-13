import React from "react";
import type { RootState } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { addArray, removeArray } from "./arraySlice";

export function Array() {
    const arr = useSelector((state: RootState) => state.array.arr)
    const dispatch = useDispatch()
    return (
        <div>
            <div>
                <button
                aria-label="Add array" 
                onClick={() => dispatch(addArray())}>
                    Add
                </button>
                <span>{arr}</span>
                <button
                aria-label="Remove array" 
                onClick={() => dispatch(removeArray())}>
                    Remove
                </button>
            </div>
        </div>
    )
}