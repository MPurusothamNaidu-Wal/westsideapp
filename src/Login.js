function Login(){
    function loginFun(){
        alert("Logged-in")
    }
    return(
        <div>
        <input type="text" name="username" placeholder="username" /> <br />
        <input type="password" name="password" placeholder="password" /> <br />
        <button onClick={loginFun}>Login</button>
        </div>
    )
}
export default Login;