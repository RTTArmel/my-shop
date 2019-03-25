
import React, { useState  } from 'react';
var s=0
const Incr = ()=>{
  
    const [count, setCount] = useState(0);
	const increment = (e)=>{
        e.preventDefault()
        setCount(count+1)
        s+=1
        document.getElementById("res1").innerHTML=s
        console.log(document.getElementById("res1").innerHTML)
		console.log(count)
    }
    return(
        <div class="mask rgba-white-slight hear">
        
        <p className="coeur" onClick={increment}>❤</p><p  id="res1">0</p>	
       
        </div>
        
    )
        
}
export default Incr;