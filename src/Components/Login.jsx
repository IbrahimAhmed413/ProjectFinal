import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Login.css"; // Importing the CSS file
export function Login() {
  const [UserName, setUserName] = useState();
  const [Password, setPassword] = useState();

  const navigate = useNavigate();
  function HandleLogin(e){
    e.preventDefault();
    const CorrectUsername = 'ibrahim';
    const CorrectPassword = 'chalog';

    if(UserName === CorrectUsername && Password === CorrectPassword){

        navigate('/UserTable');
    }
    else{
        console.log('Write valid Username or Password');
    }
  }
  return (
    <>
      <form onSubmit={HandleLogin}>
        <input
          type="text"
          placeholder="Username"
          id="LoginInput"
          onChange={(e)=> setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          id="LoginInput"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">LogIn </button>
      </form>
    </>
  );
}
