"use strict"


const openModal = () => document.getElementById("modal")
    .classList.add("active")

const closeModal = () => document.getElementById("modal")
    .classList.remove("active")

const tempClient = {
	name: "Necromancer", 
	email: "littlenecro@gmail.com",
	phonenumber: "89-744333531",
	town: "Valle"
}

const getLocalStorage = () => JSON.parse(localStorage.getItem("dbClient")) ?? []
const setLocalStorage = (dbClient) => localStorage.setItem("dbClient", JSON.stringify(dbClient))

// CRUD | Create Read Update Delete

const updateClient = (index, client) => {
	const dbClient = readClient()
	dbClient[index] = client
	setLocalStorage(dbClient)

}

const readClient = () => getLocalStorage()

const createClient = (client) => {
const dbClient = getLocalStorage()
	dbClient.push (client) 
	setLocalStorage(dbClient)	
}


// Events 
document.getElementById("registerClient")
    .addEventListener("click", openModal)
 
document.getElementById("modalClose")
    .addEventListener("click", closeModal)


