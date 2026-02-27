const inputBtn = document.getElementById('inputBtn')
inputBtn.addEventListener('click', async (e) => {
  e.preventDefault(); 
  
  // Récupérer le contenu du input
  const inputMail = document.getElementById('email')
  const inputPwd = document.getElementById('password')
  
  const obj = {
    email: inputMail.value,
    password: inputPwd.value,
  }
  // Envoyer le contenu de mon input sur le serveur (API) méthode post
  const datas = await fetch('http://localhost:3000/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-type': 'application/json',
    }
  })
  const user = await datas.json()
  localStorage.setItem("token", user.token)

  if (user.token){
    window.location = "/index.html";
  }
})