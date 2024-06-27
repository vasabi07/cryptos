/* eslint-disable react/no-unescaped-entities */
const Info = () => {
    return (
      <div className="w-full h-[55vh] text-secondaryText bg-lightBackground flex flex-col p-4 gap-4 overflow-y-auto">
        <section>
          <h2 className="text-2xl font-bold mb-2">What is the Vigenère Cipher?</h2>
          <p className="text-lg">
            The Vigenère Cipher is a method of encrypting alphabetic text by using a simple form of polyalphabetic substitution. It employs a keyword, where each letter of the keyword shifts the corresponding letter of the plaintext.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-2">How Does the Vigenère Cipher Work?</h2>
          <p className="text-lg">
            The Vigenère Cipher uses a keyword to determine the shift for each letter in the plaintext. Each letter of the keyword refers to a shift value, where 'A' means no shift, 'B' means a shift of 1, 'C' means a shift of 2, and so on. The keyword is repeated to match the length of the plaintext, and each letter in the plaintext is shifted according to the corresponding letter in the keyword.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-2">Example of Vigenère Cipher</h2>
          <p className="text-lg">
            Let's encrypt the message "HELLO" using the keyword "KEY":
          </p>
          <div className="bg-secondaryText text-darkBackground p-4 rounded-md mb-4">
            <p className="text-lg font-bold">Plaintext: HELLO</p>
            <p className="text-lg font-bold">Keyword: KEY</p>
            <p className="text-lg">Step 1: Repeat the keyword to match the length of the plaintext.</p>
            <pre className="text-lg whitespace-pre-wrap">
  Plaintext:  H E L L O
  Keyword:    K E Y K E
            </pre>
            <p className="text-lg">Step 2: Shift each letter of the plaintext by the corresponding letter of the keyword.</p>
            <pre className="text-lg whitespace-pre-wrap">
  H (7) + K (10) = R (17)
  E (4) + E (4) = I (8)
  L (11) + Y (24) = J (9)
  L (11) + K (10) = V (21)
  O (14) + E (4) = S (18)
            </pre>
            <p className="text-lg">Ciphertext: RIJVS</p>
          </div>
          <p className="text-lg">
            In this example, the plaintext "HELLO" is encrypted using the keyword "KEY", resulting in the ciphertext "RIJVS".
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-2">When and Why Was It Used?</h2>
          <p className="text-lg">
            The Vigenère Cipher was first described in 1553 by Giovan Battista Bellaso, but it was later misattributed to Blaise de Vigenère in the 19th century. It was used for secure communication because it resisted frequency analysis better than simpler ciphers.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-2">Famous Facts About the Vigenère Cipher</h2>
          <ul className="list-disc list-inside text-lg">
            <li>It was once considered unbreakable and earned the nickname "le chiffre indéchiffrable" (the indecipherable cipher).</li>
            <li>It remained secure until the 19th century when Charles Babbage and Friedrich Kasiski independently broke it.</li>
            <li>The Vigenère Cipher is an example of a polyalphabetic cipher, which uses multiple substitution alphabets to encrypt the message.</li>
          </ul>
        </section>
      </div>
    );
  };
  
  export default Info;
  