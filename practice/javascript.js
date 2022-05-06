const correctUserName = "Admin"
const correctPassoword = "Master"


let userName = prompt("Who's there?")

if (userName == "" || userName == null) {
   alert("Cancelled")
}  else if (userName != "Admin") {
   alert("No bro")
}  else if (userName == correctUserName) {
   let password = prompt("OK, password?")
   if (password == "" || password == null) {
      alert("Cancelled")
   } else if (password != "Master") {
      alert("Bro password sbagliata")
   }
   else if (password == correctPassoword){
      alert ("Welcome")
   }
}
