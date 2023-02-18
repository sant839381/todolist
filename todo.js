function add() {
    let val = document.getElementById("input").value
    let node = document.createElement("li");
    //let textnode=document.createTextNode(val)
    //node.appendChild(textnode)
    node.innerHTML = val + "<button class='btn'>X</button>"

    let parent1 = document.getElementById("list")

    if (val!="" && val.length<=48)
    { 
        console.log(val.length)
    let positon = parent1.firstElementChild;
    //document.getElementById("list").appendChild(node)
    document.getElementById("list").insertBefore(node, positon)
    document.getElementById("sm").textContent=""
    }
    else{
        document.getElementById("sm").textContent="Please enter only 48 charcters"
    }


let x = document.getElementById("input")
if (x.value != "")
    x.value = "";
let parent = document.getElementById("list")
//console.log(parent)
let but = document.querySelectorAll(".btn")
// but.forEach(ele => {
//     console.log(ele.innerHTML)
//     let x = ele.parentElement
//     console.log(x)
//     ele.addEventListener('click', (e) => {

//        // console.log(x)
//         parent.removeChild(x)
//     })
// })
but.forEach(ele => {
    ele.addEventListener('click', (e) => {
        let x = ele.parentElement
        if (parent.contains(x)) {
            parent.removeChild(x)
        }
    })
})


}
