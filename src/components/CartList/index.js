import React, {Component} from "react";
import {connect} from 'react-redux'
import {CartList} from "../index";
import {increment,decrementAsync} from "../../actions/cart";

class cartList extends Component {
    render() {
        console.log(this.props)
        return (
            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>名称</th>
                    <th>价格</th>
                    <th>数量</th>
                </tr>
                </thead>
                <tbody>
                {this.props.cartList.map(item => {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>
                                <button onClick={()=>this.props.decrementAsync(item.id)}>-</button>
                                {item.count}
                                <button onClick={()=>this.props.increment(item.id)}>+</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>

        )
    }
}

//state 是store.getState()的值
const mapStateToProps = (state) => {
    console.log(state)
    return {
        x: 1,
        cartList: state.cart
    }
}
/*const mapDispatchToProps = (dispatch) => {
    return {
    add: (id)=> dispatch(increment(id)),
    jian: (id)=> dispatch(decrement(id))
    }
}*/
export default connect(mapStateToProps,{increment,decrementAsync})(cartList)
