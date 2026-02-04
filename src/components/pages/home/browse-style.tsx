import React from "react";

import { HEADER_FONT } from "@/lib/font";

// import Dressstyle from '../shared/dressstyle'

const BrowseStyle = () => {
  return (
    <div className="mx-auto max-w-7xl rounded-md bg-[#F2F0F1] px-10 py-10">
      <h2
        className={`${HEADER_FONT.className} py-5 text-center text-3xl font-bold`}
      >
        BROWSE BY DRESS STYLE
      </h2>

      <div className="space-y-4">
        <div className="grid grid-cols-[30%_70%] gap-4">
          <div
            style={{
              background: 'url("/images/merchandise/casual.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "full",
              height: "300px",
              borderRadius: "10px",
              border: "1px solid #000",
              position: "relative",
            }}
          >
            <p className="absolute top-[10%] left-5 font-black">Casual</p>
          </div>

          <div
            style={{
              background: 'url("/images/formal.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "full",
              height: "300px",
              borderRadius: "10px",
              border: "1px solid #000",
              position: "relative",
            }}
          >
            <p className="absolute top-[10%] left-5 font-black">Formal</p>
          </div>
        </div>

        <div className="grid grid-cols-[70%_30%] gap-4">
          <div
            style={{
              background: 'url("/images/party.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "full",
              height: "300px",
              borderRadius: "10px",
              border: "1px solid #000",
              position: "relative",
            }}
          >
            <p className="absolute top-[10%] left-5 font-black">Party</p>
          </div>
          <div
            style={{
              background: 'url("/images/gym.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "full",
              height: "300px",
              borderRadius: "10px",
              border: "1px solid #000",
              position: "relative",
            }}
          >
            <p className="absolute top-[10%] left-5 font-black">Gym</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseStyle;
