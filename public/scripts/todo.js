const todoForm = document.getElementById('todo-form');
const titleField = document.getElementById('title');
const descriptionField = document.getElementById('description');

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = titleField.value;
  const description = descriptionField.value;

  (async () => {
    const rawResponse = await fetch('/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: title, description: description }),
    });
    const content = await rawResponse.json();
    // console.log(content);
  })();

  getTodos()

});


function getTodos() {
  fetch("./todos")
    .then((res) => {
      return res.json();
    })
    .then(data => {
      console.log(data)
      let markup;
      let deleteBtn;
      data.forEach(todo => {
        id = todo.id
        // console.log(id)
        markup = `<li>${todo.title}</li>`;
        deleteBtn = `<button>X</button>`;
      })
      // deleteBtn.classList.add("delete-btn")
      document.querySelector('ul').insertAdjacentHTML('beforeend', markup)
      document.querySelector('ul').insertAdjacentHTML('beforeend', deleteBtn)
    })
    .catch((err) => console.error(err))
}

// function deleteTodo(todo) {

// }