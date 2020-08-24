import config from '../config';

function create(Video) {
  return fetch(`${config.URL_BACKEND}/videos?_embed=videos`, {
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
  create,
};
