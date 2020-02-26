import actionType from "./actionType";

export const increment = (id)=> {
    return {
        type: actionType.CART_MOUNT_INCREMENT,
        payload:{
            id
        }
    }
}
//异步处理action
export const decrementAsync = (id)=> {
    return (dispatch)=>{
      return setTimeout(()=>{
            dispatch({
                type: actionType.CART_MOUNT_DECREMENT,
                payload:{
                    id
                }})
        },1000)
    }
}

