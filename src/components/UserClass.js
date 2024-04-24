import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        
        //create state variable
        this.state = {
           count :0,
           count2: 2,
        };
        console.log(this.props.name+"child constructor");
       }

       //it will call when component mount into dom
        componentDidMount(){
        console.log(this.props.name+"Child component did mount");
       }
       
    render() {
        console.log(this.props.name+"child render");
        const {name} = this.props;
        const{count, count2}=this.state;
        return (
            <div className="user-Card">
                <h1>Count:{count}</h1>
                <h1>Count2:{count2}</h1>
             <h2>Name:{name}</h2>
             <button onClick={()=>{
                //never update STATE directly
                this.setState({
                    count: this.state.count+1, //only update 'count' not 'Count2'
                });
             }}
             >
                Count Increase
                </button>
             <h4>Address:Uttar Pradesh</h4>
             <h4>Contact:shristi@gmail</h4>
            </div>
        );
    }
}
export default UserClass;