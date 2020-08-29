/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';
import Carousel from '../../components/Carousel';
import BannerMain from '../../components/BannerMain';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  const [titleMain, setVideoTitle] = useState('');
  const [urlMain, setUrl] = useState('');
  const [vDescription, setDescription] = useState('');

  function setVideoData(videoTitle, url) {
    setVideoTitle(videoTitle);
    setUrl(url);
    //setDescription(videoDescription);
    console.log("eu to chamando");
  }

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
        setVideoTitle(categoriasComVideos[0].videos[0].titulo);
        setUrl(categoriasComVideos[0].videos[0].url);
        setDescription(categoriasComVideos[0].videos[0].description);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={titleMain}
                url={urlMain}
                videoDescription={vDescription}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
                attBanner={(a, b) => setVideoData(a, b)}
              />
            </div>
          );
        }
        return (
          <Carousel
            key={categoria.id}
            category={categoria}
            attBanner={(a, b) => setVideoData(a, b)}
          />
        );
      })}

    </PageDefault>
  );
}

export default Home;
