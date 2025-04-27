import { useCallback, useEffect, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [noAllowed, setNoAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("123456789");

  const generateNewPassword = useCallback(() => {
    setPassword("");
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    noAllowed ? (str += "0123456789") : "";
    charAllowed ? (str += "!@#$%^&*()_+[]{}|;:,.<>?'") : "";
    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    console.log("🚀 ~ generateNewPassword ~ pass:", pass);
    setPassword(pass);
  }, [length, noAllowed, charAllowed, setPassword]);

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  useEffect(() => {
    generateNewPassword();
  }, [length, noAllowed, charAllowed, generateNewPassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-500 ">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white"
            placeholder="password"
            readOnly
          />
          <button
            className="cursor-pointer md:cursor-auto bg-sky-500 text-white px-2 active:bg-sky-700"
            onClick={() => copyToClipboard(password)}
          >
            Copy
          </button>
        </div>
        <div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(event) => setLength(event.target.value)}
              />
              <label>Length: {length}</label>
            </div>
            <div className="flex item-center gap-x-1">
              <input
                type="checkbox"
                defaultValue={noAllowed}
                id="numberInput"
                onChange={() => setNoAllowed((prev) => !prev)}
              />
              <label>Number</label>
            </div>
            <div className="flex item-center gap-x-1">
              <input
                type="checkbox"
                defaultValue={charAllowed}
                id="numberInput"
                onChange={() => setCharAllowed((prev) => !prev)}
              />
              <label>Special Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
