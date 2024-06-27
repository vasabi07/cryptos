

const Info = () => {
    return (
      <div className="w-full h-[55vh] text-secondaryText bg-lightBackground flex flex-col p-4 gap-4 overflow-y-auto">
        <section>
          <h2 className="text-2xl font-bold mb-2">What is the Polybius Cipher?</h2>
          <p className="text-lg">
            The Polybius Cipher is a classical cipher that is a type of substitution cipher. It uses a 5x5 grid filled with letters to encrypt the message. Each letter in the plaintext is replaced by its coordinates in the grid. The Polybius Cipher was invented by the ancient Greek historian and scholar Polybius.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-2">How Does the Polybius Cipher Work?</h2>
          <p className="text-lg">
            The Polybius Cipher uses a 5x5 grid filled with letters of the alphabet (combining I and J into one cell). To encrypt a message, each letter is replaced by its coordinates in the grid. The grid typically looks like this:
          </p>
          <pre className="text-lg whitespace-pre-wrap">
    1 2 3 4 5
  1 A B C D E
  2 F G H I/J K
  3 L M N O P
  4 Q R S T U
  5 V W X Y Z
          </pre>
          <p className="text-lg">
            For example, the letter 'A' is located at (1,1), 'B' is at (1,2), and so on. To encrypt a message, you replace each letter with its coordinates.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-2">Example of Polybius Cipher</h2>
          <p className="text-lg">
            Let's encrypt the message "HELLO" using the Polybius Cipher:
          </p>
          <div className="bg-secondaryText text-darkBackground p-4 rounded-md mb-4">
            <p className="text-lg font-bold">Plaintext: HELLO</p>
            <p className="text-lg">Step 1: Locate each letter in the grid and write down its coordinates.</p>
            <pre className="text-lg whitespace-pre-wrap">
  H -> 23
  E -> 15
  L -> 31
  L -> 31
  O -> 34
            </pre>
            <p className="text-lg">Ciphertext: 2315313134</p>
          </div>
          <p className="text-lg">
            In this example, the plaintext "HELLO" is encrypted, resulting in the ciphertext "2315313134".
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-2">When and Why Was It Used?</h2>
          <p className="text-lg">
            The Polybius Cipher was invented by the ancient Greek historian Polybius. It was used for sending secret messages in ancient times. The cipher is simple to use and can be implemented without the need for any special equipment, making it useful for military and strategic communications.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-2">Famous Facts About the Polybius Cipher</h2>
          <ul className="list-disc list-inside text-lg">
            <li>The Polybius Cipher was named after its inventor, Polybius, a Greek historian.</li>
            <li>It is one of the earliest examples of a substitution cipher.</li>
            <li>The Polybius Cipher can be extended to larger grids for more complex encryption.</li>
            <li>It is sometimes referred to as the Polybius Square or Polybius Checkerboard.</li>
          </ul>
        </section>
      </div>
    );
  };
  
  export default Info;
  