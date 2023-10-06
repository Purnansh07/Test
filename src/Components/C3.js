import { Component } from "react";

class C3 extends Component
{
    componentWillUnmount()
    {
        console.log("I am componentWillUnmount method.");
    }
    render()
    {
        return(
            <div>
                <h1>C3 components will be removed</h1>
            </div>
        );
    }
}
export default C3;