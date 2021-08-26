const cep = document.querySelector('#cep');

const completeValues = (resultsFromApi) => {
  const resultsFromApiKeys = Object.keys(resultsFromApi);
  for (let index = 0; index < resultsFromApiKeys.length; index += 1) {
    if (document.querySelector(`#${resultsFromApiKeys[index]}`)) {
      document.querySelector(`#${resultsFromApiKeys[index]}`)
        .value = resultsFromApi[resultsFromApiKeys[index]];
    }
  }
};

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
    completeValues(jsonParsing);
  } catch (err) {
    console.log(`'Deu erro:  ${err}`);
  }
});

window.onload = () => {

};
