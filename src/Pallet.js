import { useEffect, useState } from "react";

function Pallet() {
  const [color, setColor] = useState(["#FFF", "#FFF", "#FFF", "#FFF", "#FFF"]);
  const [lock, setLock] = useState([false, false, false, false, false]);
  let arrIndex = [0, 1, 2, 3, 4];
  let arrayColor = [];
  // console.log(randomHexColorCode())

  const locked = (i) => {
    const updateLocke = lock.map((value, index) =>
      index === i ? !value : value
    );
    setLock(updateLocke);
  };
  const randomHexColorCode = () => {
    for (let i = 0; i < 5; i++) {
      if (lock[i]) {
        arrayColor.push(color[i]);
      } else {
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        n = "#" + n.slice(0, 6);
        arrayColor.push(n);
      }
    }

    setColor(arrayColor);
  };
  const copyColor = (hexCode) => {
    navigator.clipboard.writeText(hexCode).then(() => {
      alert(`Copied: ${hexCode}`);
    });
  };

  useEffect(() => {
    const handleSpace = (event) => {
      if (event.code === "Space") {
        randomHexColorCode();
      }
    };
    window.addEventListener("keydown", handleSpace);

    return () => {
      window.removeEventListener("keydown", handleSpace);
    };
  }, [lock, color]);

  return (
    <>
      {/* <button autoFocus onClick={randomHexColorCode}></button> */}
      {arrIndex.map((index) => (
        <div
          className="h-screen w-1/5 border flex flex-col justify-end	items-center	pb-60 text-stone-900 font-bold text-[26px] group"
          style={{ backgroundColor: color[index] }}
        >
          <div className="hidden group-hover:block cursor-pointer">
            <i
              class="fa-solid fa-copy"
              onClick={() => copyColor(color[index])}
            ></i>
          </div>
          <div className="pb-6">
            {lock[index] ? (
              <i
                class="fa-solid fa-lock hidden group-hover:inline cursor-pointer"
                onClick={() => locked(index)}
              ></i>
            ) : (
              <i
                class="fa-solid fa-lock-open hidden  group-hover:inline cursor-pointer"
                onClick={() => locked(index)}
              ></i>
            )}
          </div>
          {color[index]}
        </div>
      ))}
    </>
  );
}

export default Pallet;
