
  async function getInformationForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const imageUrl = document.getElementById('image_url').value;
    const trailerUrl = document.getElementById('trailer_url').value;

    const film = {
      name,
      description,
      image_url: imageUrl,
      trailer_url: trailerUrl
    };
 
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(film)
    };

    const url = 'http://localhost:3000/'

    if (!url) {
      console.error('A URL de requisição está indefinida. Verifique o arquivo .env e a configuração do dotenv.');
      return;
    }

    console.log(url);

    try {
      const res = await fetch(url, options);
      if (!res.ok) {
        throw new Error('Erro de rede: ' + res.status);
      }
      const data = await res.json();
      console.log(data);
      alert('Filme enviado com sucesso!')
      document.getElementById('name').value = '';
      document.getElementById('description').value = '';
      document.getElementById('image_url').value = '';
      document.getElementById('trailer_url').value = '';
    
      return false
    } catch (error) {
      console.error('Erro na requisição ', error);
    }
  }

const button = document.getElementById('buttonSend');
button.addEventListener('submit', getInformationForm);
  

