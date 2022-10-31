const header = {
  title: 'Indecision App',
  subtitle: 'This is some more info',
  options: ['one', 'two']
};

const template = (
  <div>
    <h1>{header.title}</h1>
    { header.subtitle && <p>{header.subtitle}</p> }
    <p>{ (header.options && header.options.length > 0) ? 'Here are your options' : 'No options' }</p>
  </div>
);

let count = 0;

const addOne = () => {
  count++;
  renderCounterApp();
}

const minusOne = () => {
  count--;
  renderCounterApp();
}

const reset = () => {
  count = 0;
  renderCounterApp();
}

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

const renderCounterApp = () => {
  const template2 = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );

  root.render(template2);
}

renderCounterApp();
