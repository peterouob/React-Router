import {Link, Outlet, useSearchParams} from "react-router-dom";
import {useState} from "react";
//使用input改變url的param
export function BookLayout(){
    //獲得url上的param => ?n=
    const [searchParams,setSearchParams] = useSearchParams({n:3})
    // const [number,setNumber] = useState("")
    // console.log(searchParams.get("n"))
    const number = searchParams.get("n")
    return (
        <>
            <Link to="/books/1">Book1</Link>
            <br/>
            <Link to="/books/2">Book2</Link>
            <br/>
            <Link to="/books/new">New Book</Link>
            <br/>
            <Link to={`/books/${number}`}>Book {number}</Link>
            {/*渲染當前路由組建*/}
            <Outlet context={{hello:"hello world"}}/>
            <input type="number" value={number} onChange={e=>setSearchParams({n:e.target.value})}/>
        </>
    )
}