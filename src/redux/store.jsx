import { configureStore } from "@reduxjs/toolkit";
import UserDetails  from "./userDetailsSlice";

const store = configureStore({
    reducer:{
        app:UserDetails
    }
});

export default store