const ENVOYER_button = document.querySelector(".button")
submit_button.onclick = (e) => {
  // toutes les données d'entree on reçu ces variables
  const fname = document.getElementById("fname").value;
  const lname= document.getElementById("lname").value;
  const Email = document.getElementById("Email").value;
  const phone = document.getElementById("phone").value;
  const pass = document.getElementById("pass").value;
  const cpass = document.getElementById("cpass").value;
e.preventDefaut();
//   stockez maintenant ces donnees dans la boutique de votre site web
localStorage.setItem('Nom',fname)
localStorage.setItem('Prenom',lname)
localStorage.setItem('Adresse e-mail',email)
localStorage.setItem('phone',telephone)
localStorage.setItem('password',pass)
localStorage.setItem('password',cpass)

// ecrire une condition
if(fname == "" &&  lname == "" &&  email == "" &&  pass == "" &&  cpass == "" && ){
    // changer le systeme d'alert
    swal("Opps..!", "le champ de saisie doit être rempli!", 
    "error");
}

else{
    if(pass !== cpass){
        swal("opps..!", "password not marching!", "error");
    }else
    {
        swal("Good !", "registration successful!", "success");
    }
}


}