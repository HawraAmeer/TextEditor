import "./App.css";

const styleCss = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" },
};

const styles = ["bold", "italic", "underline"];

const colors = ["yellow", "blue", "red", "black", "purple"];

function App() {
  const colorsList = colors.map((color) => (
    <button style={{ backgroundColor: color, height: 30, width: 30 }}></button>
  ));

  const stylesList = styles.map((style) => (
    <button style={styleCss[style]}>{style}</button>
  ));

  return (
    <div className="App">
      <div>{stylesList}</div>
      <textarea />
      <div>{colorsList}</div>
    </div>
  );
}

export default App;
