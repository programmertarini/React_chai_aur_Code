import { useState } from "react";
function App() {
  const [color, setColor] = useState("olive");
  return (
    <div className="App w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-[48px] px-2 inset-x-0">
        <div className="flex flex-wrap justify-center bg-white px-2 py-2 rounded-full gap-[8px]">
          <button
            className="outline-none px-[20px] py-[6px] rounded-full text-white"
            onClick={() => setColor("#3B82F6")}
            style={{ backgroundColor: "#3B82F6" }}
          >
            Electric Blue
          </button>
          <button
            className="outline-none px-[20px] py-[6px] rounded-full text-white"
            onClick={() => setColor("#06B6D4")}
            style={{ backgroundColor: "#06B6D4" }}
          >
            Vibrant Cyan
          </button>
          <button
            className="outline-none px-[20px] py-[6px] rounded-full text-white"
            onClick={() => setColor("#84CC16")}
            style={{ backgroundColor: "#84CC16" }}
          >
            Lime Green
          </button>
          <button
            className="outline-none px-[20px] py-[6px] rounded-full text-white"
            onClick={() => setColor("#EC4899")}
            style={{ backgroundColor: "#EC4899" }}
          >
            Neon Pink
          </button>
          <button
            className="outline-none px-[20px] py-[6px] rounded-full text-white"
            onClick={() => setColor("#A855F7")}
            style={{ backgroundColor: "#A855F7" }}
          >
            Bright Purple
          </button>
          <button
            className="outline-none px-[20px] py-[6px] rounded-full text-white"
            onClick={() => setColor("#F43F5E")}
            style={{ backgroundColor: "#F43F5E" }}
          >
            Hot Red
          </button>
          <button
            className="outline-none px-[20px] py-[6px] rounded-full text-white"
            onClick={() => setColor("#F97316")}
            style={{ backgroundColor: "#F97316" }}
          >
            Orange Flame
          </button>
          <button
            className="outline-none px-[20px] py-[6px] rounded-full text-white"
            onClick={() => setColor("#22D3EE")}
            style={{ backgroundColor: "#22D3EE" }}
          >
            Turquoise
          </button>
          <button
            className="outline-none px-[20px] py-[6px] rounded-full text-white"
            onClick={() => setColor("#D946EF")}
            style={{ backgroundColor: "#D946EF" }}
          >
            Magenta
          </button>
          <button
            className="outline-none px-[20px] py-[6px] rounded-full text-white"
            onClick={() => setColor("#EAB308")}
            style={{ backgroundColor: "#EAB308" }}
          >
            Sunflower Yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
