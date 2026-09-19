👥 Cadastro de Usuários com React

🚧 Projeto em evolução, desenvolvido durante meus estudos de React.

Aplicação para cadastrar, visualizar e excluir usuários, com navegação entre páginas, componentes reutilizáveis e integração com APIs.

React • JavaScript • styled-components • React Router DOM • Axios

📌 Sobre o projeto

Este projeto foi desenvolvido para colocar em prática meus primeiros conhecimentos em React e entender como uma interface se comunica com um back-end.

A aplicação possui uma tela de cadastro com campos de nome, idade e e-mail, além de uma página que apresenta os usuários em cartões e permite excluí-los.

Também utilizei uma API externa para carregar avatares e criei um componente reutilizável para organizar as imagens do cabeçalho.

React ainda é novo para mim, mas já estou conseguindo adaptar funcionalidades, investigar problemas e organizar melhor o código. Cada dificuldade encontrada durante o desenvolvimento se tornou uma oportunidade para entender como a aplicação funciona.

🖼️ Prévia
Tela de cadastro
<img width="1753" height="960" alt="Captura de tela 2026-09-19 173340" src="https://github.com/user-attachments/assets/f02c36c5-1c4d-4ef3-8a09-fa2275ff9ff0" />
Formulário para inserir nome, idade e e-mail, com botões para cadastrar e acessar a listagem.

<!-- Insira aqui a imagem da tela de cadastro pelo editor do GitHub. -->

Tela de listagem
<img width="1774" height="986" alt="Captura de tela 2026-09-19 173251" src="https://github.com/user-attachments/assets/5956f17a-76d1-4516-94f4-12fdca2f59c5" />
Cartões com os dados dos usuários, avatares e opção de exclusão.

<!-- Insira aqui a imagem da tela de listagem pelo editor do GitHub. -->

✨ Funcionalidades

📝 Cadastro de usuários com nome, idade e e-mail.

📋 Listagem dos usuários retornados pelo back-end.

🗑️ Exclusão de usuários pela interface.

🔀 Navegação entre cadastro e listagem.

🖼️ Carregamento de avatares por uma API externa.

🧩 Componentes reutilizáveis entre as páginas.

🎨 Estilização com styled-components.

📐 Organização do layout com Flexbox e CSS Grid.

🛠️ Tecnologias e bibliotecas

Tecnologia

Utilização no projeto

React

Construção da interface e composição dos componentes

JavaScript

Lógica, eventos, listas e operações assíncronas

JSX

Estrutura da interface e exibição de dados

styled-components

Criação de componentes com estilos próprios

React Router DOM

Navegação entre as páginas

Axios

Requisições HTTP para comunicação com o back-end

CSS

Cores, dimensões, espaçamentos e adaptação do layout

Flexbox

Alinhamento e distribuição dos elementos

CSS Grid

Organização dos cartões e dos avatares em colunas

API de avatares

Fornecimento das imagens exibidas na interface

Ferramentas de desenvolvimento

VS Code: edição e organização do código.

Console do navegador: identificação de erros durante os testes.

Snippets: atalhos personalizados para facilitar a escrita de estilos.

🧩 Organização em componentes

Separei partes da interface para facilitar a reutilização e a manutenção:

Componente

Responsabilidade

TopBackground

Exibir o fundo do cabeçalho e receber conteúdo por children

AvatarGrid

Criar e organizar os avatares do cabeçalho

Button

Compartilhar os estilos dos botões

CardUser

Organizar a apresentação de cada usuário

AvatarUser

Estilizar a imagem do usuário

TrashIcon

Exibir o ícone utilizado na exclusão

Essa organização permite alterar um componente compartilhado sem repetir a mesma mudança em cada página.

🔄 Comunicação com o back-end

A interface utiliza Axios para enviar requisições à API.

O fluxo de uso inclui:

Preencher os dados na tela de cadastro.

Enviar os dados para o back-end.

Acessar a página de listagem.

Consultar e apresentar os usuários em cartões.

Solicitar a exclusão de um usuário pelo ícone da lixeira.

Os avatares são carregados separadamente, utilizando uma API externa.

Para utilizar as funcionalidades de dados, a API de back-end precisa estar em execução e seu endereço deve estar configurado no serviço de comunicação do front-end.

📚 Conceitos praticados

React

Criação de componentes funcionais.

Composição e reutilização de componentes.

Recebimento de conteúdo por children.

Gerenciamento de estado com useState.

Uso de useEffect no carregamento dos dados.

Renderização de listas com map.

Identificação dos itens com key.

Eventos de clique com onClick.

Navegação com useNavigate.

JavaScript

Funções e arrow functions.

Operações assíncronas com async/await.

Acesso a propriedades de objetos.

Manipulação e renderização de arrays.

Criação de elementos com Array.from.

Construção de URLs com template literals.

Importações e exportações de módulos.

Diferença entre exportação nomeada e export default.

CSS e estilização

Flexbox e CSS Grid.

Definição de colunas com grid-template-columns.

Espaçamento com gap, margin e padding.

Media queries para adaptação do layout.

Diferença entre height e min-height.

Proporção de imagens com aspect-ratio.

Ajuste de imagens com object-fit.

Bordas arredondadas com border-radius.

Cores no formato RGB.

Seletores para elementos internos.

Estados :hover e :active para interação visual.

🔎 Desafios e soluções

Imagens que não apareciam

Os componentes dos avatares e da lixeira estavam definidos como styled.div, embora recebessem um atributo src.

A correção foi utilizar styled.img, criando elementos capazes de exibir as imagens.

Erro ao excluir um usuário

A requisição utilizava um endereço de navegação da interface em vez do endpoint correto do back-end.

Esse problema me ajudou a entender a diferença entre trocar de página e enviar uma requisição para a API.

Grade de avatares que não era exibida

O componente do cabeçalho utilizava children como endereço de uma imagem. Quando passei a enviar uma grade inteira, essa estrutura deixou de funcionar.

A solução foi renderizar {children} diretamente dentro do componente, permitindo receber outros elementos React.

Tela branca após criar um componente

Uma importação sem chaves não correspondia à exportação nomeada do arquivo de estilos.

Aprendi a conferir a relação entre:

export const e importação com chaves.

export default e importação sem chaves.

Conteúdo ultrapassando o fundo

A altura fixa do contêiner não acompanhava o crescimento da lista.

O uso de min-height permitiu que o fundo crescesse conforme a quantidade de conteúdo.

💡 Minha evolução

Este projeto representa uma etapa importante do meu aprendizado.

Além de construir uma interface, comecei a entender a relação entre componentes, estilos, estado, navegação e requisições.

Ainda estou desenvolvendo minha base em React, mas já consigo experimentar mudanças, identificar alguns problemas por conta própria e buscar ajuda para compreender os pontos que ainda não conheço.

Meu objetivo é continuar evoluindo com prática, entendendo as decisões do código e transformando esse conhecimento em projetos cada vez mais completos.

🚀 Melhorias futuras

Permitir a edição dos dados dos usuários.

Aprimorar a validação dos campos.

Exibir mensagens de sucesso e erro.

Mostrar um indicador durante o carregamento.

Solicitar confirmação antes da exclusão.

Adicionar busca por nome ou e-mail.

Exibir uma mensagem quando não houver usuários cadastrados.

Melhorar a adaptação para diferentes tamanhos de tela.

Aprimorar a acessibilidade e a navegação por teclado.

Adicionar testes para os principais fluxos.

Desenvolvido durante meus estudos de React. 💻

Aprendendo na prática, entendendo os erros e evoluindo a cada funcionalidade.

## 📄 Licença

Este projeto está licenciado sob a licença **MIT**. Consulte o arquivo **LICENSE** para mais informações.

---

### Desenvolvido com ❤️ utilizando React, JavaScript e styled-components.

Aprendendo, superando desafios e evoluindo um componente por vez. 🚀
