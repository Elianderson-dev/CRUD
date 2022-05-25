"use strict"

const openModal = () => document.getElementById("modal")
    .classList.add("active")

const closeModal = () => document.getElementById("modal")
    .classList.remove("active")
	
// events 
document.getElementById("registerClient")
    .addEventListener("click", openModal)

document.getElementById("modalClose")
    .addEventListener("click", closeModal)



