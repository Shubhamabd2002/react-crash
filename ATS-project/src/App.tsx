// import { parse } from '@babel/parser';
import React from "react";
import { DraggleSplitter } from "./DraggableSpliter/DraggableSplitter";
import { header_menue } from "./Constants/HeaderConstants";
import Header from "./Components/HeaderComponent/Header";
import CodeEditor from "./Components/CodeEditor/CodeEditor";
import JSONViewer from "./Components/JSONViewer/JSONViewer";
import ATSDataContext from "./Context/ATSDataContext";

const App = () => {
  return (
    <React.Fragment>
      <div>
        <ATSDataContext>
          <header className="flex bg-gray-800 text-white p-4">
            <Header headerData={header_menue} />
          </header>
          <DraggleSplitter>
            <CodeEditor />
            <JSONViewer />
          </DraggleSplitter>
        </ATSDataContext>
      </div>
    </React.Fragment>
  );
};

export default App;
