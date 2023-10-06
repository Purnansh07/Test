import { Component } from "react";
import C3 from './C3';

class C2 extends Component
{
    constructor()
    {
        super();
        console.log("I am constructor");
        this.state = {brand: "nike",toggle: true};
    }
    static getDerivedStateFromProps()
    {
        console.log("I am getDerivedStateFromProps method");
        return null;
    }
    componentDidMount()
    {
        console.log("I am componentDidMount method.");
    }
    shouldComponentUpdate()
    {
        console.log("I am shouldComponentUpdate");
        return true;
    }
    getSnapshotBeforeUpdate()
    {
        console.log("I am getSnapshotBeforeUpdate");
        return null;
    }
    componentDidUpdate()
    {
        console.log("I am componentDidUpdate method");
    }

    render()
    {
        console.log("I am render method");
        return(
            <div>
                <h1>Lifecycle Methods</h1>
                <p>{this.state.brand}</p>
                <button onClick = {() => {
                    this.setState({brand:"adidas"})
                }
                    }>Click</button>
                    {
                        (this.state.toggle)?<C3/> : null
                    }
                    <button onClick = {() => {
                        this.setState({toggle: false})
                    }
                        }>Unmount</button>
            </div>
        )
    }
}
export default C2;