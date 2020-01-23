import React from 'react';

class Number extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            staffNumber:[],
            numbers:''
        }
    };

    // getting the value of the input
    onValueChange=(e)=>{
        const numbers = e.target.value;
        this.setState({numbers})
    };
  
    // removing the item from the array
    removeItem = (props)=> {
        this.state.staffNumber.splice(props, 1)
        this.setState({staffNumber: this.state.staffNumber})
        console.log(this.state.staffNumber)
    };

    onSubmit=(e)=>{
        // prevents the browser from automatically refreshing after a submit action is called
        e.preventDefault();
        const {staffNumber,numbers}=this.state
        this.setState({staffNumber:[...staffNumber,numbers]})
        this.setState({numbers:''})
        console.log(this.state.staffNumber)
    };

    render(){
        const mystaffNumber=this.state.staffNumber.map((numbers,index)=>(
            <li key={index}>
                {numbers}
                <button onClick={()=>this.removeItem(index)}>delete</button>
            </li>
        ))
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>Number:</label>
                    <input
                        type="number"
                        value={this.state.todo}
                        onChange={this.onValueChange}
                        className="ml-3"
                    />
                    <button onClick={this.state.staffNumber.length} className="ml-2">Add</button>
                </form>
                <ol>
                    {mystaffNumber}
                </ol>
            </div>
        )
    };
};

export default Number;