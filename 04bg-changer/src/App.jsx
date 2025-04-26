import { useState } from "react";
import BgComponent from "./BgComponent";
function App() {
  const [bgColor, setBgColor] = useState("bg-red-500");
  const color = [
    {
      bgColor: "bg-red-500",
      name: "Red",
    },
    {
      bgColor: "bg-green-500",
      name: "Green",
    },
    {
      bgColor: "bg-blue-500",
      name: "Blue",
    },
    {
      bgColor: "bg-yellow-500",
      name: "Yellow",
    },
    {
      bgColor: "bg-purple-500",
      name: "Purple",
    },
    {
      bgColor: "bg-orange-500",
      name: "Orange",
    },
  ];
  function getButton() {
    return color.map((item) => {
      return (
        <button
          className={`${item.bgColor} text-white px-4 py-2 rounded-full`}
          onClick={() => setBgColor(item.bgColor)}
        >
          {item.name}
        </button>
      );
    });
  }

  return (
    <>
      <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2 h-5">
        <div className=" justify-content gap-3 shadow-lg px-3 py-2 rounded-3xl">
          {getButton()}
        </div>
      </div>
      <BgComponent bgColor={bgColor} />
    </>
  );
}

export default App;
