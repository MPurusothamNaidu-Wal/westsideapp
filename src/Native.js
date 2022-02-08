import { useState } from "react";

function Native(){
    let [city, setCity] = useState("")
    function showCity(event){
        event.preventDefault();
        let formTag = event.target ;
        let inputTagCity = formTag.city ;
        setCity(inputTagCity.value);
    }
    return(
        <div>
            <h1>City : {city}</h1>
            <form onSubmit={showCity}>
            <input type="text" placeholder="Enter City " name="city"/>
            <br />
            <button>Show City in Heading</button>
            </form>
        </div>
    )
}
export default Native;