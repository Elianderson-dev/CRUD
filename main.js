"use strict"


const openModal = () => document.getElementById("modal")
    .classList.add("active")

const closeModal = () => document.getElementById("modal")
    .classList.remove("active")

const tempClient = {
	name: "Frodo" 
	e-mail: "frodob@gmail.com"
	phone-number: "89-744333531"
	town: "Hobbiton"
}
// CRUD | Create Read Update Delete

// events 
document.getElementById("registerClient")
    .addEventListener("click", openModal)

document.getElementById("modalClose")
    .addEventListener("click", closeModal)



