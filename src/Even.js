function Even() {
    function formSubmit(event) {
        event.preventDefault();
        let formTag = event.target;
        let inputTag = formTag.inputnumber;
        inputTag.value = formTag.inputnumber.value;
        if (inputTag.value % 2 == 0) {

            document.getElementById("H1").textContent = "Even"

        }
        else {
            document.getElementById("H1").textContent = "Odd"
        }
    }
    return (
        <div>
            <h1 id="H1"></h1>
            <form onSubmit={formSubmit} id="form">
                <input type="number" name="inputnumber" placeholder="Enter Value" />
                <button> Even or Odd</button>
            </form>
        </div>
    )
}
export default Even;