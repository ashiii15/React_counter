import React,{Component} from "react";
class ClasscomponentOne extends Component{
    constructor(props){
        super(props)
        this.state ={
            count : 0,
            value : ""
        }
    }
     clickHandler =()=>{
        this.setState ({
            count : this.state.count + 1
        })
        console.log(this.state);
    }
    componentDidMount(){
        document.title = `clicked ${this.state.count}`
    }
    componentDidUpdate(prevState,currentState){
        if(prevState.count !== currentState.count){
            console.log(`updating document title`);

        }
        document.title = `clicked ${this.state.count}`
    }
    changeValue = (e)=>{
        this.setState ({
            value : e.target.value
        })

    }
    render(){
        return(
            <div>
                <input type="text" value={this.state.value} onChange={this.changeValue}></input>
                <button onClick={this.clickHandler}>click {this.state.count}</button>
            </div>
        )
    }
}
export default ClasscomponentOne