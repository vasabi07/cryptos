
const Info = () => {
    return (
      <div className="w-full h-[55vh] text-secondaryText bg-lightBackground flex flex-col p-4 gap-4 overflow-y-auto">
        <section>
          <h2 className="text-2xl font-bold mb-2">What is the ROT13 Cipher?</h2>
          <p className="text-lg">
            The ROT13 Cipher is a simple substitution cipher used in the Caesar Cipher family. It is a specific case of the Caesar Cipher where the shift is 13 places. The ROT13 Cipher is unique in that it is reciprocal; applying the cipher twice returns the original text.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-2">How Does the ROT13 Cipher Work?</h2>
          <p className="text-lg">
            The ROT13 Cipher works by shifting each letter in the plaintext by 13 places in the alphabet. Since the alphabet has 26 letters, this means that the same algorithm can be used for both encryption and decryption.
          </p>
          <pre className="text-lg whitespace-pre-wrap">
    A ↔ N
    B ↔ O
    C ↔ P
    D ↔ Q
    E ↔ R
    F ↔ S
    G ↔ T
    H ↔ U
    I ↔ V
    J ↔ W
    K ↔ X
    L ↔ Y
    M ↔ Z
    N ↔ A
    O ↔ B
    P ↔ C
    Q ↔ D
    R ↔ E
    S ↔ F
    T ↔ G
    U ↔ H
    V ↔ I
    W ↔ J
    X ↔ K
    Y ↔ L
    Z ↔ M
          </pre>
          <p className="text-lg">
            For example, the letter 'A' is replaced with 'N', 'B' with 'O', and so on.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-2">Example of ROT13 Cipher</h2>
          <p className="text-lg">
            Let's encrypt the message "HELLO" using the ROT13 Cipher:
          </p>
          <div className="bg-secondaryText text-darkBackground p-4 rounded-md mb-4">
            <p className="text-lg font-bold">Plaintext: HELLO</p>
            <p className="text-lg">Step 1: Substitute each letter with the letter 13 places after it in the alphabet.</p>
            <pre className="text-lg whitespace-pre-wrap">
  H -> U
  E -> R
  L -> Y
  L -> Y
  O -> B
            </pre>
            <p className="text-lg">Ciphertext: URYYB</p>
          </div>
          <p className="text-lg">
            In this example, the plaintext "HELLO" is encrypted, resulting in the ciphertext "URYYB".
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-2">When and Why Was It Used?</h2>
          <p className="text-lg">
            The ROT13 Cipher has been used in various contexts where a simple obfuscation is needed. It is often used in online forums and email to obscure spoilers, puzzle solutions, and other potentially sensitive information from casual readers.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-2">Famous Facts About the ROT13 Cipher</h2>
          <ul className="list-disc list-inside text-lg">
            <li>ROT13 stands for "rotate by 13 places" and is a specific case of the Caesar Cipher.</li>
            <li>The cipher is reciprocal, meaning applying ROT13 twice returns the original text.</li>
            <li>ROT13 is commonly used in online forums to hide spoilers and answers to puzzles.</li>
            <li>Despite its simplicity, ROT13 provides a quick and effective way to obscure text from casual readers.</li>
          </ul>
        </section>
      </div>
    );
  };
  
  export default Info;
  