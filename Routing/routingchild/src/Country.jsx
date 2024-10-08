import { useParams } from "react-router-dom";

var Country=function()
{
    var x=useParams();

return <div ><br/><br/><br/><h1>    {x.acode}</h1></div>
}

export default Country;