# NLW Agents

Projeto desenvolvido durante um evento da [Rocketseat](https://rocketseat.com.br/), focado em criar uma aplicação moderna para gerenciamento de salas com agentes de IA e sistema de perguntas e respostas.

## 🚀 Tecnologias Utilizadas

### Frontend Framework
- **React 19** - Framework principal com as últimas funcionalidades
- **TypeScript 5.8** - Tipagem estática para melhor DX
- **Vite 7** - Build tool ultra-rápido e dev server

### Estilização
- **Tailwind CSS 4** - Framework utility-first com CSS variables
- **Shadcn/UI** - Sistema de componentes baseado em Radix UI
- **Lucide React** - Biblioteca de ícones SVG otimizada
- **Class Variance Authority** - Utility para variações de componentes

### Roteamento e Estado
- **React Router DOM 7** - Navegação client-side
- **TanStack Query 5** - Gerenciamento de estado de servidor com cache
- **React Hook Form 7** - Gerenciamento de formulários performático
- **Zod 3** - Validação e inferência de tipos

### Desenvolvimento
- **Biome 2** - Linting e formatação de código ultra-rápido
- **Vite Plugin React** - Hot Module Replacement otimizado

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── ui/                    # Componentes UI reutilizáveis (shadcn/ui)
│   ├── create-room-form.tsx   # Formulário de criação de salas
│   ├── question-form.tsx      # Formulário de perguntas
│   ├── question-item.tsx      # Item individual de pergunta
│   ├── question-list.tsx      # Lista de perguntas
│   └── room-list.tsx          # Lista de salas
├── http/
│   ├── use-create-room.ts     # Hook para criação de salas
│   ├── use-create-question.ts # Hook para criação de perguntas
│   ├── use-room-questions.ts  # Hook para buscar perguntas
│   └── use-rooms.ts           # Hook para buscar salas
├── lib/
│   ├── utils.ts               # Funções utilitárias (cn, etc.)
│   └── dayjs.ts               # Configuração de datas
├── pages/
│   ├── create-room.tsx        # Página de criação de salas
│   ├── room.tsx               # Página da sala individual
│   └── record-room-audio.tsx  # Página de gravação de áudio
├── app.tsx                    # Configuração de rotas e providers
└── main.tsx                   # Entry point da aplicação
```

## 🛠️ Padrões de Projeto

### Arquitetura
- **Atomic Design**: Componentes organizados em UI components reutilizáveis
- **Custom Hooks**: Camada de abstração para requisições HTTP
- **Path Aliases**: Configuração de `@/` para importações absolutas
- **Compound Components**: Uso de componentes compostos (Form, Card, etc.)

### Gerenciamento de Estado
- **Server State**: TanStack Query para cache e sincronização
- **Form State**: React Hook Form com validação via Zod
- **URL State**: React Router para estado de navegação

### Validação e Tipagem
- **Schema Validation**: Zod schemas para validação e inferência de tipos
- **Type Safety**: TypeScript strict mode habilitado
- **API Contracts**: Tipagem explícita para requests/responses

## ⚙️ Setup e Configuração

### Pré-requisitos
- **Node.js 18+**
- **npm ou yarn**

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

3. Configure as variáveis de ambiente:
```bash
# API backend (padrão: http://localhost:3333)
VITE_API_URL=http://localhost:3333
```

4. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

5. Acesse a aplicação em `http://localhost:5173`

### Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Gera build de produção (TypeScript + Vite)
npm run preview  # Visualiza o build de produção
```

## 🔧 Configurações Importantes

### Vite Configuration
- **React Plugin**: Hot Module Replacement otimizado
- **Tailwind Plugin**: Integração nativa com Tailwind CSS 4
- **Path Aliases**: `@/` aponta para `./src`

### Tailwind CSS
- **CSS Variables**: Suporte a temas dinâmicos
- **Component Classes**: Integração com shadcn/ui
- **Responsive Design**: Mobile-first approach

### TanStack Query
- **Query Client**: Configuração global para cache
- **Mutations**: Invalidação automática de queries
- **Error Handling**: Tratamento consistente de erros

### TypeScript
- **Strict Mode**: Configuração rigorosa habilitada
- **Path Mapping**: Resolução de imports absolutos
- **Type Inference**: Zod integration para formulários

## 🌐 Integração com Backend

A aplicação consome uma API REST que deve estar rodando em `http://localhost:3333` com os seguintes endpoints:

- `GET /rooms` - Lista todas as salas
- `POST /rooms` - Cria uma nova sala
- `GET /rooms/:roomId/questions` - Lista perguntas da sala
- `POST /rooms/:roomId/questions` - Cria pergunta na sala

---

Desenvolvido com ❤️ durante o **NLW** da **Rocketseat** 