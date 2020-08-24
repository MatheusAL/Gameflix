import config from '../config';

function getAll() {
  return fetch(`${config.URL_BACKEND}/categorias`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function getAllWithVideos() {
  return fetch(`${config.URL_BACKEND}/categorias?_embed=videos`)
    .then(async (respostadoServidor) => {
      if (respostadoServidor.ok) {
        const resposta = await respostadoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível acessar os dados');
    });
}

function create(Video) {
  return fetch(`${config.URL_BACKEND}/categorias`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(Video),
  })
    .then(async (respostadoServidor) => {
      if (respostadoServidor.ok) {
        const resposta = await respostadoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível acessar os dados');
    });
}

export default {
  getAllWithVideos,
  getAll,
  create,
};
