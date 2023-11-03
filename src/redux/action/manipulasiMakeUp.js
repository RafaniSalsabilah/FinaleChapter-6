import { createSlice } from "@reduxjs/toolkit";


export const manipulasiMakeUp = createSlice({
    name: 'kotakMakeUp',

    initialState: {
        jumlahmakeup : 10,
        namaBrand : "Lato-lato",
        Penerbit : "Sari Roti",
        listBedak : ["Bedak Tabur" , "Bedak Foundation" , "Bedak Halus"]
    },

    reducers: {
        tambahMakeUp : (state) => {state.jumlahmakeup = state.jumlahmakeup + 1},
        kurangMakeUp : (state) => {state.jumlahmakeup = state.jumlahmakeup - 1},
        gantiBrand: (state, action) => { 
            state.namaBrand = action.payload.namaBrand; 
            state.Penerbit = action.payload.Penerbit; 
        },
        tambahBedak: (state, action) => { 
            state.listBedak.push(action.payload); 
        },
        kurangBedak: (state, action) => {
            const hapusBedak = action.payload
            state.listBedak = state.listBedak.filter((bedak) => bedak !== hapusBedak)
        }
    },
})

export const { tambahMakeUp , kurangMakeUp, gantiBrand, tambahBedak, kurangBedak } = manipulasiMakeUp.actions

export default manipulasiMakeUp.reducer