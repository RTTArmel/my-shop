<label for="">Description</label>
			<textarea name="" id="" cols="30" rows="10"></textarea><br></br>
			<div className="btn btn-dark file">
			<label for="photo">File</label>
			<input type="file" accept='image/*' name="photo" id="photo" style={styl} 
			onChange={(event)=>{
				var input = event.target;
				var reader  = new FileReader();
				reader.onload = function (){
					var dataUrl = reader.result;
					var output = document.getElementById("output");
					output.src=dataUrl
					console.log(output.src)	
				}
				//reader.readAsDataURL(input.files[0]);
			}}
			/>

			</div><br></br>
<img id="output"/>
			<button>Ajout</button>


            <button className="btn btn-danger" onClick={() => {
                confirmAlert({
                    title: 'Supression Produit',
                    message: user.name,
                    buttons: [
                        {
                            label: 'OUI',
                            onClick: () => props.deleteUser(user.id),
                            className:" btn btn-danger"
                        },
                        {
                            label: 'NON',
                            onClick: () => ''
                        }
                    ]
                })
            }


}>X</button>
<button className="btn btn-success" onClick={() => {
document.getElementById("aff").style.display="block"
props.editRow(user) 
}
}>Edit</button>