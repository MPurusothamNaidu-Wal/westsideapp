function Registration(){

    function formSubmit(event){
        event.preventDefault();
    }
    return(
        <form onSubmit={formSubmit}>
            <h1>Registration</h1>
            <input type="text" name="first_name" placeholder="First Name" />
            <br />
            <input type="text" name="last_name" placeholder="Last Name" />
            <br />
            <input type="email" name="email" placeholder="email" />
            <br />
            <input type="text" name="username" placeholder="username" />
            <br />
            <input  type="number" name="age" placeholder="age" />
            <br />
            <button>Submit Form</button>
        </form>

    )
}
export default Registration;