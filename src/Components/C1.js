import { Component } from "react";

class C1 extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {role:"Engineer",name:"",bool:""};
    }
    handleClick = () => {
        this.setState({
            role:"Doctor"
        })
    }

    handleChange = (event) => {
        this.setState({
        name: event.target.value //target.value helps to get the entered value from input box.
        })
    }
    handleSignal = () => {
        this.setState({
            bool: !this.state.bool
        })
    }

    render()
    {
        return(
            <div>
                <h1>Props value is {this.props.gift}</h1>
                <h1>State value is {this.state.role}</h1>
                <button onClick={this.handleClick}>Change state</button>
                <input placeholder = "Enter Your Name" onChange = {this.handleChange}/>
                <p>Your Name is: {this.state.name}</p>
                <button onClick={this.handleSignal}>Signal</button>
                {
                (this.state.bool)? //checking the cond.n
                <h1 style = {{color:"green"}}>Go</h1> //if the condn. is true.
                : 
                <h1 style = {{color:"red"}}>Stop</h1> //if the cond. is false.
                }  
                </div>
        )
    }
}
export default C1;
