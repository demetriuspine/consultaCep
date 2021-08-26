const cep = document.querySelector('#cep');

cep.addEventListener('blur', async () => {
  const search = cep.value.replace('-', '');
  const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
  };
  try {
    const fetching = await fetch(`https://viacep.com.br/ws/${search}/json/`, options);
    const jsonParsing = await fetching.json();
  } catch (err) {
    console.log(`'Deu erro:  ${err}`);
  }
});

window.onload = () => {

};
