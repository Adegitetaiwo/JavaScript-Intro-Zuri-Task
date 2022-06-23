

// 
let fullName = document.getElementsByClassName("nameValue")
let height = document.getElementsByClassName("heightValue")
let country = document.getElementsByClassName("countryValue")

// modify document
// print to document
console.log(fullName)
fullName[0].innerText = "Taiwo Adegite"
height[0].innerHTML = "6 ft"
country[0].innerHTML = "Nigeria"

// print to console
console.log(fullName[0].innerText)
console.log(height[0].innerHTML)
console.log(country[0].innerHTML)