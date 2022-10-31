let textVisible = false;

const toggleVisibility = () => {
  textVisible = !textVisible;
  render();
}

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

const render = () => {

  const template = (
    <div>
      <h1>Visiblity Toggle</h1>
      <p><button onClick={toggleVisibility}>{ textVisible ? "Hide" : "Show" } details</button></p>
      {textVisible && ( 
        <div>
          <p>Hey. These are some details you can now see!</p>
        </div>
      )}
    </div>
  );

  root.render(template);
}

render();