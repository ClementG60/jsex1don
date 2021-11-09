fetch("http://127.0.0.1:5500/ex1/movies.json")
    .then(response => response.json())
    .then(response => displayMovie(response.results))
    

function displayMovie(movie){
    let div1 = document.createElement("div")
    let div2 = document.createElement("div")
    div1.className = "container-fluid"
    div2.className = "row justify-content-evenly"
    document.body.append(div1)
    div1.append(div2)

    for(let i = 0; i < movie.length; i++){

       let div3 = document.createElement("div")
       let h2 =  document.createElement("h2")
       let div4 = document.createElement("div")
       let div5 = document.createElement("div")
       let div6 = document.createElement("div")
       let div7 = document.createElement("div")
       let div8 = document.createElement("div")
       let p1 = document.createElement("p")
       let p2 = document.createElement("p")
       let img = document.createElement("img")

       h2.innerText = movie[i].original_title
       p1.innerText = movie[i].overview
       img.src = movie[i].poster_path
       p2.innerText = "Note du film : " + movie[i].vote_average

       div2.appendChild(div3)
       div3.append(h2)
       div3.append(div4)
       div4.append(div5)
       div4.append(div6)
       div5.append(img)
       div6.append(p1)
       div3.append(div7)
       div7.append(div8)
       div8.append(p2)

       div3.className = "col-lg-5 mt-3 bg-primary text-white py-3"
       div4.className = "row text-center"
       div5.className = "col-lg-4"
       div6.className = "col-lg-8"
       div7.className = "row text-center"
       div8.className = "col-lg-12 mt-4"
       img.className = "vertical-align-center"
    }
}



