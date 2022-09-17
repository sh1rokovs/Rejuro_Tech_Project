import {AnyAction, createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

type Car =  {
    id: number;
    img: string
    name: string;
    description: string;
    price: string;
    likes: number
}

type CarState = {
    car: Car[];
    carRent: Car[];
    loading: boolean;
    error: string | null;
}

export const getCars = createAsyncThunk<Car[], undefined, {rejectValue: string}>(
    'cars/getCars',
    async (_, {rejectWithValue}) => {
        const response = await axios.get('http://localhost:5000/api/cars')

        if(response.status !== 200) {
            return rejectWithValue('Server Error!')
        }
        return response.data;
    }
)

export const getRentCars = createAsyncThunk<Car[], undefined, {rejectValue: string}>(
    'cars/getRentCars',
    async (_, {rejectWithValue}) => {
        const response = await axios.get('http://localhost:5000/api/cars_rent')

        if(response.status !== 200) {
            return rejectWithValue('Server Error!')
        }
        return response.data;
    }
)

export const rentCar = createAsyncThunk<string, string, {rejectValue: string}>(
    'cars/rentCars',
    async (id, {rejectWithValue}) => {
        const response = await axios.get(`http://localhost:5000/api/car_rent/${id}`)

        if(response.status !== 200) {
            return rejectWithValue('Server Error!')
        }

        return id;
    }
)

export const backCar = createAsyncThunk<string, string, {rejectValue: string}>(
    'cars/backCars',
    async (id, {rejectWithValue}) => {
        const response = await axios.get(`http://localhost:5000/api/car_back/${id}`)

        if(response.status !== 200) {
            return rejectWithValue('Server Error!')
        }

        return id;
    }
)

const initialState: CarState = {
    car: [],
    carRent: [],
    loading: false,
    error: null,
}

export const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCars.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCars.fulfilled, (state, action) => {
                state.car = action.payload
                state.loading = false;
            })
            .addCase(getRentCars.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getRentCars.fulfilled, (state, action) => {
                state.carRent = action.payload
                state.loading = false;
            })
            .addCase(rentCar.fulfilled, (state, action) => {
                // @ts-ignore
                state.car = state.car.filter(car => car.id !== action.payload)
            })
            .addCase(backCar.fulfilled, (state, action) => {
                // @ts-ignore
                state.carRent = state.carRent.filter(car => car.id !== action.payload)
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.error = action.payload;
                state.loading = false;
            });
    }
})

function isError(action: AnyAction) {
    return action.type.endsWith('rejected');
}