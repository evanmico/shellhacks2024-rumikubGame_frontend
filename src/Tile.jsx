import { useState } from "react";
import "./index.css";

function TileButton() {
  return <button className="min-h-16 p-5"></button>;
}

export default function Tile() {
  return (
    <>
      <div className="bg-slate-300 min-h-10 p-3">
        <TileButton />
      </div>
    </>
  );
}
