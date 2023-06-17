
import { BrowserRouter,Route, Routes} from 'react-router-dom';
import './App.css';
import Feed from './components/Feed';
import SearchResults from './components/SearchResults';
import VideoDetails from './components/VideoDetails';
import { AppContext } from './context/contextApi';
import Header from './components/Header';
function App() {
  return (
    <AppContext>
    <BrowserRouter>
     <div className='flex flex-col h-full'> <Header/> </div>
             <Routes>
              <Route path='/' element={<Feed/>}/>
              <Route path='/searchResult/:searchQuery' element={<SearchResults/>}/>
              <Route path='/video/:id' element={<VideoDetails/>}/>
             </Routes>
    </BrowserRouter>
</AppContext>
  );
}

export default App;
