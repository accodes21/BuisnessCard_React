import './App.css';
import About from './components/About';
import ImgBox from './components/ImgBox';
import Interests from './components/Interests';
import Social from './components/Social';

function App() {
  return (
   <>
   <main className="card">
    <ImgBox/>
    <About/>
    <Interests/>
    <Social/>
   </main>
   </>
  );
}

export default App;
