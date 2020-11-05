let addBtn = document.getElementById('addBtn')
let lists = document.querySelector('.itemLists')
addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let newItem = document.createElement('li')
    newItem.classList.add("todo-item");
    let deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-btn')
    deleteBtn.innerHTML = "X"
    deleteBtn.addEventListener('click', (e) => {
        newItem.classList.add('drop')
        newItem.addEventListener('transitionend', function(){
            newItem.remove()
        })
    })
    let doneBtn = document.createElement('button')
    doneBtn.classList.add('done-btn')
    doneBtn.innerHTML = '\u2714'
    doneBtn.addEventListener('click', (e) => {
        newItem.classList.toggle("completed")
    })
    let inputContent = document.getElementById('todoInput').value
    if (inputContent !== '') {
        newItem.textContent = inputContent
        lists.appendChild(newItem)
        newItem.appendChild(deleteBtn)
        newItem.appendChild(doneBtn)
        document.getElementById('todoInput').value = ''
    }
})
