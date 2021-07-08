import {connect} from 'react-redux'
import './App.css';
import {inc} from "./redux/actions"

const mapStateToProps = state => {
  return {count: state.count}
}

const mapDispatchToProps = {
  inc
}

function App(props) {
  console.log(props)
  return (
    <div className="App">
    <h1>Counter</h1>
    {props.count}
    <br />
    <button onClick={()=> props.inc()}>UP</button>
    {/* <button onClick={()=> props.dispatch({type: "DEC"})}>DOWN</button>
    <button onClick={()=> props.dispatch({type: "RESET"})}>RESET</button> */}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
