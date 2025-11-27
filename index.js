
const btn = document.getElementById('btn');
const main = document.getElementsByClassName('main-container')[0];

document.addEventListener('click', e => {
  let column = document.createElement('div');
  column.classList.add('sub-container');
  column.innerHTML = `
    <div class="closeBtn columnClose"><i class="fa-solid fa-xmark"></i></div>
    <textarea class="input-title textInput" type="text" placeholder="Title"></textarea>
    <button class="addCardBtn"><i class="fa-solid fa-plus"></i></button>
    `
   if (e.target.id === btn.id) {
   main.insertBefore(column, btn)
  } else if (e.target.classList.contains('fa-plus')) {
    column = e.target.closest('.sub-container')
    let taskCont = document.createElement('div');
    taskCont.classList.add('task-container');
    taskCont.innerHTML = `
        <div class="tasks">
        <div class="closeBtn"><i class="fa-solid fa-xmark"></i></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <div class="icon-container">
                            <div><img src="Icons/justify.png" alt="justify"></div>
                            <div>
                                <div class="span-container">
                                    <img src="Icons/checkbox.png" alt="checkbox"><span>4/8</span>
                                </div>
                                
                            </div>
                            <div>
                                <div class="span-container">
                                    <img src="Icons/attach.png" alt="attach"><span>2</span>
                                </div></div>
                            <div>
                                <div class="span-container"><img src="Icons/comments.png" alt="comments"><span>4</span></div></div>
                            <div><img src="Icons/man_1.png" alt="man"></div>
                        </div>`
    column.insertBefore(taskCont, e.target.closest('.addCardBtn'))
  }
     else if (e.target.classList.contains('fa-xmark') && e.target.closest('.columnClose')) {
       e.target.closest('.sub-container').remove()
     }
     else if (e.target.classList.contains('fa-solid') && e.target.closest('.tasks')) {
        e.target.closest('.tasks').remove();     
     }
})

