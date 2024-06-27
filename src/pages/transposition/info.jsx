/* eslint-disable react/no-unescaped-entities */


const Info = () => {
  return (
    <div className="w-full h-[55vh] text-secondaryText bg-lightBackground flex flex-col p-4 gap-4 overflow-y-auto">
      <section>
        <h2 className="text-2xl font-bold mb-2">What is the Transposition Cipher?</h2>
        <p className="text-lg">
          The Transposition Cipher is a method of encryption where the positions of characters in the plaintext are shifted according to a regular system to form ciphertext. Unlike substitution ciphers that replace characters, transposition ciphers rearrange them without altering their identities.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-2">How Does the Transposition Cipher Work?</h2>
        <p className="text-lg">
          In a Transposition Cipher, the plaintext characters are reordered based on a specific rule or key before being written down as ciphertext. Common techniques include columnar transposition, where characters are written into a grid and then read out column by column, or rail fence cipher, where characters are written in zigzag fashion across multiple lines.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-2">Example of Transposition Cipher</h2>
        <p className="text-lg">
          Let's encrypt the message "HELLO WORLD" using a simple columnar transposition technique:
        </p>
        <div className="bg-secondaryText text-darkBackground p-4 rounded-md mb-4">
          <p className="text-lg font-bold">Plaintext: HELLO WORLD</p>
          <p className="text-lg font-bold">Key: 3</p>
          <p className="text-lg">Step 1: Write the plaintext into a grid row by row.</p>
          <pre className="text-lg whitespace-pre-wrap">
H E L L O   W O R L D
          </pre>
          <p className="text-lg">Step 2: Read the grid column by column according to the key (3 in this case).</p>
          <pre className="text-lg whitespace-pre-wrap">
H L O   L E   D W O R
          </pre>
          <p className="text-lg">Ciphertext: HLOLE DWOR</p>
        </div>
        <p className="text-lg">
          In this example, the plaintext "HELLO WORLD" is reordered column by column based on the key 3, resulting in the ciphertext "HLOLE DWOR".
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-2">When and Why Was It Used?</h2>
        <p className="text-lg">
          Transposition ciphers have been used historically for military and diplomatic communication. They provide a method of concealing the message structure without altering the actual characters, making them less susceptible to frequency analysis attacks used against substitution ciphers.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-2">Famous Facts About the Transposition Cipher</h2>
        <ul className="list-disc list-inside text-lg">
          <li>During World War II, the German Enigma machine used a combination of substitution and transposition techniques to encrypt messages.</li>
          <li>Transposition ciphers are still used in some basic encryption algorithms and puzzle games.</li>
          <li>The security of a transposition cipher depends on the complexity of the key or rule used to rearrange the characters.</li>
        </ul>
      </section>
    </div>
  );
};

export default Info;
