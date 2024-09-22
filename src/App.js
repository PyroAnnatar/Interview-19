import React, { useEffect, useState } from "react";

const BASE_IMG_URL = "https://picsum.photos/seed/sameimage/300";

function App() {
  return <CustomBlur />;
}

const CustomBlur = () => {
  const [blurify, setBlurify] = useState(0);
  function handleBlurify(e) {
    setBlurify(e.target.value);
  }

  return (
    <div className="flex flex-col gap-4 border-[1px] border-black/25 p-4 rounded-lg bg-white">
      <img
        src={BASE_IMG_URL}
        alt={"blurify this"}
        style={{ filter: `blur(${blurify}px)` }}
      />
      <div className="text-center">
        <p>Blur için kaydırın</p>
        <input
          type="range"
          min={0}
          max={10}
          value={blurify}
          onChange={handleBlurify}
        />
      </div>
    </div>
  );
};

export default App;
