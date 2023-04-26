function agregarTarea() {
  const tareas = document.querySelector('.seccion-tareas');

  const div = document.createElement('div');
  const input = document.createElement('input');
  const p = document.createElement('p');

  div.setAttribute('class', 'seccion-tareas__tarea');
  div.appendChild(input);
  div.appendChild(p);
  input.setAttribute('class', 'seccion-tareas__tarea--checkbox');
  input.setAttribute('type', 'checkbox');
  p.setAttribute('class', 'seccion-tareas__tarea--p');
  p.setAttribute('contenteditable', 'true');
  p.setAttribute('spellcheck', 'false');
  p.setAttribute('oninput', 'eliminarTarea(event)');

  tareas.appendChild(div);

  //   tareas.innerHTML += `<div class="seccion-tareas__tarea">
  //   <input class="seccion-tareas__tarea--checkbox" type="checkbox" />
  //   <p class="seccion-tareas__tarea--p" contenteditable="true" spellcheck="false">Texto</p>
  // </div>`;
}

function eliminarTarea(event) {
  const elementoPadre = event.target.parentElement.parentElement;
  const input = event.target;

  input.addEventListener('keydown', (e) => {
    const longitudInput = input.firstChild.textContent.length;
    if (e.key === 'Backspace' && longitudInput === 0) {
      elementoPadre.removeChild(e.target.parentElement);
    }
  });

  // console.log(input);

  // if (!event.target.firstChild.length) {
  //   elementoPadre.removeChild(event.target.parentElement);
  // }
}
