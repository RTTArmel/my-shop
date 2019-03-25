import React, { useState } from 'react';
import './App.css';
import './bootstrap/dist/css/bootstrap.css'
const AddUserForm = props => {
    const initialFormState = {  name: '', username: '',description:'' ,photo:[],count:0}
      const [ user, setUser ] = useState(initialFormState)
  
      const handleInputChange = event => {
          const { name, value } = event.target
  
          setUser({ ...user, [name]: value })
      }
  
      const styl = {
              opacity: 0
      }
      const styl2 = {
          width: 30,
          
  }
      return (
        <center><div id="formu" className="container">
        <div  className="row">
        <div  className="col-md-5">
            <form onSubmit={event => {
      event.preventDefault()
      if (!user.name || !user.username || !user.description) return
            if(!isNaN(user.username)){
                props.addUser(user)
        //  props.user.photo.push(document.getElementById("output"))
                setUser(initialFormState)
                document.getElementById("ereur").innerHTML=" "
                document.getElementById("ereur1").innerHTML=" "
            }
            else{
                document.getElementById("ereur").innerHTML="entrer un nombre " 
            }
            
        
        
        
    }}>	
        
        
    
        <table  id="table">
            <tbody >
            <tr id="t">
                    <th style={styl2} id="t" ><label className="lab">Produit</label></th>
                    <th className="t"><input id="buton" type="text" name="name" value={user.name} onChange={handleInputChange} /></th> 
                </tr>
                <tr id="t">
                    <th style={styl2} id="t" ><label className="lab" id="buton">Prix</label></th>
                    <th className="t"><input   id="buton" id="g"type="text" name="username" value={user.username} onChange={handleInputChange}  /></th> 
                </tr>
                <tr id="t">
                <th  id="t"><span id="ereur1"></span></th> 
                    <th  id="t"><span id="ereur"></span></th> 
                </tr>
                <tr id="t">
                    <th style={styl2} id="t"><label className="lab" id="buton">Description</label></th>
                    <th  id="t"><textarea name="description" id="" cols="21" rows="1" value={user.description} onChange={handleInputChange}></textarea></th> 
                </tr>
            </tbody>
            </table>
            <div>
            <div id="file" className="btn btn-dark">
            <label id="buton" for="photo">File</label>
            </div>
            <input  type="file" accept='image/*' name="photo" id="photo"  
            onChange={(event)=>{
                event.preventDefault();
                var input = event.target;
                var reader  = new FileReader();
                reader.onload = function (){
                    var dataURL = reader.result;
                    var output = document.getElementById("output");
                    output.src=dataURL
                
                    console.log(output)	
                }
                reader.readAsDataURL(input.files[0]);
            }}
            style={styl}/>
            </div>
            <br></br>
            <button class="btn btn-primary" id="buton1">Ajouter</button><br></br>
        </form>	
        
        </div>
        </div>
        </div>

        </center>
          
      
          
      )
  }
  export default AddUserForm;