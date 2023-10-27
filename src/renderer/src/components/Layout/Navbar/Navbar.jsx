// import './navbar.css'

import { Button } from "antd";
import { ipcRenderer } from "electron";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center w-full">
      <span className="py-4 px-4 text-2xl font-semibold text-orange-500">
        Lotus
      </span>
      <Button id="button-test" onClick={() => {
        // ipcRenderer.send('test', 'test')
      }}>Test</Button>
    </div>
  );
}
