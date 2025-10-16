import React from 'react';

// --- SVG Icon Components ---
const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-3 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const ChartBarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-3 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-3 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

// --- Type Definition for a Blog Post ---
type Post = {
  id: number;
  title: string;
  summary: string;
  link: string;
};

// Main App Component: The Blog Page
export default function App() {
  const blogPosts: Post[] = [
    {
      id: 1,
      title: "Como Criar uma Memecoin de Sucesso em 2025",
      summary: "Memecoins não são apenas piadas; são um fenômeno cultural. Aprenda os passos essenciais para criar uma memecoin com potencial viral, desde o conceito e o tokenomics até a construção de uma comunidade forte e engajada.",
      link: "https://www.createtoken.sbs/",
    },
    {
      id: 2,
      title: "NFTs para Artistas e Criadores: O Guia Definitivo",
      summary: "Entenda como os NFTs (Tokens Não Fungíveis) estão revolucionando o mundo da arte digital e da propriedade intelectual. Saiba como transformar sua arte em um ativo digital único na blockchain de forma simples e segura.",
      link: "https://www.createtoken.sbs/",
    },
    {
      id: 3,
      title: "Além das Memes: Criando Tokens com Utilidade Real",
      summary: "Um token pode ser muito mais do que um ativo especulativo. Explore o conceito de 'utility tokens' e descubra como agregar valor real ao seu projeto, criando um ecossistema onde seu token tem uma função prática e indispensável.",
      link: "https://www.createtoken.sbs/",
    },
    {
      id: 4,
      title: "Segurança em Smart Contracts: O Que Você Precisa Saber",
      summary: "A segurança do seu smart contract é a base de todo o seu projeto. Conheça os riscos mais comuns e entenda por que utilizar uma plataforma confiável e auditada é a melhor maneira de proteger seus ativos e a confiança dos seus investidores.",
      link: "https://www.createtoken.sbs/",
    },
    {
      id: 5,
      title: "Tokenomics 101: Desenhando a Economia do Seu Token",
      summary: "O sucesso de um token depende de uma tokenomics bem planejada. Aprenda sobre fornecimento total, distribuição, queimas e como criar um modelo econômico sustentável que incentive o crescimento a longo prazo.",
      link: "https://www.createtoken.sbs/",
    },
    {
      id: 6,
      title: "Marketing para Cripto: Como Construir uma Comunidade Forte",
      summary: "Sua comunidade é seu maior ativo. Descubra estratégias de marketing digital focadas no mercado de cripto, utilizando plataformas como Twitter (X), Telegram e Discord para criar engajamento e impulsionar seu projeto.",
      link: "https://www.createtoken.sbs/",
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100 font-sans">
      <div className="container mx-auto px-4 py-8 md:py-12">
        
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
            Guia do Criador de Cripto
          </h1>
          <p className="text-lg md:text-xl text-teal-400">
            Seu guia completo para criar memecoins, tokens e NFTs de sucesso.
          </p>
        </header>

        <CallToAction />

        <main>
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Artigos Essenciais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <BlogPost key={post.id} post={post} />
            ))}
          </div>
        </main>
        
        <EssentialTools />

        <FAQ />
        
        <Footer />
        
      </div>
    </div>
  );
}

// BlogPost Component
function BlogPost({ post }: { post: Post }) {
  return (
    <article className="bg-gray-800 rounded-lg shadow-xl p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300">
      <div>
        <h2 className="text-2xl font-bold mb-3 text-white">{post.title}</h2>
        <p className="text-gray-300 mb-4">{post.summary}</p>
      </div>
      <a
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-teal-400 font-semibold hover:text-teal-300 self-start mt-4"
      >
        Comece a criar agora &rarr;
      </a>
    </article>
  );
}

// CallToAction Component
function CallToAction() {
  return (
    <section className="bg-gray-800/50 border border-teal-500/30 rounded-lg shadow-2xl text-center p-8 md:p-12 my-12">
      <h2 className="text-3xl font-bold mb-4 text-white">
        Pronto para Lançar seu Próprio Token?
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-6">
        Não precisa ser um expert em programação. Com a ferramenta certa, você pode criar e lançar sua criptomoeda, memecoin ou coleção de NFTs em minutos, de forma segura e eficiente.
      </p>
      <a
        href="https://www.createtoken.sbs/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-teal-500 text-gray-900 font-bold text-lg px-8 py-3 rounded-md hover:bg-teal-400 transition-colors duration-300 shadow-lg"
      >
        Crie seu Token Agora
      </a>
    </section>
  );
}

// EssentialTools Component with Icons
function EssentialTools() {
  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">Ferramentas Essenciais do Criador</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
          <CodeIcon />
          <h3 className="text-xl font-semibold mb-2 text-teal-400">Gerador de Contrato</h3>
          <p className="text-gray-300">Crie seu smart contract de forma segura e sem código com plataformas como a CreateToken.sbs.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
          <ChartBarIcon />
          <h3 className="text-xl font-semibold mb-2 text-teal-400">Análise de Mercado</h3>
          <p className="text-gray-300">Utilize Dex Screener e CoinGecko para acompanhar o mercado e analisar concorrentes.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
          <UsersIcon />
          <h3 className="text-xl font-semibold mb-2 text-teal-400">Comunicação</h3>
          <p className="text-gray-300">Construa e gerencie sua comunidade utilizando Discord, Telegram e Twitter (X).</p>
        </div>
      </div>
    </section>
  );
}

// FAQ Component
function FAQ() {
  const faqData = [
    {
      question: "Quanto custa para criar um token?",
      answer: "Os custos podem variar. O principal custo é a 'taxa de gas' da blockchain para registrar o smart contract. Usar uma plataforma como a CreateToken.sbs simplifica e otimiza esse processo, tornando-o mais acessível."
    },
    {
      question: "Meu token estará seguro?",
      answer: "A segurança depende da qualidade do smart contract. Ao usar um gerador confiável, você utiliza contratos pré-auditados e testados, o que reduz drasticamente os riscos de falhas e hacks."
    },
    {
      question: "Criei meu token. E agora?",
      answer: "Após a criação, o foco é em três áreas: 1) Prover liquidez em uma exchange descentralizada (DEX) para que as pessoas possam negociá-lo. 2) Construir uma comunidade engajada. 3) Executar sua estratégia de marketing."
    }
  ];

  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">Perguntas Frequentes (FAQ)</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-5">
            <h3 className="font-semibold text-lg text-teal-400 mb-2">{item.question}</h3>
            <p className="text-gray-300">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="text-center mt-16 border-t border-gray-700 pt-8">
      <p className="text-gray-500">
        &copy; {new Date().getFullYear()} Guia do Criador de Cripto. Todos os direitos reservados.
      </p>
       <p className="text-gray-600 text-sm mt-2">
        Promovendo a criação de tokens de forma segura com <a href="https://www.createtoken.sbs/" className="underline hover:text-teal-400">CreateToken.sbs</a>.
      </p>
    </footer>
  );
}

