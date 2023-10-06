import {Component} from "react";
//props is an object
//props = {personName: "Abhimanyu", age:"24", name: "Karan"}
//props.name = Karan
//props.personName = Abhimanyu
export class Footer extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {brand:"nike", price:"3000"};
        //If you write the handleClick fn. as a normal fn. the below line is mandatory.
        this.handleClick = this.handleClick.bind(this);
        //If you write the handleClick as an arrow fn. the above line is not req.
    }
    handleClick() //Normal fn.
    {
        this.setState({
            brand: "Puma",
            price: "4000"
        });
    }

    // handleClick = () => //arrow fn.
    // {
    //     this.setState({
    //         brand: "Adidas",
    //         price: "5000"
    //     });
    // }
    render()
    {
        return(
            <div>
                <h1>Footer Component</h1>
                <h1>Hi I am {this.props.personName} and my age is {this.props.age} - {this.props.name}</h1>
                {/* <h1>Hi I am {this.props.name} and my age is {this.props.age}</h1> */}
                <h1>I have a {this.state.brand} and its cost is {this.state.price}</h1>
                <button onClick = {this.handleClick}>Change state</button>
            </div>
        )
    }
}
