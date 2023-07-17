import {useOutletContext, useParams} from "react-router-dom";

export  function Book(){
    //獲取動態路由，解構的對象必需和前面定義動態路由的參數一樣
    const { id } = useParams()
    const obj = useOutletContext()
    return (
        <>
            <h1>Book {id}，Context {obj.hello}</h1>
            {/*<h1>Book {id}</h1>*/}
        </>
    )
}