import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import New from './Components/New'
import Diary from './Components/Diary'
import Edit from './Components/Edit'
import NotFound from './Components/NotFound'

function App() {
  const nav = useNavigate()
  const onClickGoPage = (e)=>{
    nav(`/${e.target.value}`)
  }

  return (
    <>
    {/* 여기에 적은내용은 모든페이지가 공통사용 */}
    <h2><Link to={"/"}>Home</Link>||<Link to={"/new"}>New</Link>||<Link to={"/diary"}>Diary</Link>||<Link to={"/edit"}>Edit</Link></h2>
    <h2><a href="/">Home</a>||<a href="/new">New</a>||<a href="/diary">Diary</a>||<a href="/edit">Edit</a></h2>
    <button value="" onClick={onClickGoPage}>Home</button>
    <button value="new" onClick={onClickGoPage}>New</button>
    <button value="diary" onClick={onClickGoPage}>Diary</button>
    <button value="edit" onClick={onClickGoPage}>Edit</button>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new/:id' element={<New />} />
        <Route path='/diary' element={<Diary />} />
        <Route path='/Edit' element={<Edit />} />
        <Route path='*' element={<NotFound />} />

      </Routes>
     
    </>
  )
}

export default App
