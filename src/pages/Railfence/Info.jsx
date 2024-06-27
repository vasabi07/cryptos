/* eslint-disable react/no-unescaped-entities */


const Info = () => {
    return (
      <div className="w-full h-[55vh] text-secondaryText bg-lightBackground flex flex-col p-4 gap-4 overflow-y-auto">
        <section>
          <h2 className="text-2xl font-bold mb-2">What is the Rail Fence Cipher?</h2>
          <p className="text-lg">
            The Rail Fence Cipher is a form of transposition cipher where the plaintext is written in a zigzag pattern (or rail pattern) across multiple "rails" or lines, then read off line by line to create the ciphertext.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-2">How Does the Rail Fence Cipher Work?</h2>
          <p className="text-lg">
            In a Rail Fence Cipher, the plaintext is written diagonally in a zigzag pattern across multiple lines (rails), then read off horizontally line by line. The number of rails is a key to the cipher. The message can be encrypted by writing it out in a zigzag pattern and then concatenating the letters from each line.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-2">Example of Rail Fence Cipher</h2>
          <p className="text-lg">
            Let's encrypt the message "HELLO WORLD" using a Rail Fence Cipher with 3 rails:
          </p>
          <div className="bg-secondaryText text-darkBackground p-4 rounded-md mb-4">
            <p className="text-lg font-bold">Plaintext: HELLO WORLD</p>
            <p className="text-lg font-bold">Rails: 3</p>
            <p className="text-lg">Step 1: Write the message in a zigzag pattern across the rails.</p>
            <pre className="text-lg whitespace-pre-wrap">
  H . . . O . . . R . .
  . E . L . W . L . D .
  . . L . . . O . . . .
            </pre>
            <p className="text-lg">Step 2: Read each rail line by line to get the ciphertext.</p>
            <pre className="text-lg whitespace-pre-wrap">
  Ciphertext: HOR ELWLD LOO
            </pre>
          </div>
          <p className="text-lg">
            In this example, the plaintext "HELLO WORLD" is written in a zigzag pattern across 3 rails, resulting in the ciphertext "HOR ELWLD LOO".
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-2">When and Why Was It Used?</h2>
          <p className="text-lg">
            The Rail Fence Cipher is a simple yet effective method of encryption used historically for sending hidden messages. It is primarily educational today but helps in understanding more complex transposition ciphers.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-2">Famous Facts About the Rail Fence Cipher</h2>
          <ul className="list-disc list-inside text-lg">
            <li>The Rail Fence Cipher gets its name from the way it arranges text in a zigzag pattern, resembling a rail fence.</li>
            <li>It is considered one of the simplest forms of transposition ciphers.</li>
            <li>The Rail Fence Cipher is often used as an introductory example in cryptography education.</li>
          </ul>
        </section>
      </div>
    );
  };
  
  export default Info;
  