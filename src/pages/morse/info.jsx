/* eslint-disable react/no-unescaped-entities */
const Info = () => {
  return (
    <div className="w-full h-[55vh] text-secondaryText bg-lightBackground flex flex-col p-4 gap-4 overflow-y-auto">
      <section>
        <h2 className="text-2xl font-bold mb-2">What is Morse Code?</h2>
        <p className="text-lg">
          Morse code is a method used in telecommunication to encode text characters as sequences of two different signal durations, called dots and dashes. It is named after Samuel Morse, one of the inventors of the telegraph.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-2">How Does Morse Code Work?</h2>
        <p className="text-lg">
          Morse code represents each letter of the alphabet, each numeral, and some punctuation as a series of dots (short signals) and dashes (long signals). These sequences are transmitted as sound, light, or visual signals. For example, the letter "A" is represented by ".-" (dot-dash), while the letter "B" is "-..." (dash-dot-dot-dot). 
          Spaces are used to separate letters (short space) and words (longer space).
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-2">When and Why Was It Used?</h2>
        <p className="text-lg">
          Morse code was developed in the early 1830s and 1840s by Samuel Morse and Alfred Vail. It was used extensively in the 19th and early 20th centuries for long-distance communication, especially in maritime communication and early radio transmissions. Its simplicity and effectiveness made it a standard for telegraphy and emergency signals.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-2">Famous Facts About It</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Morse code was a crucial tool during World War II for military communication.</li>
          <li>The most famous Morse code signal is SOS (··· --- ···), used as a distress call.</li>
          <li>Samuel Morse, who co-developed Morse code, was also a renowned painter.</li>
          <li>Morse code is still used today in aviation, amateur radio, and by enthusiasts.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-2">Morse Code Chart</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-secondaryText text-darkBackground border">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Character</th>
                <th className="py-2 px-4 border">Code</th>
                <th className="py-2 px-4 border">Character</th>
                <th className="py-2 px-4 border">Code</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border">A</td>
                <td className="py-2 px-4 border">·-</td>
                <td className="py-2 px-4 border">N</td>
                <td className="py-2 px-4 border">-·</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">B</td>
                <td className="py-2 px-4 border">-···</td>
                <td className="py-2 px-4 border">O</td>
                <td className="py-2 px-4 border">---</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">C</td>
                <td className="py-2 px-4 border">-·-·</td>
                <td className="py-2 px-4 border">P</td>
                <td className="py-2 px-4 border">·--·</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">D</td>
                <td className="py-2 px-4 border">-··</td>
                <td className="py-2 px-4 border">Q</td>
                <td className="py-2 px-4 border">--·-</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">E</td>
                <td className="py-2 px-4 border">·</td>
                <td className="py-2 px-4 border">R</td>
                <td className="py-2 px-4 border">·-·</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">F</td>
                <td className="py-2 px-4 border">··-·</td>
                <td className="py-2 px-4 border">S</td>
                <td className="py-2 px-4 border">···</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">G</td>
                <td className="py-2 px-4 border">--·</td>
                <td className="py-2 px-4 border">T</td>
                <td className="py-2 px-4 border">-</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">H</td>
                <td className="py-2 px-4 border">····</td>
                <td className="py-2 px-4 border">U</td>
                <td className="py-2 px-4 border">··-</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">I</td>
                <td className="py-2 px-4 border">··</td>
                <td className="py-2 px-4 border">V</td>
                <td className="py-2 px-4 border">···-</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">J</td>
                <td className="py-2 px-4 border">·---</td>
                <td className="py-2 px-4 border">W</td>
                <td className="py-2 px-4 border">·--</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">K</td>
                <td className="py-2 px-4 border">-·-</td>
                <td className="py-2 px-4 border">X</td>
                <td className="py-2 px-4 border">-··-</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">L</td>
                <td className="py-2 px-4 border">·-··</td>
                <td className="py-2 px-4 border">Y</td>
                <td className="py-2 px-4 border">-·--</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">M</td>
                <td className="py-2 px-4 border">--</td>
                <td className="py-2 px-4 border">Z</td>
                <td className="py-2 px-4 border">--··</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Info;
