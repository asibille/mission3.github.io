



function calculate()
{

var Taille = 11;	
	
var Description = new Array (Taille);

var Quantité = new Array (Taille);

var PrixU = new Array (Taille);

var Total_l = new Array (Taille);



	for (let i = 0; i<Taille; i++)
	{

		Description[i] =parseInt(document.getElementById("first"+i).value);
		Quantité[i] =parseInt(document.getElementById("second"+i).value);
	    PrixU[i] =parseInt(document.getElementById("third"+i).value);
	    Total_l[i] = Quantité[i]*PrixU[i];
  		document.getElementById("answer"+i).value= Total_l[i];
	}


	var Sous_Total =0;
	for (let i = 0; i<Taille; i++)
	 Sous_Total=Total_l[i] + Sous_Total;	
	document.getElementById("SOUS-TOTAL").value=Sous_Total;


    var Remise =parseInt(document.getElementById("REMISE").value); 


	var Sous_Total_R= Sous_Total-Remise;
	document.getElementById("SOUS-TOTAL-R").value=Sous_Total_R;

	var Taux_Imposition =parseInt(document.getElementById("TAUX-D'IMPOS").value);

  var Taxe_Total= Sous_Total_R*Taux_Imposition/100.0;
  document.getElementById("TAXE-TOTAL").value=Taxe_Total;

  var Manutention =parseInt(document.getElementById("EXPEDITION").value);

  var Solde_Du=Sous_Total_R+Taxe_Total+Manutention;
document.getElementById("SOLDE_DU").value=Solde_Du;
}

function affiche_date()
{
var maintenant=new Date();
var jour=maintenant.getDate();
var mois=maintenant.getMonth()+1;
var an=maintenant.getFullYear();
var str= new String ("DATE:&nbsp;"+jour+"/"+mois+"/"+an+".");
document.write (str.fontcolor( "blue" ));
}

function display(formulaire)
{
	if (formulaire.username.value=="Admin_GSB")
	{ 
		if (formulaire.password.value=="admin") 
		{              
			let a = document.createElement('a')
			a.href = "html.pdf"
			a.download = "html.pdf"
			document.body.appendChild(a)
			a.click()
			document.body.removeChild(a)
			a.href = "js.pdf"
			a.download = "js.pdf"
			document.body.appendChild(a)
			a.click()
			document.body.removeChild(a)
			a.href = "css.pdf"
			a.download = "css.pdf"
			document.body.appendChild(a)
			a.click()
			document.body.removeChild(a)

		  return true; 
		} 
		else
		{
		 alert("Invalid Password");
		 return false;
		}
	} 
	else 
		{  
			alert("Invalid Username");
			return false;
		}
}