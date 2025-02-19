import React from 'react';
import './LearnSection.css';

const LearnSection = () => {
  return (
    <div className="container-aprender" id="sobre">
      <div className="titulo-aprender">O que você vai aprender?</div>
      <div className="secaoAprender flex flex-wrap md:flex-nowrap">
        {/* Coluna esquerda: Textos */}
        <div className="aprenderTextos flex flex-col gap-6 w-full md:w-2/4">
          {[
            "Dobras Cutâneas",
            "Bioimpedância",
            "Antropometria",
            "Avaliação Muscular",
            "Planejamento de Treino",
          ].map((item, index) => (
            <div key={index} className="textoItem">
              <div className="subtitulo-aprender">
                <span className="numeros">{index + 1}</span> {item}
              </div>
              <div className="descricao-aprender">
                Descrição sobre {item.toLowerCase()}.
              </div>
            </div>
          ))}
        </div>

        {/* Coluna direita: Imagens/SVG */}
        <div className="imagensAprender w-full md:w-2/4 p-4 text-center relative">
          <img className="fitcheckalta19" src="Fitcheck2_Alta-19.jpg" alt="img fitcheck2" />
        </div>
      </div>
    </div>
  );
};

export default LearnSection;