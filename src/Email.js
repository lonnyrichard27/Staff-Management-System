import React from 'react';

class Email extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            emailList:[],
            emails:''
        }
    };

    // getting the value of the input
    onValueChange=(e)=>{
        const emails = e.target.value;
        this.setState({emails})
    };
  
    // removing the item from the array
    removeItem = (props)=> {
        this.state.emailList.splice(props, 1)
        this.setState({emailList: this.state.emailList})
        console.log(this.state.emailList)
    };

    onSubmit=(e)=>{
        // prevents the browser from automatically refreshing after a submit action is called
        e.preventDefault();
        const {emailList,emails}=this.state
        this.setState({emailList:[...emailList,emails]})
        this.setState({emails:''})
        console.log(this.state.emailList)
    };

    render(){
        const myStaffEmail=this.state.emailList.map((emails,index)=>(
            <li key={index}>
                {emails}
                <button onClick={()=>this.removeItem(index)}>delete</button>
            </li>
        ))
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>Email Address:</label>
                    <input
                        type="email"
                        value={this.state.email}
                        onChange={this.onValueChange}
                        className="ml-3"
                    />
                    <button onClick={this.state.emailList.length} className="ml-2">Add</button>
                </form>
                <ol>
                    {myStaffEmail}
                </ol>
            </div>
        )
    };
};

export default Email;