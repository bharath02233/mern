import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  var [val,setVal]=React.useState(false);

  var [courses,setCourses]=React.useState([{'language':'Java','status':false},{'language':'Python','status':false},{'language':'JavaScript','status':false}]);
  function chval()
  {
    setVal(true);
  }
  function chval1()
  {
     setVal(false);
  }
  function chcolr(i)
  {
    console.log(i);
     var temp=[...courses];
     temp[i].status=true;
     setCourses([...temp]);
  }
  function chcolr1(i)
  {
    var temp=[...courses];
    temp[i].status=false;
    setCourses([...temp]);
  }

  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <Link><img src="https://edupoly.in/common/assets/edupoly-logo-light.png" width="100px" ></img></Link>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent" class="d-flex justify-content-end">


      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

      <li   class="nav-item dropdown position-relative" onMouseOut={()=>{chval1()}} onMouseOver={()=>{chval()}} >
          <Link  style={{color:val?'blue':''}} class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Courses
          </Link>
          {val && 
          <div style={{'position':'absolute',top:'40px','box-shadow':'0px 0px 8px black',width:'200px'}}>
            {
              courses.map((ob,i)=>{
                return <div><Link to={`/${ob.language}`} onMouseOver={()=>{chcolr(i)}}  onMouseOut={()=>{chcolr1(i)}} style={{color:ob.status?'red':''}} >{ob.language}</Link><br/></div>
              })
            }
           
          </div>
          
          }
        </li>


        <li class="nav-item">
          <Link  class="nav-link active" aria-current="page" to={`/home/${2}`} >Home</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}

export default NavBar