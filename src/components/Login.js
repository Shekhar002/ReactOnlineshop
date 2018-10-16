import React from  'react';
import * as firebase from 'firebase';
export class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {msg:""};
    }
    add(){
        var userid = this.refs.uid.value;
        var pwd = this.refs.pwd.value;
        var userObject = {"userid":userid,"pwd":pwd};
        var promise =  firebase.database().ref("users/"+userid).set(userObject);
        promise.then(data=>{
            this.setState({msg:'User Added'})
        }).catch(err=>{
            this.setState({msg:'Error in User ID'});
        })
    }
    doLogin(){
        var userid = this.refs.uid.value;
        var pwd = this.refs.pwd.value;
        var user = firebase.database().ref("users/"+userid);
        user.on('value',(snapshot)=>{
            var userObject =snapshot.val();
            if(userObject.pwd==pwd){
                this.setState({msg:"Welcome"+userid});
                this.props.updateLoginStatus(true,userid)
            }
            else{
                this.setState({
                    msg:"Invaid Username or Password"
                })
                this.props.updateLoginStatus(false);
            }
        })
        // if(userid==password){
        //     this.setState({msg:'Welcome'+' '+userid});
        //     this.props.updateLoginStatus(true,userid);
        // }
        // else{
        //     this.setState({msg:"Invalid Username or Password"});
        //     this.props.updateLoginStatus(false);
        // }
    }
    doClear(){
        this.refs.uid.value = "";
        this.refs.pwd.value = "";
        this.setState({msg:""});
    }
    render(){
        return(
            <div>
                <h2 className="alert-info">Login Page</h2>
                <h3 className="alert-success">{this.state.msg}</h3>
                <div className="form-group">
                <label htmlFor="userid">Username :</label>
                <input className="form-control" type="text" id="userid" placeholder="Username" ref="uid"/>
                </div>
                <div className="form-group">
                <label htmlFor="password">Password :</label>
                <input className="form-control" type="password" placeholder="Password" ref="pwd"/>
                </div>
                <div className="form-group">
                 <button type="button" onClick={this.doLogin.bind(this)} className="btn btn-primary">Login</button>&nbsp;
                 <button type="button" className="btn btn-success" onClick={this.add.bind(this)}>Register</button>&nbsp;
                 <button type="button" onClick={this.doClear.bind(this)} className="btn btn-danger">Clear</button>
                </div>  
            </div>
        )
    }
}