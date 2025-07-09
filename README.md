# NLW Agents

Projeto desenvolvido durante um evento da [Rocketseat](https://rocketseat.com.br/), focado em criar uma aplicação moderna para gerenciamento de salas e agentes.

## 🚀 Tecnologias Utilizadas

- **React 19** - Framework principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework de estilização
- **Shadcn/UI** - Sistema de componentes baseado em Radix UI
- **React Router DOM** - Navegação client-side
- **TanStack Query** - Gerenciamento de estado de servidor
- **Lucide React** - Biblioteca de ícones
- **Biome** - Linting e formatação de código

## 📁 Estrutura do Projeto

```
src/
├── components/
│   └── ui/           # Componentes UI reutilizáveis
├── lib/
│   └── utils.ts      # Funções utilitárias
├── pages/
│   ├── create-room.tsx
│   └── room.tsx
├── app.tsx           # Configuração de rotas
└── main.tsx          # Entry point da aplicação
```

## 🛠️ Padrões de Projeto

- **Atomic Design**: Componentes organizados em UI components reutilizáveis
- **Custom Hooks**: Uso do TanStack Query para gerenciamento de estado
- **Path Aliases**: Configuração de `@/` para importações absolutas
- **Code Quality**: Biome com preset ultracite para linting consistente

## ⚙️ Setup e Configuração

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd web
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Acesse a aplicação em `http://localhost:5173`

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção

## 🔧 Configurações Importantes

- **Tailwind CSS**: Configurado com CSS variables e base color zinc
- **Shadcn/UI**: Estilo "new-york" com componentes em TypeScript
- **Vite**: Plugin React configurado com alias para imports
- **TanStack Query**: Cliente configurado para gerenciamento de estado de servidor 

---

Desenvolvido com ❤️ durante o **NLW** da **Rocketseat** 