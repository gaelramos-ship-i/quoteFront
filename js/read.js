async function getQuotes() {
  try {
    let req = await fetch('http://localhost:3000/api/quote/all');

    let datas = await req.json();

    let quoteList = document.getElementById('quoteList');

    datas.forEach(data => {
      quoteList.insertAdjacentHTML('beforeend',
        `<li>
          Citation : ${data.quote} | Auteur : ${data.author} <button data-id="${data._id}">Supprimer</button>
        </li>`
      )
    });

    const addButton = document.getElementById('addButton')
    addButton.addEventListener('click', async function(e) {
      e.preventDefault();

      const addQuote = document.getElementById('addQuote')
      const addAuthor = document.getElementById('addAuthor')

      const obj = {
        quote: addQuote.value,
        author: addAuthor.value,
      }
      
      const token = localStorage.getItem('token')
      const datas = await fetch('http://localhost:3000/api/quote/', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`}
      })
      console.log(await datas.json())
    })
    

    const delBtn = document.querySelector(`button`)

    delBtn.addEventListener('click', async function(e) {
      const id = this.dataset.id
      const token = localStorage.getItem('token')
      const datas = await fetch(`http://localhost:3000/api/quote/${id}`, {
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