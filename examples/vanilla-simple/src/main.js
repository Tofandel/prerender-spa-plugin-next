// -----
// STATE
// -----

const todos = [
  'Do the dishes',
  'Make the bed',
  'Take out the trash'
];

// --------
// ELEMENTS
// --------

const newTodoInput = document.getElementById('new-todo');
const todosContainer = document.getElementById('todos');

// ------
// RENDER
// ------

function render () {
  todosContainer.innerHTML = '<ul>' +
    todos.map(function (todo, index) {
      return '<li class="item">' +
        todo +
        ' <button class="remove-todo" data-index="' + index + '">X</button>' +
      '</li>';
    }).join('') +
  '</ul>';

  document.dispatchEvent(new Event('render-event'));
}
render();

// ------
// EVENTS
// ------

newTodoInput.addEventListener('keyup', function (event) {
  if (event.which === 13) {
    todos.push(event.target.value);
    newTodoInput.value = '';
    render();
  }
});

todosContainer.addEventListener('click', function (event) {
  const clickedElement = event.target;
  if (clickedElement.className === 'remove-todo') {
    todos.splice(clickedElement.dataset.index, 1);
    render();
  }
});

document.body.innerHTML += `<p>Injected: ${JSON.stringify(window.__PRERENDER_INJECTED)}</p>`;
