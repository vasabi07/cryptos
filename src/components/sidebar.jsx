import { Link } from "react-router-dom"
import ciphers from "../data/ciphers"
import { useState } from "react"


const Sidebar = () => {
  const [active,setActive] = useState(null);
  const HandleActiveidx = (id)=>{
    setActive(id);
  }
  
  return (
    <div
    className="w-[320px] bg-darkBackground text-secondaryAccent h-[80vh]  mt-4  font-mono text-3xl">
        <p className="pt-2 pr-2 pl-2">CIPHERS</p>
       <div className="p-3">
       {ciphers.map((cipher,id)=> (
            <Link to={cipher.route} key={id}>
            <p onClick={()=> HandleActiveidx(id)} className={`text-xl ${active===id ? "text-secondaryAccent" : "text-secondaryText"} m-1`} >{cipher.name}</p>
            </Link>
        ))}
       </div>
        </div>
  )
}

export default Sidebar