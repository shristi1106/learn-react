import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);

        //create state variable
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: "https://dummy",
            }

        };
        console.log(this.props.name + "child constructor");
    }

    //it will call when component mount into dom
    async componentDidMount() {
        // console.log(this.props.name+"Child component did mount");

         //Api Call
        const data = await fetch("https://api.github.com/users/shristi1106");
        const json = await data.json(); //await return promise

        //update state Variable
        this.setState({
            userInfo: json,
        })
        console.log(json);
    }

    componentDidUpdate() {
       this.timer= setInterval(()=>{
            console.log("setinterval")
        },1000); 

        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
       clearInterval( this.timer); //we need to clear when page changed
        console.log("componentWillUnmount");//when we will go on another page then this will call
    }

    render() {
        // console.log(this.props.name + "child render");
        const { name, avatar_url } = this.state.userInfo;
        return (
            <div className="user-Card">

                <h2>Name:{name}</h2>
                <img src={avatar_url} />
                <h4>Address:Uttar Pradesh</h4>
                <h4>Contact:shristiverma013@gmail</h4>
            </div>
        );
    }
}
export default UserClass;