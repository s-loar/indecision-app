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

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

const render = () => {
  
  const template = (
    <div>
      <h1>{app.title}</h1>
      { app.subtitle && <p>{app.subtitle}</p> }
      <p>{ (app.options && app.options.length > 0) ? 'Here are your options' : 'No options' }</p>
      <p>{app.options.length}</p>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>

      <p><button onClick={removeAll}>Remove All</button></p>
      <ol>
        {app.options.map((option) => <li key={option}>{option}</li>)}
      </ol>
    </div>
  );

  root.render(template);
}

render();
