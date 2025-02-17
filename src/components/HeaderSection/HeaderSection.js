import React from 'react';
import './HeaderSection.css';

const HeaderSection = () => {
  return (
    <header className="App-header">
      <div className="inicio">
        <div className="grid grid-cols-2 flex-1">
          {/* Coluna esquerda | com textos */}
          <div className="lado1">
            <div className="texto-domine">Domine a antropometria na</div>
            <div className="texto-pratica">PRÁTICA</div>
            <div className="texto-curso">
              Curso prático de 2 dias para profissionais que desejam<br />
              dominar a <span className="moreweight">avaliação física com excelência.</span>
            </div>
            <div className="botao">Garanta sua vaga!</div>
          </div>

          {/* Coluna direita | com imagens */}
          <div className="lado2 col-start-2 row-span-full relative responsive">
            <div className="blob-image absolute">
              <img src="blob.svg" alt="blob" />
            </div>
            <div className="blob-line absolute">
              <img src="blob-line.svg" alt="blob line" />
            </div>
            <div className="imagem1 absolute">
              <img className="imagemBraco" src="foto-braco.jpg" alt="img braco" />
            </div>
            <div className="imagem2 absolute">
              <img className="imagemMascara" src="Fitchek_Baixa-1.jpg" alt="img fitcheck" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;