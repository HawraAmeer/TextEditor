import { useState } from "react";
import "./App.css";

const styleCss = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" },
};

const styles = ["bold", "italic", "underline"];

const colors = ["yellow", "blue", "red", "black", "purple"];

function App() {
  const [color, setColor] = useState("");

  const [textStyle, setTextStyle] = useState({
    bold: null,
    italic: null,
    underline: null,
  });

  const styleText = (style) => {
    setTextStyle({
      ...textStyle,
      [style]: textStyle[style] ? null : styleCss[style],
    });
  };

  const stylesList = styles.map((style) => (
    <button
      key={style}
      className={`btn btn-${textStyle[style] ? "dark" : "light"}`}
      style={{ ...styleCss[style], margin: "0.2rem" }}
      onClick={() => styleText(style)}
    >
      {style}
    </button>
  ));

  const colorsList = colors.map((color) => (
    <button
      key={color}
      style={{
        backgroundColor: color,
        height: 30,
        width: 30,
        margin: "0.2rem",
      }}
      onClick={() => setColor(color)}
    ></button>
  ));

  return (
    <div className="App">
      <div className="m-2">{stylesList}</div>
      <textarea
        style={{
          color: color,
          ...textStyle.bold,
          ...textStyle.italic,
          ...textStyle.underline,
        }}
      />
      <div className="m-2">{colorsList}</div>
    </div>
  );
}

export default App;
