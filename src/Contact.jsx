import React,{Component}from "react";
// import "bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import axios from 'axios';
class Contact extends Component{
    constructor()
    {
        super()
        this.state={
            fullName:'',
            username:'',
            email:'',
            address:'',
            phone:''
        }
        this.changeFullName=this.changeFullName.bind(this)
        this.changeUserName=this.changeUserName.bind(this)
        this.changeEmail=this.changeEmail.bind(this)
        this.changeAddress=this.changeAddress.bind(this)
        this.changePhone=this.changePhone.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }
    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }
    changeUserName(event){
        this.setState({
            userName:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changeAddress(event){
        this.setState({
            address:event.target.value
        })
    }
    changePhone(event){
        this.setState({
            phone:event.target.value
    })
        
     }
    onSubmit(event){
        event.preventDefault()
        const registered={
            fullName:this.state.fullName,
            username:this.state.username,
            email:this.state.email,
            address:this.state.address,
            phone:this.state.phone
        }
        axios.post("http://localhost:4000/app/signup",registered)

        .then(response=>console.log(response.data))
        .catch((response)=>console.log("error"));
        window.location="./About"
    }
    render(){
        return( 
            <>
        <div>
        <table>
        <tr><img src="https://previews.123rf.com/images/o0matze0o/o0matze0o1805/o0matze0o180500018/101535114-website-and-internet-contact-us-page-concept-with-hanging-icons-in-front-of-a-silver-background.jpg" class="img-fluid" style={{height:222,
        width:1500}} alt=""/></tr>
  <tr> <h1  style={{ display:'flex',padding:25,marginLeft:300}}>    You are just few steps away !!!</h1></tr>
     
      </table>
      </div>
            <div className="container">
                <div className="form-div">
                    <form onSubmit={this.onSubmit} method="post">
                        <input type="text"
                        placeholder="FullName"
                        onChange={this.changeFullName}
                        value={this.state.fullName}
                         className='form-control form -group'   
                        />
                         {/* <input type="text"
                        placeholder="UserName"
                        onChange={this.changeUserName}
                        value={this.state.userName}
                         className='form-control form -group'   
                        /> */}
                        
                        <select  type="text"
                        placeholder="Hover on it to choose the Package"
                        onChange={this.changeUserName}
                        value={this.state.userName}
                         className='form-control form -group' >
  <option value="Newbie">Newbie</option>
  <option value="Selected rooms">Selected rooms</option>
  <option value="I dont want to spend too much">I dont want to spend too much</option>
  <option value="my house">my house</option>
  <option value="paint">Just paint</option>
  <option value="Clean">Clean the mess</option>
  </select>
                         <input type="email"
                        placeholder="Email"
                        onChange={this.changeEmail}
                        value={this.state.email}
                         className='form-control form -group'   
                        />
                         <input type="text"
                        placeholder="address-PIN_CODE"
                        onChange={this.changeAddress}
                        value={this.state.address}
                         className='form-control form -group'   
                        />
                            <input type="Number"
                        placeholder="Mobile_no"
                        onChange={this.changePhone}
                        value={this.state.phone}
                         className='form-control form -group'   
                        />
                        <input type="submit" className='btn btn-danger  btn-block' value='Submit'/>
                    </form>
                </div>
            </div>
            </>
        )
    }
}
export default Contact;