
  let parent = document.querySelector(".parent")
console.log(parent)
let body = document.querySelector("body")
body.append(parent)
let aab = ()=>{
    
}
let request = new XMLHttpRequest()
let url = "https://jsonplaceholder.typicode.com/users"
request.open("get", url)
request.send() 
request.onreadystatechange = () => {
    if(request.readyState === XMLHttpRequest.DONE){
        let data = JSON.parse(request.responseText)
        for(let i = 0; i < data.length; i++){
            let span = document.createElement("span")
            let div = document.createElement("div")
            div.className = "child"
            span.innerHTML = `${"\n"} ${data[i].name} ${"\n"} ${data[i].phone} ${"\n"} ${data[i].website} ${"\n"} ${data[i].email} ${"\n"}`
            div.append(span)
            parent.append(div)
            span.addEventListener("click", (e)=>{
                const extraInfo = document.createElement("span")
                span.innerHTML = ` name: ${data[i].name}
                phone: ${data[i].phone} website: 
                ${data[i].website} 
                email: ${data[i].email}  
                username: ${data[i].username}
                id: ${data[i].id}
                address: ${data[i].address.city} ${data[i].address.zipcode}
                company: ${data[i].company.name}
                `
               console.log(e.target)
                e.preventDefault()
            })
        }
    }
}