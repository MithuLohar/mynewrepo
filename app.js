<<<<<<< HEAD
const api="https://api.github.com/users";
 window
.fetch(api)
.then(data=>
    {
      data.json().then(gituser =>
        {
            // console.log(gituser)
            var output=[];
            for (let user of gituser) {
                // console.log(user);
              
                output+=
                `
                
                    <div class="container">
                        <table class="table table-bordered mt-4">
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>photo</th>
                                <th>repo</th>
                                 <th>url</th>
            
                            </tr>
                            <tr>
                            <td>${user.id}</td>
                            <td>${user.login}</td>
                            <td><img src="${user.avatar_url}" alt=""></td>
                            <td>${user.repos_url}</td>
                            <td>${user.url}</td>
                            </tr>
                        </table>
                    </div>
                
                `;
                document.getElementById("template").innerHTML=output;
            }

        }).catch(err=>
            {
                console.log(err)
            })
    })
.catch(err=>
    {
        console.log(err)
    });
    
=======
var search = document.getElementById("search");
search.addEventListener("keyup", e => {
    var searchText= e.target.value;
    getMovies(searchText);
});

function getMovies(searchText) {
//console.log(searchText);
const imdbApi = ` http://www.omdbapi.com/?s=${searchText}&apikey=51b6e8a4 ` ;
window.fetch(imdbApi)
  .then(movies => {
    movies.json()
    .then(data =>{ 
        const movieData= data.Search;
        //console.log(movieData);
        var output = [];
        for(let movie of movieData) {
            output += `
            <div class="container">
                <section id="movie">
                    <h1>${movie.Title}</h1>
                    <span class="badge badge-success">${movie.Year}</span>

                    <p>
                    <img src="${movie.Poster}" class="img-poster">
<p><button class="btn btn-dark btn-block">go to movie </button></p>
                </section>

            </div> 
            `; 
            document.getElementById("template").innerHTML = output;
         } 
    })
    .catch(err => console.log(err))
}).catch(err => console.log(err))
};
>>>>>>> c689db6dcb4ffc8163220a50c75efd5e1475fb95
