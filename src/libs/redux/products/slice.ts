import {createSlice} from '@reduxjs/toolkit'

interface BeersProps {
    id: number;
    name: string;
    description: string;
}

const initialState: BeersProps = {
    id:0,
    name:'',
    description:''
}

export const producSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{

    } 
})

export default producSlice.reducer;