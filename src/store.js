import { createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import cartReducer from './reducers/index'
export default createStore(cartReducer,applyMiddleware(thunk))
