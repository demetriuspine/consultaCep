window.onload = () => {
  const cep = document.querySelector('#cep');
  const button = document.querySelector('.btn');

  const insertValues = (resultsFromApi) => {
    const resultsFromApiKeys = Object.keys(resultsFromApi);
    for (let index = 0; index < resultsFromApiKeys.length; index += 1) {
      if (document.querySelector(`#${resultsFromApiKeys[index]}`)) {
        document.querySelector(`#${resultsFromApiKeys[index]}`)
          .value = resultsFromApi[resultsFromApiKeys[index]];
      }
    }
  };

  button.addEventListener('click', async () => {
    const search = cep.value.replace('-', '');
    const options = {
      method: 'GET',
      mode: 'cors',
      cache: 'default',
    };
    try {
      const fetching = await fetch(`https://viacep.com.br/ws/${search}/json/`, options);
      const jsonParsing = await fetching.json();
      insertValues(jsonParsing);
    } catch (err) {
      throw new Error(`'Deu erro:  ${err}`);
    }
  });
};
