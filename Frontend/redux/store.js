import { configureStore } from '@reduxjs/toolkit'
import ClientsReducer from "../features/ClientsSlice"
import BondCReducer from "../features/BonDCSlice"
import articleReducer from "../features/articleSlice"

const reducer = {
  clients: ClientsReducer,
  BondC: BondCReducer,
  articles:articleReducer,

}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;
