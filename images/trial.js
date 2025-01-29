const params = new URLSearchParams(window.location.search)
const id = params.get('id')
const students = JSON.parse(localStorage.getItem('students'))
const found_student = students.find(student => student.id == id)
console.log(found_student)

const firstname_field = document.querySelector('h1')
const lastname_field = document.querySelector('h2')
const desc_field = document.querySelector('p')

firstname_field.textContent = found_student.firstname
lastname_field.textContent = found_student.lastname
desc_field.textContent = found_student.description


const add = document.querySelector('#add')
const val = document.querySelector('#val')
const sub = document.querySelector('#sub')
let quantity = 0

add.addEventListener('click', increaseQuantity)
sub.addEventListener('click', decreaseQuantity)

function increaseQuantity(){
    quantity += 1
    val.textContent = quantity
    found_student.courses = quantity
}

function decreaseQuantity(){
    quantity -= 1
    found_student.courses = quantity
    val.textContent = quantity
}

const button = document.querySelector('button')
button.addEventListener('click', () => {
    console.log(found_student)
})