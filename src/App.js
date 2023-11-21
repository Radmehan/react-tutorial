import './App.css';
import Navbar from './components/Navbar';
import Textutils from './components/Textutils';

function App() {
  return (
 <>
<Navbar title="textUtils" about='About Us'/>
<Textutils heading="Enter Your Text To Analyze"/>
{/* <Navbar/> */}
 </>
  );
}

export default App;
