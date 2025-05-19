import { useContext } from "react";
import Editor from "@monaco-editor/react";
import DataContext from "../../Context/context";

const CodeEditor = () => {
  const { setData } = useContext(DataContext);
  const handleEditorChange = (value: string | undefined) => {
    if(value?.length) {
      setData(value);
    }
  };

  return (
    <div className="h-full">
      <Editor
        width="100%"
        height="100%"
        defaultLanguage="javascript"
        onChange={handleEditorChange}
        defaultValue={'//write your code here'}
        theme="vs-dark"
        options={{
          scrollBeyondLastLine: false,
          minimap: { enabled: true },
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
