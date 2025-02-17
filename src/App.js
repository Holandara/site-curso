import './App.css';
import { motion } from "motion/react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="inicio">
          {/* Grid Container */}
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

      {/* Divisao de seção
      <div className="divisaoContainer">
        <div className="divisao">
        </div>
      </div> */}

      {/* Seção Aprender */}
      <div className="container-aprender">
        <div className="titulo-aprender">O que você vai aprender?</div>
        <div className="secaoAprender flex flex-wrap md:flex-nowrap">
          {/* Coluna esquerda: Textos */}
          <div className="aprenderTextos flex flex-col gap-6 w-full md:w-2/4 p-4">
            <div className="textoItem">
              <div className="subtitulo-aprender">
                <span className="numeros">1</span> Dobras Cutâneas
              </div>
              <div className="descricao-aprender">
                Aprenda a realizar medições precisas para avaliação corporal.
              </div>
            </div>
            <div className="textoItem">
              <div className="subtitulo-aprender">
                <span className="numeros">2</span> Bioimpedância
              </div>
              <div className="descricao-aprender">
                Entenda como interpretar resultados de composição corporal.
              </div>
            </div>
            <div className="textoItem">
              <div className="subtitulo-aprender">
                <span className="numeros">3</span> Antropometria
              </div>
              <div className="descricao-aprender">
                Conheça os métodos mais eficazes para avaliação física.
              </div>
            </div>
            <div className="textoItem">
              <div className="subtitulo-aprender">
                <span className="numeros">4</span> Avaliação Muscular
              </div>
              <div className="descricao-aprender">
                Saiba medir e analisar a força e resistência muscular.
              </div>
            </div>
            <div className="textoItem">
              <div className="subtitulo-aprender">
                <span className="numeros">5</span> Planejamento de Treino
              </div>
              <div className="descricao-aprender">
                Utilize os dados obtidos para criar planos personalizados.
              </div>
            </div>
          </div>

          {/* Coluna direita: Imagens/SVG */}
          <div className="imagensAprender w-full md:w-2/4  p-4 text-center relative">
                <img className="fitcheckalta19" src="Fitcheck2_Alta-19.jpg" alt="img fitcheck2" />
          </div>
        </div>
      </div>
      
      {/* Divisao de seção
      <div className="divisaoContainer">
        <div className="divisao">
        </div>
      </div> */}

       {/*INVISTA NA SUA CARREIRA */}
      <div className="carreiraTexto">invista  <span className="carreiraTexto2">hoje</span> na sua <span className="carreiraTexto2">carreira!</span></div>
      <div class="flex md:flex-row-reverse flex-wrap">
  
          <div class="w-full md:w-2/4 bg-gray-500 p-4 text-center text-gray-200">
          CONTEUDO
          </div>

          <div class="w-full md:w-2/4 bg-gray-400 p-4 text-center text-gray-700">
          AQUI CONTEUDO
          </div>
      </div>


    </div>
  );
}

export default App;
