import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from 'react-router-dom'
import CompletedTasks from "./Components/CompletedTasks/CompletedTasks";
import ToDo from "./Components/ToDo/ToDo";
import Calender from "./Components/Calender/Calender";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container h-screen mx-auto'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/CompletedTasks' element={<CompletedTasks />} />
          <Route path='/ToDo' element={<ToDo />} />
          <Route path='/Calender' element={<Calender />} />
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
