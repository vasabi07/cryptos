import { useState } from "react"
import { decrypt, encrypt } from "./Logic";


const Game = () => {
  const [text,setText] = useState("");
  const [key,setKey] = useState("");
  const [cipherText, setCipherText] = useState("");
  const [decrypted,setDecrypted] = useState("")
  const HandleEncryption = ()=>{
    const result = encrypt(text,key);
    setCipherText(result)
    setDecrypted("");
  }
  const HandleDecryption = ()=>{
    const result = decrypt(cipherText,key);
    setDecrypted(result);
    setCipherText("");
  }
  return (
    <div className="w-full h-[40vh] text-secondaryText bg-lightBackground flex flex-col justify-center items-center gap-2 ">
      <div className="flex flex-col w-[50%] gap-2" >
        <input type="text" className="p-4 rounded-md bg-inherit placeholder-secondaryText  border-secondaryText border-2 " onChange={(e)=> setText(e.target.value) } placeholder="Enter a text to encrypt" />
        <input type="text" className="p-4 rounded-md bg-inherit placeholder-secondaryText  border-secondaryText border-2 " onChange={(e)=> setKey(e.target.value) } placeholder="Key" />
        <button onClick={HandleEncryption} className=" p-4 bg-darkBackground text-secondaryAccent text-bold text-2xl">Encrypt</button>
        {cipherText && (
        <div className="mt-4">
          <h3 className="text-lg font-bold">Ciphertext:</h3>
          <p className="p-2 bg-gray-100 border border-gray-300 rounded">{cipherText}</p>
        </div>
      )}
      {cipherText && (
        <button
          onClick={HandleDecryption}
          className="bg-green-500 text-white px-4 py-2 rounded mt-4"
        >
          Decrypt
        </button>
      )}
       {decrypted && (
        <div className="mt-4">
          <h3 className="text-lg font-bold">Decrypted Text:</h3>
          <p className="p-2 bg-gray-100 border border-gray-300 rounded">{decrypted}</p>
        </div>
      )}
      </div>
    </div>
  )
}

export default Game