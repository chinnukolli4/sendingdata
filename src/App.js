//import SendingData from './SendingData'
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement} from './actions'
function App(){
 const count=useSelector(state=>state.counter)
 const dispatch=useDispatch()
  return(
    <div style={{textAlign:"center"}}>
    <h1>{count}</h1>
    <button onClick={()=>dispatch(decrement())}>-</button>
    <button onClick={()=>dispatch(increment())}>+</button>
    </div>
    )
}
export default App