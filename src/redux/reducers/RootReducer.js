import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { lockerReducer } from "./locker/lockerReducer";
import { userOrderReducer } from "./userOrder/userOrderReducer";
import { rewardReducer } from "./reward/rewardReducer";
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: "root",
    storage,
    whitelist: ['lockerReducer', 'userOrderReducer', 'rewardReducer'] 
    }

const rootReducers = combineReducers({
    lockerReducer: lockerReducer,
    userOrderReducer: userOrderReducer,
    rewardReducer: rewardReducer
    })

    export default persistReducer(persistConfig, rootReducers)
