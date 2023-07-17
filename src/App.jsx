import {Link, NavLink, Route, Routes, useLocation} from "react-router-dom";
import {Home} from "./pages/Home.jsx"
import {BookList} from "./pages/BookList.jsx"
import {Book} from "./pages/Book.jsx"
import {NewBook} from "./pages/NewBook.jsx";
import {NotFound} from "./pages/NotFound.jsx";
import {BookLayout} from "./pages/BookLayout";
import {BookRoutes} from "./BookRoutes";

export default function App(){
    const localtion = useLocation()
    return (
        <>
            {/*使用location設定此路由將會在所有路由上顯示*/}
            <Routes location="/books">
                {/*也會渲染此路由，可以用在做側邊欄的時候*/}
                <Route path="/books" element={<h1>This is Context</h1>} />
            </Routes>
            <nav>
                <ul>
                    {/*Link的replace會將當前頁面從歷史紀錄中刪除，用在登陸後導到其他路線且不希望使用者返回*/}
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/books">BookList</Link></li>
                    <li>
                        {/*NavLink可設定style,class，如果使用css設定樣式時，不希望子路由同時具備父路由的屬性，可以添加end屬性*/}
                        {/*<NavLink></NavLink>*/}
                    </li>
                </ul>
            </nav>

            <h1>{localtion.state}</h1>

            {/*也可以使用useRoutes來定義*/}
            <Routes>
                <Route path="/" element={<Home />} />

                {/*使用千套路由取代就路由*/}
                {/*父路由的element代表當路由含有books時都會渲染此組建*/}
                {/*<Route path="/books" element={<BookLayout />}>*/}
                {/*    /!*使用index匹配父級，index 返回bool type *!/*/}
                {/*    /!*<Route index element={<BookList />} />*!/*/}
                {/*    /!*<Route path=":id" element={<Book />} />*!/*/}
                {/*    /!*<Route path="new" element={<NewBook />} />*!/*/}
                {/*</Route>*/}

                {/*使用組建重構，匹配韓books路由的全部*/}
                <Route path="/books/*" element={<BookRoutes />}/>

                {/*<Route path="/books" element={<BookList /> } />*/}
                {/*<Route path="/books/:id" element={<Book />}/>*/}
                {/*<Route path="/books/new" element={<NewBook /> } />*/}
                {/*使用*匹配任意路由，當沒有以上設定的路由會跳轉到404頁面 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}