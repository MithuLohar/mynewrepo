//https://newsapi.org/v2/top-headlines?country=in&apiKey=f6e048583624461db06c7f0806ab9044
//https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=f6e048583624461db06c7f0806ab9044


const SportsApi=`https://newsapi.org/v2/top-headlines?country=in&category=sports
&apiKey=f6e048583624461db06c7f0806ab9044`;
window.fetch(SportsApi)
.then(data=>
    {
        data.json()
        .then(sportsnews=>
            {
                console.log(sportsnews)
                let sportsdata=sportsnews.articles;
                let output="";
                for (const sports of sportsdata) {
                    output+=
                    `
                    <h1 class="h1title"><a href="${sports.url}">${sports.title}</a></h1>
                    <p>${sports.description}</p>
                    <img src="${sports.urlToImage}">
                    <p>${sports.publishedAt}</p>
                    `;
                    document.getElementById("left").innerHTML=output;
                }
            }).catch(
                err=>
                {
                    console.log(err);
                }
            )
    })
.catch( err=>
  {
   console.log(err);
  }
);
setInterval(()=>
{
    var time=new Date().toLocaleTimeString();
    document.getElementById("time").innerHTML=time;
},1000);





const entertainmentApi=`
https://newsapi.org/v2/top-headlines?country=in&category=entertainment
&apiKey=f6e048583624461db06c7f0806ab9044`;
window.fetch(entertainmentApi)
.then(data=>{
    data.json()
    .then(ent=>
        {
         console.log(ent);
        let entdata=ent.articles;
        let output="";
        for (const entertainment of entdata) {
            output+=
            `
            <h1 class="h1title"><a href="${entertainment.url}">${entertainment.title}</a></h1>
                    <p>${entertainment.description}</p>
                    <img src="${entertainment.urlToImage}">
                    <p>${entertainment.publishedAt}</p>
            `;
            document.getElementById("right").innerHTML=output;
        }
        }).catch(err=>
            {
               console.log(err) ;
            })
 // console.log(data)
}
   
    )
.catch(err=>console.log(err));





var headline=`https://newsapi.org/v2/top-headlines?country=us
&apiKey=f6e048583624461db06c7f0806ab9044`;
window.fetch(headline)
.then(data=>
    {
        console.log(data);
        data.json()
        .then(head=>
            {
                console.log(head);
                let headdata=head.articles;
                let output="";
                for (const hd of headdata) {
                    output+=
                    `
                    <h1 class="h1title"><a href="${hd.url}">${hd.title}</a></h1>
                            <p>${hd.description}</p>
                            <img src="${hd.urlToImage}">
                            <p>${hd.publishedAt}</p>
                    `;
                    document.getElementById("template1").innerHTML=output;
                }
            })
        .catch(err=>console.log(err))
    })
.catch(err=>console.log(err))