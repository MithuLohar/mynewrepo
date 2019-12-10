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
    