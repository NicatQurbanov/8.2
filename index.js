

                {/* <p class="sub-header">To Do</p>
                <div class="task-container">
                    <div class="tasks">
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
                        </div>
                    </div>
                </div> */}
            

const btn = document.getElementById('btn');
const main = document.getElementsByClassName('main-container')[0];

const placeholdersArr = ['To do', 'In Process', 'Fixed', 'Done'];


btn.addEventListener('click', () => {
    const column = document.createElement('div');
    column.classList.add('sub-container');
    column.innerHTML = `
    <input id="textInput" class="input-title" type="text" placeholder="${placeholdersArr[0]}">
    <button id="addCardBtn">Add card</button>`
    main.insertBefore(column, btn)
})

 addCardBtn.addEventListener('click', () => {
        console.log(addCardBtn)
        let taskCont = document.createElement('div');
        taskCont.classList.add('task-container');
        taskCont.innerHTML = `
        <div class="tasks">
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
    column.insertBefore(taskCont, addCardBtn);
    })




