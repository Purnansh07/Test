// import logo from './logo.svg';
import './App.css';

// import Nav from './Components/Header'; //default import
// import {Header,Nav} from './Components/Header'; //namespace import
// import {Footer} from './Components/Footer'; For Footer.js and Header.js

// import C1 from './Components/C1';
//import C2 from './Components/C2';
// import C4 from './Components/C4';

 //import F1 from './Components/F1';

 //For BS Styling we need to import this 
 // import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
 
//For React Router Dom
// import {HashRouter, Routes, Route} from "react-router-dom";
// import { Home, About } from './Components/F2';
// import Nav from './Components/Nav';
// import Contact from './Components/Contact';
import EmployeeDetails from './Components/EmployeeDetails';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    //  For Header.js and Footer.js 
    //   <div>
    //  <h1>Hello</h1>
    //   <h1>Hi</h1>
    //   <Header name="Purnansh" role="Student"/>
    //   <Nav/>
    //   <Footer personName = "Abhimanyu" age="24" name = "Karan"/>
    //   <Footer personName = "Arjun" age = "26" name = "Krishna"/>
    //   <Footer personName = "Taya" age = "25"/>
    //   <Footer personName = "Vamakshi" age = "21"/>
    //   </div> 
      
      // For C1.js, C2.js, C3.js, C4.js 
     // <div>
      //  <h1>State and props</h1>
	    //  <C1 gift = "watch"/>
      //  <C2/>
      //  <C4/>
      //</div>

      //For F1.js
      // <div>
      //   <F1/>
      // </div>

      //For React Router Dom
    //   <div>
    //     <HashRouter>
    //     <Nav/>
    //     <Routes>
    //       <Route path="/" element={<Home/>} />
    //       <Route path="/about" element={<About/>} />
    //       <Route path = "/contact" element={<Contact/>}/>
    //     </Routes>
    //     </HashRouter>
    // </div>
  //     http://localhost:3000/ = Home
  //     http://localhost:3000/#/about = About
  //     http://localhost:3000/#/contact = Contact
  
  <div>
     <EmployeeDetails/>
  </div>
   );
}
// For Footer.js
// Footer.defaultProps={
//   name: "Not given"
// };
export default App;
