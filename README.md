# Victor.dev — portfólio estático

Site pessoal estático em HTML5 e CSS3 para apresentar o portfólio de Victor, os projetos em desenvolvimento e o produto Autônomo Pro.

## Como abrir localmente

Não há instalação, dependências ou processo de build.

1. Abra `index.html` diretamente no navegador; ou
2. Use a extensão Live Server do seu editor apontando para a raiz deste projeto.

As páginas também podem ser acessadas diretamente por `autonomo-pro.html` e `projetos.html`.

## Estrutura

```text
.
├── index.html
├── autonomo-pro.html
├── projetos.html
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── components.css
│   ├── style.css
│   ├── animations.css
│   └── responsive.css
└── assets/
    ├── icons/favicon.svg
    └── images/
        ├── victor-hero.png
        ├── victor-about.png
        └── projects/
```

## Personalização necessária

Todos os contatos são placeholders fáceis de localizar com uma busca por `INSERIR_`:

- `#INSERIR_GITHUB`
- `#INSERIR_INSTAGRAM`
- `#INSERIR_LINKEDIN`
- `mailto:INSERIR_EMAIL`
- `https://wa.me/INSERIR_NUMERO`
- `https://INSERIR_DOMINIO/` nas tags canonical e Open Graph.

Substitua os arquivos em `assets/images/victor-hero.png` e `assets/images/victor-about.png` caso queira trocar as fotos. Mantenha os mesmos nomes e o formato PNG para não precisar alterar os caminhos HTML.

## Publicação

- **GitHub Pages:** envie os arquivos para um repositório e, em *Settings → Pages*, selecione a branch e a pasta raiz (`/root`).
- **Netlify:** arraste a pasta do projeto para o painel de deploy ou conecte o repositório; o diretório de publicação é a raiz.
- **Vercel:** importe o repositório como projeto estático, sem comando de build e com a raiz como diretório de saída.

Antes de publicar, atualize os contatos e o domínio nas meta tags de cada página.
