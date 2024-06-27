import { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import Body from "./components/Body";
import { Link, Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Morse from "./pages/morse/morse";
import Transposition from "./pages/transposition/transposition";
import Caeser from "./pages/caeser/Caeser";
import Vigenere from "./pages/vigenere/vigenere";
import Railfence from "./pages/Railfence/Railfence";
import Playfair from "./pages/Playfair/Playfair";
import Polybius from "./pages/polybius/polybius";
import Atbash from "./pages/atbash/Atbash";
import Rot13 from "./pages/rot13/Rot13";

const router =  createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    children: [
      {path:'/', element: <Body/>},
      {path: '/morse',element: <Morse/>},
      {path: '/transposition', element: <Transposition/>},
      {path: '/caeser',element: <Caeser/>},
      {path: '/vigenere', element: <Vigenere/>},
      {path: '/rail-fence',element: <Railfence/>},
      {path: '/playfair', element:<Playfair/>},
      {path: '/polybius',element:<Polybius/>},
      {path:'/atbash',element:<Atbash/>},
      {path:'/rot13',element:<Rot13/>}

    ]
  }
])

function App(){
  return (
    <RouterProvider router={router}/>
  )
}

function AppLayout() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="bg-sidebarBackground h-[100vh] p-4">
      <div className="bg-darkBackground w-full p-2 rounded-md flex justify-between items-center">
        <Link to="/">
        <p
          className={`font-mono text-6xl font-extrabold ${
            isHovered ? "text-secondaryText" : "text-secondaryAccent"
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          CRYPTOS
        </p>
        </Link>
        <p
          className={`font-mono text-6xl font-extrabold ${
            isHovered ? "text-secondaryAccent" : "text-secondaryText"
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          -.-. .-. -.-- .--. - --- ...
        </p>
      </div>
      <div className="flex ">
      <Sidebar/>
      <Outlet/>
      </div>
    </div>
  );
}

export default App;
