import React from 'react'
import axios from 'axios'
class SendingData extends React.Component{
	constructor(){
		super();
		this.state={
			username:"",
			password:""
		}
	}
	handleChange=(e)=>{
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	handleClick=()=>{
		console.log(this.state.username,this.state.password)
		axios.post("http://localhost:2003/register",
			{email:this.state.username,
			password:this.state.password})

		this.setState({
			username:"",
			password:""
		})
	}
	render(){
		return(
			<div>
			<p><input
			value={this.state.username}
			palceholder="Enter username"
			onChange={this.handleChange}
			name="username"/></p>
			<p><input
			value={this.state.password}
			palceholder="Enter password"
			onChange={this.handleChange}
			name="password"/></p>
			<button onClick={this.handleClick}>send</button>
			</div>
			)
	}
}
export default SendingData