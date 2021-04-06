import React from "react";
import MDEditor from '@uiw/react-md-editor';

export default function App() {
  const [value, setValue] = React.useState("**Hello world!!!**");
  return (
    <div className="container">
      <MDEditor
        value={value}
        onChange={setValue}
        highlightEnable= {true}
      />
      <MDEditor.Markdown source={value} />
    </div>
  );
}
