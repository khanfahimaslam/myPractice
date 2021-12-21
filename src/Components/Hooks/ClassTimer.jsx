import React,{Component} from "react";

export class ClassTimer extends Component{
    constructor(props){
        super(props);
        this.state={timer:0}
    }
    kuchbhi;
    componentDidMount(){
        this.kuchbhi=setInterval(()=>{
            this.setState((preState)=>({timer:preState.timer + 1}))
        },1000)
    }
    render(){
        return(
            <div>
                <h2>Class Timer:{this.state.timer}</h2>
                <button onClick={()=>clearInterval(this.kuchbhi)}> stop</button>
            </div>
        )
    }
}