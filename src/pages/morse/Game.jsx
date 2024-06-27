import { useState } from "react";
import { morseToText, textToMorse } from "./Logic";

const Game = () => {
  const [cipherText, setCipherText] = useState("");
  const [decrypted, setDecrypted] = useState("");
  const [text, setText] = useState("");
  const HandleEncryption = () => {
    const response = textToMorse(text);
    setCipherText(response);
    setDecrypted("");
    setText('')
  };

  const HandleDecryption = () => {
    const response = morseToText(cipherText);
    setDecrypted(response);
    setCipherText("");
  };
  return (
    <div className="w-full h-[25vh] text-secondaryText bg-lightBackground flex flex-col justify-center items-center gap-2 ">
      <p className=" font-bold text-3xl ">Try out MorseCode</p>
      <input
        className="p-4 rounded-md bg-inherit placeholder-secondaryText w-[60%] border-secondaryText border-2 "
        type="text"
        placeholder="Enter the text you want to cipher..."
        onChange={(e) => setText(e.target.value)}
      />
      {text && (
        <button
          className=" p-4 bg-darkBackground text-secondaryAccent text-bold text-2xl"
          onClick={HandleEncryption}
        >
          Encrypt
        </button>
      )}
      {cipherText && (
        <div>
          <p className="p-4 text-3xl rounded-md bg-inherit w-[100%] border-secondaryText border-2">
            {cipherText}
          </p>
          <button onClick={HandleDecryption}>Decrypt</button>
        </div>
      )}
      {decrypted && (
        <div>
          <p className="p-4  text-3xl rounded-md bg-inherit w-[100%] border-secondaryText border-2">
            {decrypted}
          </p>
        </div>
      )}
    </div>
  );
};

export default Game;
