import React, { useContext, useState } from "react";
import "./LoginPop.css";
import { RxCross2 } from "react-icons/rx";
import { StoreContext } from "../../Contex/StoreContex";
import axios from "axios"

const LoginPopUp = ({ setshowLogin }) => {

  const {url,setToken} =useContext(StoreContext)
  const [currentstate, setcurrentState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const onLogin = async(event)=>{
event.preventDefault()
let newUrl = url;
if(currentstate ==="Login"){
  newUrl += "/api/user/login"
}
else{
  newUrl += "/api/user/register"
}

const response = await axios.post(newUrl,data);
if(response.data.success){
setToken(response.data.token);
localStorage.setItem("token",response.data.token)
setshowLogin(false)
}
else{
  alert(response.data.message)
}


  }
  
  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-tittle">
          <h2>{currentstate}</h2>
          <RxCross2 onClick={() => setshowLogin(false)} />
        </div>
        <div className="login-popup-input">
          {currentstate === "Login" ? (
            <></>
          ) : (
            <input
              name="name"
             onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your Name"
              required
            />
          )}

          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            required
          />
          <input
            name="password"
            value={data.password}
            onChange={onChangeHandler}
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button  type="submit">
          {currentstate === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {currentstate === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={()=>setcurrentState("Sign Up")} >Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span  onClick={()=>setcurrentState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
