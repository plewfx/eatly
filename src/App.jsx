import { BrowserRouter, Routes, Route } from "react-router-dom"
import ScrollToTop from "./components/layout/ScrollToTop"
import Layout from "./components//layout/Layout"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import RestaurantDetail from "./pages/RestaurantDetail"
import Blog from "./pages/Blog"
import ArticleDetail from "./pages/ArticleDetail"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/eatly/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="menu" element={<Menu />} />
          <Route path='menu/:id' element={<RestaurantDetail />}/>
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<ArticleDetail />} />
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
