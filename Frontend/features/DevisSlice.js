import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import {DevisService} from "../Services/DevisServices"

export const createDeviS = createAsyncThunk(
  "Devis/createDeviS",
  async (Devis, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
    const res= await DevisService.addDeviS(Devis);
    return res.data
  }
  catch (error) {
    return rejectWithValue(error.message);
  }
  }
);
export const getDevis = createAsyncThunk(
    "Devis/getDevis",
    async (_, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const res = await DevisService.getAll();
      return res.data;
      }
      catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  export const updateDeviS = createAsyncThunk(
    "Devis/updateDeviS",
    async (Devis,thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try{
      const res = await DevisService.editDevis(Devis);
      return res.data;
    }
    catch (error) {
      return rejectWithValue(error.message);
    }
    });
  
  export const deleteDeviS = createAsyncThunk(
    "Devis/deleteDeviS",
    async (id,thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try{
      await DevisService.deleteDeviS(id);
      return  id ;
    }
    catch (error) {
      return rejectWithValue(error.message);
    }
    });

  export const findDeviSByID = createAsyncThunk(
    "Devis/findDeviSByID",
    async (id,thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try{
      const res = await DevisService.fetchDevisById(id);
      return res.data;
    }
    catch (error) {
      return rejectWithValue(error.message);
    }
    });


export const DevisSlice = createSlice({
  name: 'Devis',
  initialState:{
    devis:[],
    isLoading: false,
    status:null,
  },
  reducers: {},
  
  extraReducers: {
    //get Devis
    [getDevis.pending]:(state,action)=>{
      state.isLoading=true;
      state.status=null;
    },
    [getDevis.fulfilled]: (state, action) => {
      state.isLoading=false;
      state.status = null;
        state.devis=action.payload;
    },
    [getDevis.rejected]: (state, action) => {
      state.isLoading=false;
      state.status=action.payload;
      
    },

    //insertion devis
    [createDeviS.pending]: (state, action) => {
      state.isLoading=true;
      state.status=null;
    },
    [createDeviS.fulfilled]: (state, action) => {
     
      state.devis.push(action.payload);
      state.isLoading=false;
      state.status=null;
    },
    [createDeviS.rejected]: (state, action) => {
      state.isLoading=false;
      state.status=action.payload;
    },
    //Modification devis
    [updateDeviS.fulfilled]: (state, action) => {
      const index = state.devis.findIndex(deviS => deviS._id === action.payload.id);
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    },

    //Delete devis
    [deleteDeviS.pending]: (state, action) => {
      state.isLoading=true;
      state.status=null;    
    },
    [deleteDeviS.fulfilled]: (state, action) => {
      state.isLoading=false;
      state.status=null;    
      state.devis=state.devis.filter((item)=> item._id!==action.payload)
    
    },
    [deleteDeviS.rejected]: (state, action) => {
      state.isLoading=false;
      state.status=action.payload;       
    },
  //Fectch devis
    [findDeviSByID.pending]: (state, action) => {
      state.isLoading = true
      state.status = null
        
      },
    [findDeviSByID.fulfilled]:(state, action) => {
      state.isLoading = false
      state.status = null
   },
   
  }

  }
  
)

export default DevisSlice.reducer;

