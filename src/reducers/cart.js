import actionType from "../actions/actionType";

const initState = [
    {
        id: 1,
        name: '苹果',
        price: 8888,
        count: 10
    },
    {
        id: 2,
        name: '苹果2',
        price: 8888,
        count: 10
    }
]

export default (state = initState, action) => {
    switch (action.type) {
        case actionType.CART_MOUNT_DECREMENT:
            return Object.assign([],state).map(item=>{
                if (item.id === action.payload.id){
                    item.count-=1
                }
                return item

            })
        case actionType.CART_MOUNT_INCREMENT:
            return Object.assign([],state).map(item=>{
                if(item.id === action.payload.id){
                    item.count+=1
                }
                return item
            })
        default:
            return state
    }
}
