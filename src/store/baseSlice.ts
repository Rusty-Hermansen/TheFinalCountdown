import { bindActionCreators, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { 
  getAllThings, 
  getThingById, 
  addThing, 
  deleteThing, 
  updateThing 
} from '../Services/apiService'

import { AppDispatch } from '.'

export const getAllTheThings = createAsyncThunk(
  "thing/getAllTheThings", 
  async (_arg, ThunkAPI) => {
    const thingList = await getAllThings()
    return thingList
  }
);

export const getTheThingByID = createAsyncThunk(
"thing/getThingById",
async(id: number, ThunkAPI)=>{
  const thing = await getThingById(id)
  return thing;
}
);

export const createThing = createAsyncThunk(
  "thing/createThing", async( thing: ThingModel, ThunkAPI) =>{
    const newThing = addThing(thing);
  }
);

export const updateTheThing = createAsyncThunk(
"thing/updateTheThing",
async (thing: ThingModel, ThunkAPI)=>{
  await updateThing(thing);
}
);

export const deleteTheThing = createAsyncThunk(
  "thing/deletTheThing",
  async( id: number, ThunkAPI) => {
    await deleteThing(id);
  }
)

interface ThingState {
  selectedThing?: ThingModel
  thingList: Thing[]
}

const initialThingState: ThingState = {
  selectedThing: undefined,
  thingList: []
}

export const baseSlice = createSlice({
  name: 'thing',
  initialState: initialThingState,
  reducers: {
     setCurrentThing(state, action){
       state.selectedThing = action.payload.currentThing;
     },
     setThingList(state, action){
       state.thingList - bindActionCreators.payload.thingList
     }
    },
    extraReducers: (builder) => {
      builder.addCase(getAllTheThings.fulfilled, (state, action) =>{
state.thingList = action.payload;
      });
      builder.addCase(getTheThingByID.fulfilled, (state, action) => {
        state.selectedThing = action.payload;
      })

    
    
    
  },
})

// Action creators are generated for each case reducer function
export const thingActions = baseSlice.actions

export default baseSlice.reducer