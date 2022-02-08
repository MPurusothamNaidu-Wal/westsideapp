import { useState } from "react";
function AuthorPrint(){
    let [author, setAuthor] = useState("  ") 
    let [title,setTitle] = useState("   ");  
    let [body, setBody] = useState("  "); 
    function formPrint(event){
        event.preventDefault();
        let formTag = event.target ;
        let AuthorTag = formTag.author ;
        let TitleTag = formTag.title ;
        let BodyTag = formTag.body ;
        setAuthor(AuthorTag.value)
        setTitle(TitleTag.value);
        setBody(BodyTag.value);
    }
    return(
        <div>
            <p>Author : {author},  title : {title},  Body : {body}</p>
            <form onSubmit={formPrint}>
                Author : <input type="text" name="author" />
                Title : <input type="text" name="title" />
                Body : <input type="text" name="body" />
                <br />
                <button>Add</button>
            </form>
        </div>
    )
}
export default AuthorPrint;