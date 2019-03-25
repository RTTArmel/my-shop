import { confirmAlert } from 'react-confirm-alert'; // Import 
import './App.css';
import React, { useState ,useEffect } from 'react';
import Incr from './increment';
const UserTable = props => {
	const [ user, setUser ] = useState(props.currentUser)
	const [count, setCount] = useState(0);
  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
	)
	const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
	}
	var t =0
	
	var coun=[];
	return(
	
			<div className="row view-group">
		
			{ (props.users.length >= 0) ? (
					props.users.map(user => (
						<div className="item col-lg-4 col-xs-4">
						<div id = "carte" class="card card-cascade wider ">
							<div class="view view-cascade overlay ">
							
								 <a href="#">
								 	<div class="mask rgba-white-slight"></div>
								 </a>
						 </div>
						
							 <div class="card-body card-body-cascade ">
						
								<h4 ><strong>{user.name}</strong></h4>
								<h5 >Description</h5>
								<div class="ccc">	{user.description}</div>
								<h5 id="prix"><strong>{user.username}</strong> Ariary</h5>
								<hr/>
								<div id="like">
								<div className="com">
								<a class="px-2 fa-lg li-ic"onClick={()=>confirmAlert({
            customUI: ({onClose}) => {
                return (
                    <form id='ID'>
                    <div class="sss">
                    <div className="fa">
                    <button className="btn btn-danger " id="gg" onClick={(b) => {
						  document.getElementById("sss").innerHTML+=document.forms['ID'].elements['input'].value; ;
						  document.getElementById("sss").innerHTML+="<br>"
						  document.getElementById("sss").innerHTML+="<hr>"
						onClose()
						
					
					}
            } >X</button>
                    </div>
                        <input name='input'  id="e" placeholder={user.username} className="modifier" />

                        <button onClick={(e) => {
                            var teste=document.forms['ID'].elements['input'].value;
                           

								e.preventDefault()
                                document.getElementById("sss").innerHTML+=teste ;
								document.getElementById("sss").innerHTML+="<br>"
								document.getElementById("sss").innerHTML+="<hr>"
								coun.push(document.getElementById("e").value);
								props.setCount(count+1)
								t+=1
								document.getElementById("res").innerHTML=t
								console.log(coun)
								console.log(t)
								// for(var i=0;i<coun.length;i++){
								// 	document.getElementById("sss").innerHTML+=coun[i] ;
								// }
                                document.getElementById("e").value=' ';



            }} class="btn btn-primary d">comment</button>

        <p id="sss" class="r"></p>
                    </div>
                    </form>
                )

            }

        })
    }>comment</a><p  id="res">0</p>
								</div>
								
								<Incr setCount={setCount}
					count={count}/>
								</div>
								
								
								
	
								
					  </div>
					</div>
					</div>
    )
  
					)				
							
							
				) : (
						console.log("1")
					)}
					
				 {/* <div id="aff6" className="container">
			<form  onSubmit={(event)=>{
				event.preventDefault()
				document.getElementById("aff3").innerHTML+=document.getElementById("in").value
				document.getElementById("aff3").innerHTML+="<br>"
				document.getElementById("in").value =' '
			console.log(document.getElementById("aff3").innerHTML)
			}}>
			<button id="buton"onClick={() =>{
				 document.getElementById("aff").style.display="none"
				
				}
					
				
			 } className="button muted-button" onClick={()=>document.getElementById("aff6").display="none"}>
				x
				</button>
				<hr/>
				<input type="text" id="in" name="username"  onChange={handleInputChange}/>
				<button className="btn btn-success" id="buton"  >comment</button><br></br>
			
				<p id="aff3"></p>
				
				
			</form></div>  */}
			</div>
	
		)
                }
export default UserTable;