const Info = () => {
    return (
      <div className="w-full h-[55vh] text-secondaryText bg-lightBackground flex flex-col p-4 gap-4 overflow-y-auto">
        <section>
          <h2 className="text-2xl font-bold mb-2">What is the Atbash Cipher?</h2>
          <p className="text-lg">
            The Atbash Cipher is a classical substitution cipher originally used for the Hebrew alphabet. It is a simple monoalphabetic substitution cipher where each letter of the alphabet is mapped to its reverse. For example, 'A' is substituted with 'Z', 'B' with 'Y', and so on. The Atbash Cipher is one of the simplest and most ancient ciphers.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-2">How Does the Atbash Cipher Work?</h2>
          <p className="text-lg">
            The Atbash Cipher works by reversing the letters of the alphabet. Each letter in the plaintext is substituted with the letter that it maps to in the reversed alphabet. The substitution is as follows:
          </p>
          <pre className="text-lg whitespace-pre-wrap">
    A ↔ Z
    B ↔ Y
    C ↔ X
    D ↔ W
    E ↔ V
    F ↔ U
    G ↔ T
    H ↔ S
    I ↔ R
    J ↔ Q
    K ↔ P
    L ↔ O
    M ↔ N
    N ↔ M
    O ↔ L
    P ↔ K
    Q ↔ J
    R ↔ I
    S ↔ H
    T ↔ G
    U ↔ F
    V ↔ E
    W ↔ D
    X ↔ C
    Y ↔ B
    Z ↔ A
          </pre>
          <p className="text-lg">
            For example, the letter 'A' is replaced with 'Z', 'B' with 'Y', and so on.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-2">Example of Atbash Cipher</h2>
          <p className="text-lg">
            Let's encrypt the message "HELLO" using the Atbash Cipher:
          </p>
          <div className="bg-secondaryText text-darkBackground p-4 rounded-md mb-4">
            <p className="text-lg font-bold">Plaintext: HELLO</p>
            <p className="text-lg">Step 1: Substitute each letter with its reverse in the alphabet.</p>
            <pre className="text-lg whitespace-pre-wrap">
  H -> S
  E -> V
  L -> O
  L -> O
  O -> L
            </pre>
            <p className="text-lg">Ciphertext: SVOOL</p>
          </div>
          <p className="text-lg">
            In this example, the plaintext "HELLO" is encrypted, resulting in the ciphertext "SVOOL".
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-2">When and Why Was It Used?</h2>
          <p className="text-lg">
            The Atbash Cipher was originally used in the Hebrew alphabet and has been used historically for simple substitution encryption. It is notable for its simplicity and the fact that it is a reciprocal cipher, meaning the same algorithm is used for both encryption and decryption.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-2">Famous Facts About the Atbash Cipher</h2>
          <ul className="list-disc list-inside text-lg">
            <li>The Atbash Cipher is one of the oldest known ciphers and dates back to ancient Hebrew scripts.</li>
            <li>It is a simple substitution cipher that can be easily understood and applied without the need for complex tools.</li>
            <li>The cipher is reciprocal, meaning the same process is used for both encoding and decoding messages.</li>
            <li>The Atbash Cipher is often used as a simple example of a substitution cipher in cryptography education.</li>
          </ul>
        </section>
      </div>
    );
  };
  
  export default Info;
  