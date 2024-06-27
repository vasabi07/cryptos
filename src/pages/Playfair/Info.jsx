const Info = () => {
    return (
      <div className="w-full h-[55vh] text-secondaryText bg-lightBackground flex flex-col p-4 gap-4 overflow-y-auto">
        <section>
          <h2 className="text-2xl font-bold mb-2">What is the Playfair Cipher?</h2>
          <p className="text-lg">
            The Playfair Cipher is a manual symmetric encryption technique and was the first literal digraph substitution cipher. It encrypts pairs of letters (digraphs), instead of single letters as in the simple substitution cipher. The Playfair Cipher uses a 5x5 grid to encode the message.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-2">How Does the Playfair Cipher Work?</h2>
          <p className="text-lg">
            The Playfair Cipher uses a 5x5 grid filled with letters of the alphabet (combining I and J into one cell). A keyword is used to populate the grid. The plaintext is divided into pairs of letters, and each pair is encrypted according to the following rules:
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>If both letters are the same or only one letter is left, add an 'X' after the first letter.</li>
            <li>If the letters appear on the same row of the grid, replace them with the letters immediately to their right (wrapping around to the left side if necessary).</li>
            <li>If the letters appear in the same column, replace them with the letters immediately below them (wrapping around to the top if necessary).</li>
            <li>If the letters form a rectangle, replace them with the letters on the same row but at the opposite corners of the rectangle.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-2">Example of Playfair Cipher</h2>
          <p className="text-lg">
            Let's encrypt the message "HELLO WORLD" using the keyword "KEYWORD":
          </p>
          <div className="bg-secondaryText text-darkBackground p-4 rounded-md mb-4">
            <p className="text-lg font-bold">Keyword: KEYWORD</p>
            <p className="text-lg font-bold">Plaintext: HELLO WORLD</p>
            <p className="text-lg">Step 1: Construct the 5x5 grid with the keyword "KEYWORD".</p>
            <pre className="text-lg whitespace-pre-wrap">
  K E Y W O
  R D A B C
  F G H I/J L
  M N P Q S
  T U V X Z
            </pre>
            <p className="text-lg">Step 2: Divide the plaintext into digraphs (pairs of letters).</p>
            <pre className="text-lg whitespace-pre-wrap">
  HE LL OW OR LD
            </pre>
            <p className="text-lg">Step 3: Apply the Playfair rules to each pair.</p>
            <pre className="text-lg whitespace-pre-wrap">
  HE -> CF (H and E form a rectangle)
  LL -> LX (L is duplicated, so add X)
  OW -> AY (O and W form a rectangle)
  OR -> KY (O and R form a rectangle)
  LD -> BC (L and D form a rectangle)
            </pre>
            <p className="text-lg">Ciphertext: CFLXAYKYBC</p>
          </div>
          <p className="text-lg">
            In this example, the plaintext "HELLO WORLD" is encrypted using the keyword "KEYWORD", resulting in the ciphertext "CFLXAYKYBC".
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-2">When and Why Was It Used?</h2>
          <p className="text-lg">
            The Playfair Cipher was invented by Charles Wheatstone in 1854, but it was named after Lord Playfair who promoted its use. It was used by British forces in the Second Boer War and in World War I and II. It was favored because it could be quickly taught and used in the field without requiring any special equipment.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-2">Famous Facts About the Playfair Cipher</h2>
          <ul className="list-disc list-inside text-lg">
            <li>The Playfair Cipher was the first practical digraph substitution cipher.</li>
            <li>It was used extensively by British forces in the late 19th and early 20th centuries.</li>
            <li>The cipher is harder to break than simple substitution ciphers because it encrypts pairs of letters instead of single letters.</li>
          </ul>
        </section>
      </div>
    );
  };
  
  export default Info;
  