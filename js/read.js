async function getQuotes() {
  try {
    let req = await fetch('http://localhost:3000/api/quote/aiquote');

    let data = await req.json();

    let quoteList = document.getElementById('quoteList');

    quoteList.insertAdjacentHTML('beforeend',
      `<li>
          Citation : ${data.quote} | Auteur : ${data.author} <button>Supprimer</button>
      </li>`
    );

    const delBtn = document.querySelector('button')
    
    delBtn.addEventListener('click', async function() {
      const token = localStorage.getItem('token')
      const datas = await fetch(`http://localhost:3000/api/quote/aiquote`, {
        method: 'DELETE',
        headers: {Authorization: `Bearer ${token}`}
      })
      console.log(await datas.json())
    })
    
  } catch (e) {
    console.error("Une erreur s'est produite : ", e)
  }
}
getQuotes();