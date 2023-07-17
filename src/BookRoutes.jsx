import {Route, Routes} from "react-router-dom";
import {BookList} from "./pages/BookList.jsx";
import {Book} from "./pages/Book.jsx";
import {NewBook} from "./pages/NewBook.jsx";
import {BookLayout} from "./pages/BookLayout";

export function BookRoutes(){
    return(
        <>
            {/*使用此種方式因為沒有出口，所以沒辦法使用上下文*/}
            {/*<BookLayout />*/}
            <Routes>
                <Route element={<BookLayout />}>
                    <Route index element={<BookList />} />
                    <Route path=":id" element={<Book />} />
                    <Route path="new" element={<NewBook />} />
                </Route>
            </Routes>
        </>
    )
}