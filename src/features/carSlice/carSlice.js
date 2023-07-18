import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: [ "Phantom", "TerraFury", "Raptor", "Apex", "TrailBlazer", "Inferno", "DriveVault"]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars

export default carSlice.reducer