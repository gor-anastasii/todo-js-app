const input = document.getElementById('input')
const btnAdd = document.getElementById('btn-add')
const lists = document.getElementById('lists')
const btnDel = document.querySelector('.btn-delete')


btnAdd.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        const template = `
            <li>
                <div class="task">
                    <input type="checkbox">
                    <p>${input.value}</p>
                </div>
                <button class="btn-delete"><img src="img/cross.png" class="btn-delete"></button>
            </li>`
        lists.insertAdjacentHTML('beforeend', template.trim())
    }

    input.value = ''
})

lists.addEventListener('change', (event) => {
    if (event.target.matches('input[type="checkbox"]')) {
        const listItem = event.target.closest('li')
        if (listItem) {
            listItem.classList.toggle('checked')
        }
    }
})

lists.addEventListener('click', (event) => {
    console.log(1)
    console.log(event.target.classList)
    if (event.target.classList.contains('btn-delete')) {
        console.log(2)
        const listItem = event.target.closest('li')
        if (listItem) {
            console.log(3)
            listItem.remove()
        }
    }
});