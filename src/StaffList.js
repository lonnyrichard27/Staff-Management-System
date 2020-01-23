import React from 'react';

class StaffList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            staffList:[],
            staff:'',
            editMode: false
        }
    };

    // getting the value of the input
    onValueChange=(e)=>{
        const staff = e.target.value;
        this.setState({staff})
    };
  
    // removing the item from the array
    removeItem = (props)=> {
        this.state.staffList.splice(props, 1)
        this.setState({staffList: this.state.staffList})
        console.log(this.state.staffList)
    };

    // edit
    editMode = (id) =>{
        this.setState({
           editMode: true 
        })
    }
    onSubmit=(e)=>{
        // prevents the browser from automatically refreshing after a submit action is called
        e.preventDefault();
        const {staffList,staff}=this.state
        this.setState({staffList:[...staffList,staff]})
        this.setState({staff:''})
        console.log(this.state.staffList)
    };

    render(){
        const myStaff=this.state.staffList.map((staff,index)=>(
            <li key={index}>
                {staff}
                <button onClick={()=>this.removeItem(index)}>delete</button>
            </li>
        ))
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>Staff Name:</label>
                    <input
                        type="text"
                        value={this.state.todo}
                        onChange={this.onValueChange}
                        className="ml-3"
                    />
                    <button onClick={this.state.staffList.length} className="ml-2">Add</button>
                </form>
                <ol>
                    {myStaff}
                </ol>
            </div>
        )
    };
};

export default StaffList;