let container = document.getElementById("container")
async function getData(){
    let res = await fetch("http://localhost:3000/data"); 
    try {
        if (!res.ok) {
            throw new Error("Something wrong in displaying details");
        }
        let data1 = await res.json();
        showData(data1)
    } catch (error) {
        console.log(error.message);
    }
}
function showData(data){
    data.forEach(obj=>{
        let item = document.createElement("div")
        item.innerHTML = `
           <h4>ID: ${obj.id}</h4>
           <p><b>Name:</b> ${obj.name}</p>
           <img src=${obj.img}>
        `
        container.appendChild(item)
    })
}
getData();