import { Routes, Route } from "react-router-dom";
import { Feed } from './pages/Feed';
import { CreatePost } from './pages/CreatePost/index';
import { UpdatePost } from './pages/UpdatePost/index';
import { OnePost } from './pages/OnePost/index';

export function Router() {
  return (
    <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/UpdatePost" element={<UpdatePost />} />
        <Route path="/Post/1" element={<OnePost />} />
    
    </Routes>
  )
}
