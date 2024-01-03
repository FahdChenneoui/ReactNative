import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import {ClientService} from "../Services/ClientServices"
import axios from "axios"

export const createClient = createAsyncThunk(
  "Clients/createClient",
  async (Clients, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
    const res= await ClientService.addClient(Clients);
    return res.data
  }
  catch (error) {
    return rejectWithValue(error.message);
  }
  }
);

export const getClients = createAsyncThunk(
    "Clients/getClients",
    async (_, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
    const res = await ClientService.fetchClients();
        return res.data;
   /* axios.get(`http://10.20.30.87:3006/clients`)
    .then((resJson) => {return (resJson.data) })
    .catch(console.error)
      }*/
    }
      catch (error) {
        return rejectWithValue(error.message);
      }
    
    })
  
  
  export const updateClient = createAsyncThunk(
    "Clients/updateClient",
    async (Clients,thunkAPI) => {
      console.log(Clients)
      const { rejectWithValue } = thunkAPI;
      try{
      const res = await ClientService.editClient(Clients);
      return res.data;
    }
    catch (error) {
      return rejectWithValue(error.message);
    }
    });
  
  export const deleteClient = createAsyncThunk(
    "Clients/deleteClient",
    async (id,thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try{
      await ClientService.deleteClient(id);
      return  id ;
    }
    catch (error) {
      return rejectWithValue(error.message);
    }
    });

  export const findClientByID = createAsyncThunk(
    "Clients/findClientByID",
    async (id,thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try{
      const res = await ClientService.fetchClientsById(id);
      return res.data;
    }
    catch (error) {
      return rejectWithValue(error.message);
    }
    });


export const ClientsSlice = createSlice({
  name: 'client',
  initialState:{
    clients:[],
    isLoading: false,
    status:null,
    success:null,
    error:null,
  },

  reducers: {
    removeSelectedClients: (state) => {  
   
      state.success=null
      state.error=null
  
      
    }
  },

  
  extraReducers: {
    //get clients
    [getClients.pending]:(state,action)=>{
      state.isLoading=true;
      state.status=null;
    },
    [getClients.fulfilled]: (state, action) => {
      state.isLoading=false;
      state.status = null;
      state.clients=action.payload;
      
    },
    [getClients.rejected]: (state, action) => {
      state.isLoading=false;
      state.status=action.payload;
      
    },

    //insertion client
    [createClient.pending]: (state, action) => {
      state.isLoading=true;
      state.status=null;
    },
    [createClient.fulfilled]: (state, action) => {
     
      state.clients.push(action.payload);
      state.isLoading=false;
      state.status=null;
      state.error=null;
      state.success=action.payload;

    },
    [createClient.rejected]: (state, action) => {
      state.isLoading=false;
      state.status=action.payload;
      state.error=action.payload;
      state.success=null;

    },
    //Modification client
    [updateClient.fulfilled]: (state, action) => {
      state.clients = state.clients.map((item) =>
      item._id === action.payload._id ? action.payload : item
    );     },

    //Delete client
    [deleteClient.pending]: (state, action) => {
      state.isLoading=true;
      state.status=null;    
    },
    [deleteClient.fulfilled]: (state, action) => {
      state.isLoading=false;
      state.status=null;    
      state.clients=state.clients.filter((item)=> item._id!==action.payload)
    
    },
    [deleteClient.rejected]: (state, action) => {
      state.isLoading=false;
      state.status=action.payload;       
    },
  //Fetch client
    [findClientByID.pending]: (state, action) => {
      state.isLoading = true
      state.status = null
        
      },
    [findClientByID.fulfilled]:(state, action) => {
      state.isLoading = false
      state.status = null
   },
   
  }

  }
  
)
export const { removeSelectedClients } = ClientsSlice.actions

export default ClientsSlice.reducer;

