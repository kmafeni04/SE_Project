 const password = document.getElementById("psw")
 const form = document.getElementById("login_form")
 const errorElement = document.getElementById("error")

 form.addEventListener("submit", (e) => {
     let messages = []

     if (password.value.length < 8) {
         messages.push('Password must be longer than 8 characters')
     }

     if (password.value.length >= 20) {
         messages.push('Password must be shorter than 20 characters')
     }

     if (messages.length > 0) {
         e.preventDefault()
         errorElement.innerText = messages.join(", ")
     }

 })