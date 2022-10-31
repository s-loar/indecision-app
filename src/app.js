const app = {
  title: 'Indecision App',
  subtitle: 'This is some more info',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  };
};

const removeAll = () => {
  if (app.options.length > 0) {
    app.options = [];
    render();
  }
}

const makeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
}

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

const render = () => {
  
  const template = (
    <div>
      <h1>{app.title}</h1>
      { app.subtitle && <p>{app.subtitle}</p> }
      <p>{ (app.options && app.options.length > 0) ? 'Here are your options' : 'No options' }</p>
      <p><button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button></p>
      <p><button onClick={removeAll}>Remove All</button></p>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>

      <ol>
        {app.options.map((option) => <li key={option}>{option}</li>)}
      </ol>
    </div>
  );

  root.render(template);
}

render();
