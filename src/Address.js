import React from 'react';

class Address extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            staffAddress:[],
            addresses:''
        }
    };

    // getting the value of the input
    onValueChange=(e)=>{
        const addresses = e.target.value;
        this.setState({addresses})
    };
  
    // removing the item from the array
    removeItem = (props)=> {
        this.state.staffAddress.splice(props, 1)
        this.setState({staffAddress: this.state.staffAddress})
        console.log(this.state.staffAddress)
    };

    onSubmit=(e)=>{
        // prevents the browser from automatically refreshing after a submit action is called
        e.preventDefault();
        const {staffAddress,addresses}=this.state
        this.setState({staffAddress:[...staffAddress,addresses]})
        this.setState({addresses:''})
        console.log(this.state.staffAddress)
    };

    render(){
        const myStaffAddress=this.state.staffAddress.map((addresses,index)=>(
            <li key={index}>
                {addresses}
                <button onClick={()=>this.removeItem(index)}>delete</button>
            </li>
        ))
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>Address:</label>
                    <input
                        type="text"
                        value={this.state.todo}
                        onChange={this.onValueChange}
                        className="ml-3"
                    />
                    <button onClick={this.state.staffAddress.length} className="ml-2">Add</button>
                </form>
                <ol>
                    {myStaffAddress}
                </ol>
            </div>
        )
    };
};

export default Address;