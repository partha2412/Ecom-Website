import { useEffect, useState } from "react";

const OptionBar = ({ setShow }) => {
  const [open, setOpen] = useState(false);

  // Trigger slide-in animation after mount
  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay to block background interactions */}
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => setShow(false)}
      ></div>

      {/* Sliding sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-100 bg-amber-300 border pt-24 p-2 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        <div
          className="absolute z-50 w-12 left-2 top-12 flex flex-col gap-1 bg-amber-100 p-2 border-3 border-amber-400 cursor-pointer"
          onClick={() => setShow(false)}
        >
          <div className="border-2 border-amber-400 w-7"></div>
          <div className="border-2 border-amber-400 w-7"></div>
          <div className="border-2 border-amber-400 w-7"></div>
        </div>

        {/* Sidebar content */}
        <div className="border p-2">
          <h1>Range</h1>
          
        </div>
      </div>
    </div>
  );
};

export default OptionBar;
