# Site Curso

Este projeto é um site de curso criado usando [Create React App](https://github.com/facebook/create-react-app).

## Estrutura do Projeto


## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Executa o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

A página será recarregada quando você fizer alterações.\
Você também verá quaisquer erros de lint no console.

### `npm test`

Inicia o executor de testes no modo interativo de observação.\
Veja a seção sobre [executando testes](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

### `npm run build`

Compila o aplicativo para produção na pasta `build`.\
Ele agrupa corretamente o React no modo de produção e otimiza a compilação para o melhor desempenho.

A compilação é minificada e os nomes dos arquivos incluem os hashes.\
Seu aplicativo está pronto para ser implantado!

Veja a seção sobre [implantação](https://facebook.github.io/create-react-app/docs/deployment) para mais informações.

### `npm run eject`

**Nota: esta é uma operação sem retorno. Uma vez que você `eject`, você não pode voltar!**

Se você não estiver satisfeito com a ferramenta de compilação e as escolhas de configuração, você pode `eject` a qualquer momento. Este comando removerá a dependência única de compilação do seu projeto.

Em vez disso, ele copiará todos os arquivos de configuração e as dependências transitivas (webpack, Babel, ESLint, etc) diretamente para o seu projeto para que você tenha controle total sobre eles. Todos os comandos, exceto `eject`, ainda funcionarão, mas eles apontarão para os scripts copiados para que você possa ajustá-los. Neste ponto, você está por sua conta.

Você nunca precisa usar `eject`. O conjunto de recursos curado é adequado para pequenas e médias implantações, e você não deve se sentir obrigado a usar esse recurso. No entanto, entendemos que essa ferramenta não seria útil se você não pudesse personalizá-la quando estivesse pronto para isso.

## Estrutura de Componentes

- `HeaderSection`: Componente que representa o cabeçalho do site.
- `Divider`: Componente que representa um divisor visual.
- `LearnSection`: Componente que descreve o que será aprendido no curso.
- `InvestSection`: Componente que incentiva o investimento na carreira.
- `CourseBlock`: Componente que representa um bloco de informações sobre o curso.

## Estilos

Os estilos são definidos usando arquivos CSS específicos para cada componente e Tailwind CSS para utilitários.

## Configuração do Tailwind CSS

A configuração do Tailwind CSS está definida no arquivo [tailwind.config.js](tailwind.config.js).

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
