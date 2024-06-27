
const Info = () => {
  return (
    <div className="w-full h-[55vh] text-secondaryText bg-lightBackground flex flex-col p-4 gap-4 overflow-y-auto">
      <section>
        <h2 className="text-2xl font-bold mb-2">What is the Caesar Cipher?</h2>
        <p className="text-lg">
          The Caesar Cipher is one of the simplest and most widely known encryption techniques. It is a substitution cipher where each letter in the plaintext is shifted a certain number of places down or up the alphabet.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-2">How Does the Caesar Cipher Work?</h2>
        <p className="text-lg">
          In a Caesar Cipher, each letter in the plaintext is shifted a fixed number of positions in the alphabet. For example, with a shift of 3, 'A' would become 'D', 'B' would become 'E', and so on. The shift wraps around the alphabet, so 'Z' would become 'C'.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-2">Example of Caesar Cipher</h2>
        <p className="text-lg">
          Let's encrypt the message "HELLO" using a Caesar Cipher with a shift of 3:
        </p>
        <div className="bg-secondaryText text-darkBackground p-4 rounded-md mb-4">
          <p className="text-lg font-bold">Plaintext: HELLO</p>
          <p className="text-lg font-bold">Shift: 3</p>
          <p className="text-lg">Step 1: Map each letter to its shifted position in the alphabet.</p>
          <pre className="text-lg whitespace-pre-wrap">
H -> K
E -> H
L -> O
L -> O
O -> R
          </pre>
          <p className="text-lg">Ciphertext: KHOOR</p>
        </div>
        <p className="text-lg">
          In this example, the plaintext "HELLO" is shifted by 3 positions in the alphabet, resulting in the ciphertext "KHOOR".
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-2">When and Why Was It Used?</h2>
        <p className="text-lg">
          The Caesar Cipher dates back to Julius Caesar, who used it to encrypt military messages. It was effective for its simplicity and was suitable for communication over long distances without the risk of interception.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-2">Famous Facts About the Caesar Cipher</h2>
        <ul className="list-disc list-inside text-lg">
          <li>The Caesar Cipher is a type of substitution cipher where each letter in the plaintext is replaced with a letter some fixed number of positions down the alphabet.</li>
          <li>It is considered a weak encryption method by today's standards due to its vulnerability to frequency analysis.</li>
          <li>The Caesar Cipher is the basis for many more complex encryption techniques and cryptographic algorithms.</li>
        </ul>
      </section>
    </div>
  );
};

export default Info;
