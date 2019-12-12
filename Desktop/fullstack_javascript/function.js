var employee=
[
    { emp_id:"cod1",
        emp_name:"mithu",
        emp_photo:"https://cdn.pixabay.com/photo/2019/11/06/14/33/moon-4606246__340.jpg",
        emp_age:30,
        emp_gender:"male",
        emp_company:"PUBG",
        emp_salary:1000000,
        emp_designation:"fullstackdeveloper",
        emp_doj:new Date('2015/05/05'),
        emp_location:"Banglore",
        emp_education:"BTECH"
        
    },
    {
        emp_id:"cod2",
        emp_name:"stryker",
        emp_photo:"https://cdn.pixabay.com/photo/2016/12/23/07/58/holiday-table-1926946__340.jpg",
        emp_age:60,
        emp_gender:"male",
        emp_company:"minimilitia",
        emp_salary:2000000,
        emp_designation:"developer",
        emp_doj:new Date('2015/05/05'),
        emp_location:"Banglore",
        emp_education:"BTECH"
        
    },
    {
        emp_id:"cod3",
        emp_name:"deadshot",
        emp_photo:"https://cdn.pixabay.com/photo/2019/11/12/15/47/aesthetic-4621334__340.jpg",
        emp_age:90,
        emp_gender:"male",
        emp_company:"COD",
        emp_salary:3000000,
        emp_designation:"nodedeveloper",
        emp_doj:new Date('2015/05/05'),
        emp_location:"Banglore",
        emp_education:"BTECH"
        
    },
    {     
        emp_id:"Cod4",
        emp_name:"yureka",
        emp_photo:"https://cdn.pixabay.com/photo/2017/07/31/11/22/people-2557408__340.jpg",
        emp_age:10,
        emp_gender:"male",
        emp_company:"freefire",
        emp_salary:4000000,
        emp_designation:"angulardeveloper",
        emp_doj:new Date('2015/05/05'),
        emp_location:"Banglore",
        emp_education:"BTECH"
        
    }
];
var emp=[];
employee.forEach(empData=> {
emp.push(`<div class="card">
<img src="${empData.emp_photo}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${empData.emp_name}</h5>
  <span class="badge badge-primary float-right">${empData.emp_id}</span>
  <br>
  <span class="badge badge-success float-right">${empData.emp_designation}</span>
  <br>
  <li class="list-group-item"> Salary:${empData.emp_salary}</li>
    <li class="list-group-item"> location:${empData.emp_location}</li>
    <li class="list-group-item">education:${empData.emp_education}</li>
    <li class="list-group-item">age:${empData.emp_age}</li>
    <li class="list-group-item">gender:${empData.emp_gender}</li>
    <li class="list-group-item">company:${empData.emp_company}</li>
    <li class="list-group-item">date of join:${empData.emp_doj.toString()}</li>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`);
});

document.getElementById("template").innerHTML=emp;

var number=[60,70,80,90,100,300,20,30,40];
var str="hello javascript";
var revstr=[...str].reverse().join("");
console.log(revstr);
number.sort();
var numsort=number.sort(function (a,b) {
    return a-b;
});
console.log(numsort);

function username(str) {
    return [...str].reverse().join("");
}  
console.log(username("mithu"));