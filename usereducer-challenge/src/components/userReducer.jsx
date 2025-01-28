import React, { useReducer, useState } from 'react'
const initialState = {count:0};
const reducer = (state, action)=>{  
    switch(action.type){
        case "Increment":{
            return {...state,count:state.count+1};
        }
        case "Decrement":{
            return {...state, count:state.count-1};
        }case "reset":{
            return {...state, count:0}
        }case "addByNo":{
            return {...state, count:state.count+action.payload}
        }case "diffByNo":{
            return {...state, count:state.count-action.payload}
        }
        default:
        return state;
    }
}
const userReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [inputValue, setInputValue] = useState(0);
    const handleIncrement = () => {
        dispatch({ type: "Increment" });
        };
        const handleDecrement = () => {
            dispatch({ type: "Decrement" });
            };
        const handleReset = () => {
            dispatch({ type: "reset" });
        };
        const handleAddByNo = () => {
            dispatch({ type: "addByNo", payload: Number(inputValue) });
        };
        const handleDiffByNo = () => {
            dispatch({ type: "diffByNo", payload: +inputValue });
        };
                        
  return (
    <div>
        <h2>Count: {state.count}</h2>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        <div>
        <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={handleAddByNo}>Add By Number</button>
        <button onClick={handleDiffByNo}>Diff By Number</button>
        </div>
        
    </div>
  )
}

export default userReducer