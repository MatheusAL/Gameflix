import config from '../config';

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

export default {
  getAllWithVideos,
};
