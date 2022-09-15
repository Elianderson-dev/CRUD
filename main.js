"use strict"


const openModal = () => document.getElementById("modal").classList.add("active")

const closeModal = () => document.getElementById("modal").classList.remove("active")

const tempClient = {
	name: "Bilbo", 
	email: "barrelRider@gmail.com",
	phonenumber: "89-744343345",
	town: "Hobbiton"
}
const getLocalStorage = () => JSON.parse(localStorage.getItem("dbClient")) ?? []
const setLocalStorage = (dbClient) => localStorage.setItem("dbClient", JSON.stringify(dbClient))

// CRUD | Create Read Update Delete

const deleteClient = (index) => {
	const dbClient = readClient()
	dbClient.splice(index, 1)
	setLocalStorage(dbClient)
}

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

const isValidFields = () => {
	return document.getElementById("form").reportValidity()
}

// Interaction with layout
const saveClient = () => {
	if (isValidFields()) {
		const client = {
			name: document.getElementById("name").value,
			email: document.getElementById("email").value,
			phone_number: document.getElementById("phoneNumber").value,
			town: document.getElementById("town").value

		}
		createClient = (client)
	}
}


// Events 
document.getElementById("registerClient")
	.addEventListener("click", openModal)
 
document.getElementById("modalClose")
	.addEventListener("click", closeModal)

document.getElementById("save")
	.addEventListener("click", saveClient)


