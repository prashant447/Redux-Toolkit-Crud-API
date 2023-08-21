import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// Action Creator--- Create User
export const createUser = createAsyncThunk("createUser",async(data,{rejectWithValue}) =>{
         
    try{
        const res = await fetch("https://64d8c2df5f9bf5b879ce8929.mockapi.io/crud",{
            method:"POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            body:JSON.stringify(data) 
        })
       
        const result = await res.json()
          return result

        }
        catch (error) {
         return rejectWithValue(error)
    }
})


//Read the Data
   export const readUser = createAsyncThunk("readUser", async({rejectWithValue}) =>{
             

    try {
        const res = await fetch("https://64d8c2df5f9bf5b879ce8929.mockapi.io/crud")
        const result = await res.json()
          
          return result
    } catch (error) {
        return rejectWithValue(error)
    }
  
   })


   //Read the Data
   export const deleteUser = createAsyncThunk("deleteUser", async(id,{rejectWithValue}) =>{


    try {
        const res = await fetch(`https://64d8c2df5f9bf5b879ce8929.mockapi.io/crud/${id}`,{
            method:"DELETE"
        })
        const result = await res.json()
          
          return result
    } catch (error) {
        return rejectWithValue(error)
    }
  
   })

   
   //Update Data
   export const updateData = createAsyncThunk("updateData", async(data,{rejectWithValue}) =>{

    
    try {
        const res = await fetch(`https://64d8c2df5f9bf5b879ce8929.mockapi.io/crud/${data.id}`,{
            method:"PUT",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            body:JSON.stringify(data) 
        })
        const result = await res.json()
    
        return result
          
    } catch (error) {
        return rejectWithValue(error)
    }
  
   })

  


const user = {
   users:[],
   isLoading:false,
   isError:false,
   searchUser:[]
}

//   search user





const UserDetails = createSlice({
    name:'userDetails',
    initialState:user,


    reducers:{
        searchUser: (state, action) =>{
            state.searchUser = action.payload
        }
    },  

    extraReducers:  (builder) =>{
         
        // Create User
        builder.addCase(createUser.pending, (state) =>{
            state.isLoading = true
        })

        builder.addCase(createUser.fulfilled, (state, action) =>{
            state.isLoading = false
            state.users.push(action.payload)
        })


        builder.addCase(createUser.rejected, (state, action) =>{
            state.isLoading = false
            state.isError = action.payload.message
        })
  
         
        // Read User
        builder.addCase(readUser.pending, (state) =>{
            state.isLoading = true
        })

        builder.addCase(readUser.fulfilled, (state, action) =>{
            state.isLoading = false
            state.users = action.payload
        })


        builder.addCase(readUser.rejected, (state, action) =>{
            state.isLoading = false
            state.isError = action.payload
        })


        
        
        // Delete Uaer
        builder.addCase(deleteUser.pending, (state) =>{
            state.isLoading = true
        })

        builder.addCase(deleteUser.fulfilled, (state, action) =>{
            state.isLoading = false
            const {id} = action.payload

            if (id) {
                
                state.users = state.users.filter((item) => item.id !== id)
            }
        })


        builder.addCase(deleteUser.rejected, (state, action) =>{
            state.isLoading = false
            state.isError = action.payload
        })

         // Update user
         builder.addCase(updateData.pending, (state) =>{
            state.isLoading = true
        })

        builder.addCase(updateData.fulfilled, (state, action) =>{
            state.isLoading = false
           state.users = state.users.map((item) =>(
                item.id === action.payload.id ? action.payload : item
            ))
        })


        builder.addCase(updateData.rejected, (state, action) =>{
            state.isLoading = false
            state.isError = action.payload.message
        })
      }
    
})


export default UserDetails.reducer
export const {searchUser} = UserDetails.actions