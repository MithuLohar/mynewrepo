var search=document.getElementById("search");
search.addEventListener('keyup',(e)=>
{
   if (e.keyCode===13) {

       var getcityname=e.target.value;
   }
 getweather(getcityname);
});



function getweather(getcityname)
{
const wetherapi=`http://api.openweathermap.org/data/2.5/weather?q=${getcityname}&&mode=json&units=metric
&APPID=4fe6b12e8072edb85cbf93e83faa58bd`
window.fetch(wetherapi)
.then(data =>
    {
       data.json()
       .then(  
           weather => {
               weatherdata=weather.weather;
               var output="";
               console.log(weather);
        for (const x of weatherdata) {
            output+=`
            <div class="">
                <div class="card-body1">
                <h1>${weather.name}</h1>
                <span class="icon"><img src="http://openweathermap.org/img/wn/${x.icon}.png"/></span>
                <p>
                <span class="temp">temp:${weather.main.temp}&deg;c</span>
            </p>
           
            <Span class="des float-left">${x.description}</Span>
            <Span class="des float-right">${x.main}</Span>
                </div>
            </div>     
                `;
                document.getElementById("template").innerHTML=output;
        }


           }).catch(
           err => console.log(err)
       );
    })
.catch( err => console.log(err));
}

