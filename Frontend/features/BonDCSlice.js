import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import {BondCService} from "../Services/BonDCServices"

export const createBondc = createAsyncThunk(
  "BondC/createBondc",
  async (BondC, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
    const res= await BondCService.addBonDC(BondC);
    return res.data
  }
  catch (error) {
    return rejectWithValue(error.message);
  }
  }
);
export const getBondC = createAsyncThunk(
    "BondC/getBondC",
    async (_, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const res = await BondCService.getAll();
      return res.data;
      }
      catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  export const updateBondc = createAsyncThunk(
    "BondC/updateBondc",
    async (BondC,thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try{
      const res = await BondCService.editBonDC(BondC);
      return res.data;
    }
    catch (error) {
      return rejectWithValue(error.message);
    }
    });
  
  export const deleteBondc = createAsyncThunk(
    "BondC/deleteBondc",
    async (id,thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try{
      await BondCService.deleteBondc(id);
      return  id ;
    }
    catch (error) {
      return rejectWithValue(error.message);
    }
    });

  export const findBondcByID = createAsyncThunk(
    "BondC/findBondcByID",
    async (id,thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try{
      const res = await BondCService.fetchBondcById(id);
      return res.data;
    }
    catch (error) {
      return rejectWithValue(error.message);
    }
    });


export const BondCSlice = createSlice({
  name: 'BondC',
  initialState:{
    bondc:[],
    isLoading: false,
    status:null,
  },
  reducers: {},
  
  extraReducers: {
    //get bondcs
    [getBondC.pending]:(state,action)=>{
      state.isLoading=true;
      state.status=null;
    },
    [getBondC.fulfilled]: (state, action) => {
      state.isLoading=false;
      state.status = null;
        state.bondc=action.payload;
    },
    [getBondC.rejected]: (state, action) => {
      state.isLoading=false;
      state.status=action.payload;
      
    },

    //insertion Bondc
    [createBondc.pending]: (state, action) => {
      state.isLoading=true;
      state.status=null;
    },
    [createBondc.fulfilled]: (state, action) => {
     
      state.bondc.push(action.payload);
      state.isLoading=false;
      state.status=null;
    },
    [createBondc.rejected]: (state, action) => {
      state.isLoading=false;
      state.status=action.payload;
    },
    //Modification Bondc
    [updateBondc.fulfilled]: (state, action) => {
      const index = state.bondc.findIndex(bondC => bondC._id === action.payload.id);
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    },

    //Delete Bondc
    [deleteBondc.pending]: (state, action) => {
      state.isLoading=true;
      state.status=null;    
    },
    [deleteBondc.fulfilled]: (state, action) => {
      state.isLoading=false;
      state.status=null;    
      state.bondc=state.bondc.filter((item)=> item._id!==action.payload)
    
    },
    [deleteBondc.rejected]: (state, action) => {
      state.isLoading=false;
      state.status=action.payload;       
    },
  //Fectch Bondc
    [findBondcByID.pending]: (state, action) => {
      state.isLoading = true
      state.status = null
        
      },
    [findBondcByID.fulfilled]:(state, action) => {
      state.isLoading = false
      state.status = null
   },
   
  }

  }
  
)

export default BondCSlice.reducer;

