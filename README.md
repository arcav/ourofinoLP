# Carnaval Ouro Fino 2026 - Landing Page

Esta é a Landing Page oficial do **Carnaval Ouro Fino 2026**, desenvolvida para proporcionar uma experiência imersiva, rápida e acessível para os visitantes da Estância Hidromineral Ouro Fino.

## 🚀 Tecnologias

O projeto foi construído com as tecnologias mais modernas do ecossistema web:

- **Next.js** - Framework React para produção.
- **React** - Biblioteca core para interface.
- **Tailwind CSS** - Estilização moderna e eficiente.
- **Framer Motion** - Animações fluidas e interações premium.
- **Lucide React** - Conjunto de ícones consistentes.
- **TypeScript** - Tipagem estática para maior segurança no código.

## ✨ Funcionalidades

- **Design Premium e Responsivo**: Totalmente otimizado para dispositivos móveis e desktops.
- **Acessibilidade de Alto Nível**: Foco em atingir score 95+ no Lighthouse, com semântica HTML correta e suporte a leitores de tela (ARIA attributes).
- **Programação Dinâmica**: Seção de cronograma com efeito "sticky stack" para as datas do evento.
- **Venda de Ingressos**: Cards de ingressos (Inteira e Meia) com integração direta para compra.
- **Localização Interativa**: Mapa integrado com rota direta para Waze e Google Maps.

## 🛠️ Como Executar

### Pré-requisitos

- Node.js (v18+)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/arcav/ourofinoLP.git
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📦 Scripts Disponíveis

- `npm run dev`: Inicia o servidor em modo de desenvolvimento.
- `npm run build`: Cria a versão otimizada para produção.
- `npm run start`: Inicia o servidor de produção com o build gerado.
- `npm run lint`: Executa a verificação de código com ESLint.
- `npm run build`: Gera o build standalone otimizado para Docker.

## 🐳 Docker

Este projeto está configurado para builds otimizados usando a funcionalidade `standalone` do Next.js.

### Build da Imagem
```bash
docker build -t oprofino-lp .
```

### Executando o Container
```bash
docker run -p 3000:3000 oprofino-lp
```

O container estará disponível em [http://localhost:3000](http://localhost:3000).

---

Desenvolvido para a **Estância Hidromineral Ouro Fino**.
