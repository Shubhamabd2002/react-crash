import ReactJson from "react-json-view";
import { parse } from "acorn";

import { useCallback, useContext, useEffect, useState } from "react";
import DataContext from "../../Context/context";

const JSONViewer = () => {
  const { data } = useContext(DataContext);
  const [astData, setAstData] = useState<unknown>();
  const [terminalError, setTerminalError] = useState<unknown>();
  const getJsonParseData = useCallback(() => {
    if (data.length) {
      try {
        const ast = parse(data, {
          ecmaVersion: "latest",
        });
        setAstData(ast);
        setTerminalError('');
      } catch (error) {
        setTerminalError(error);
        console.log("🚀 ~ getJsonParseData ~ error:", error);
      }
    }
  }, [data]);

  useEffect(() => {
    getJsonParseData();
  }, [getJsonParseData, data]);

  return (
    <div>
      <div className="h-svh overflow-auto bg-gray-100 p-4">
        {terminalError ? (
          <pre className="text-red-600">{String(terminalError)}</pre>
        ) : (
          <ReactJson
            src={astData ? astData : ""}
            collapsed={1}
            name={false}
            enableClipboard={true}
          />
        )}
      </div>
    </div>
  );
};

export default JSONViewer;
