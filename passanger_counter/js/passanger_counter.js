
let count_el=document.getElementById("count")
let saved_el=document.getElementById("saved_record")
let count=0
function increament_function(){
    count+=1
    count_el.textContent=count 
}
let saved = "saved records: " +  count 
function save_function(){
 saved += " - " + count
 saved_el.textContent=saved
 count_el.textContent=0
 count=0
}


// let Name="Linda "
// let greet="Hi there"
// function greetFunction(){
// let greeting=greet +", "+ Name
// console.log(greeting)
// }
// greetFunction()





// let myPoint=3
// function add3Points(){
// myPoint+=3
// }
// function removelPoints(){
//     myPoint-=1
// }

// add3Points()
// removelPoints()
// add3Points()
// removelPoints()
// add3Points()

// console.log(myPoint)