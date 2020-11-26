const cstate={
    items:"",
    listitems:[],
    status:false,
    inptstatus:"",
    statusarr:[],
    title:"",
    titlearr:[]
   

}

const reducer=(state=cstate,action)=>{
    if (action.type==='itemShowOnInput'){
        return{
            ...state,
            
            items:action.payload,
            
        }
    }
    if (action.type==='additemtolist'){
        return{
            ...state,
            listitems:[...state.listitems,action.payload],
            statusarr:[...state.statusarr,state.inptstatus],
            titlearr:[...state.titlearr,state.title],
            title:"",
            inptstatus:"",
            items:"",
            status:true
        }
    }
    if(action.type==='dltitm'){
       
        return{
            ...state,
            listitems:action.payload.Litem,
            titlearr:action.payload.title,
            statusarr:action.payload.status
        }
    }
    if(action.type==="statusinput"){
        return{
            ...state,
            inptstatus:action.payload,
        }
    }
    if(action.type==="statustitle"){
        return{
            ...state,
             title:action.payload,
        }
    }

    return state;
}

export default reducer;