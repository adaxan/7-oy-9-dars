import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [
        { id: 1, name: "Ali", age: 18 },
        { id: 2, name: "Vali", age: 20 }
    ]
};

const cartSlice = createSlice({
    name: "students",
    initialState,
    reducers: {
        add: (state, action) => {
            const newStudent = {
                id: state.value.length + 1,
                name: action.payload.name,
                age: action.payload.age
            };
            state.value.push(newStudent);
        },
        remove: (state, action) => {
            state.value = state.value.filter(student => student.id !== action.payload.id);
        },
        clearAll: (state) => {
            state.value = [];
        },
        update: (state, action) => {
            state.value = state.value.map(student => {
                if (student.id === action.payload.id) {
                    return { ...student, ...action.payload }; // Yangilanayotgan talabani yangilang
                }
                return student; // Boshqa talabalar uchun hech narsa o'zgarmas
            });
        }
        
    }
});

export const { add, remove, clearAll, update } = cartSlice.actions;
export default cartSlice.reducer;
