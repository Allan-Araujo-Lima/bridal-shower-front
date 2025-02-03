export const Home = () => {
    // Color palette array
    const colors = {
        lightCyan: '#ecf8f8',
        linen: '#eee4e1',
        almond: '#e7d8c9',
        melon: '#e6beae',
        taupe: '#b2967d',
    };

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.lightCyan }}>
            {/* Hero Section */}
            <div className="flex flex-col items-center text-center mt-20">
                <h1 className="text-5xl font-bold mb-4" style={{ color: colors.taupe }}>
                    A Melhor Maneira de Gerenciar Presentes de Casamento
                </h1>
                <p className="text-xl mb-8" style={{ color: colors.taupe }}>
                    Simplifique a gestão de presentes para o seu casamento com nossa plataforma intuitiva.
                </p>
                <div className="space-x-4">
                    <button
                        className="px-6 py-3 rounded-lg transition duration-300"
                        style={{ backgroundColor: colors.melon, color: colors.taupe }}
                        onMouseOver={(e) => ((e.target as HTMLButtonElement).style.backgroundColor = colors.almond)}
                        onMouseOut={(e) => ((e.target as HTMLButtonElement).style.backgroundColor = colors.melon)}
                    >
                        Comece Agora
                    </button>
                    <button
                        className="px-6 py-3 rounded-lg border transition duration-300"
                        style={{ borderColor: colors.taupe, color: colors.taupe }}
                        onMouseOver={(e) => {
                            (e.target as HTMLButtonElement).style.backgroundColor = colors.taupe;
                            (e.target as HTMLButtonElement).style.color = colors.lightCyan;
                        }}
                        onMouseOut={(e) => {
                            (e.target as HTMLButtonElement).style.backgroundColor = 'transparent';
                            (e.target as HTMLButtonElement).style.color = colors.taupe;
                        }}
                    >
                        Saiba Mais
                    </button>
                </div>
            </div>

            {/* Image Section */}
            <div className="w-full max-w-6xl mt-20 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 rounded-lg shadow-lg flex items-center justify-center" style={{ backgroundColor: colors.linen }}>
                        <img
                            src="https://via.placeholder.com/500x300"
                            alt="Exemplo de Lista de Presentes"
                            className="rounded-lg"
                        />
                    </div>
                    <div className="p-6 rounded-lg shadow-lg flex items-center justify-center" style={{ backgroundColor: colors.linen }}>
                        <img
                            src="https://via.placeholder.com/500x300"
                            alt="Integração com Lojas"
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div id="features" className="w-full max-w-6xl mt-20 mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8" style={{ color: colors.taupe }}>Funcionalidades</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: colors.linen }}>
                        <h3 className="text-xl font-bold mb-4" style={{ color: colors.taupe }}>Lista de Presentes</h3>
                        <p style={{ color: colors.taupe }}>Crie e gerencie sua lista de presentes de forma fácil e rápida.</p>
                    </div>
                    <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: colors.linen }}>
                        <h3 className="text-xl font-bold mb-4" style={{ color: colors.taupe }}>Integração com Lojas</h3>
                        <p style={{ color: colors.taupe }}>Conecte-se com as melhores lojas e facilite a compra de presentes.</p>
                    </div>
                    <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: colors.linen }}>
                        <h3 className="text-xl font-bold mb-4" style={{ color: colors.taupe }}>Acompanhamento em Tempo Real</h3>
                        <p style={{ color: colors.taupe }}>Acompanhe os presentes recebidos em tempo real.</p>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="w-full max-w-6xl mt-20 mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8" style={{ color: colors.taupe }}>O Que Dizem Nossos Clientes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: colors.linen }}>
                        <p className="italic" style={{ color: colors.taupe }}>"A plataforma facilitou muito a organização dos presentes do nosso casamento. Recomendo!"</p>
                        <p className="font-bold mt-4" style={{ color: colors.taupe }}>- Ana e João</p>
                    </div>
                    <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: colors.linen }}>
                        <p className="italic" style={{ color: colors.taupe }}>"Adoramos a integração com as lojas, foi muito prático para os nossos convidados."</p>
                        <p className="font-bold mt-4" style={{ color: colors.taupe }}>- Maria e Pedro</p>
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="w-full max-w-6xl mt-20 mx-auto p-8 rounded-lg text-center" style={{ backgroundColor: colors.melon }}>
                <h2 className="text-3xl font-bold mb-4" style={{ color: colors.taupe }}>Pronto para Simplificar Seu Casamento?</h2>
                <p className="text-xl mb-8" style={{ color: colors.taupe }}>Comece agora e torne a gestão de presentes a parte mais fácil do seu planejamento.</p>
                <button
                    className="px-6 py-3 rounded-lg transition duration-300"
                    style={{ backgroundColor: colors.taupe, color: colors.lightCyan }}
                    onMouseOver={(e) => ((e.target as HTMLButtonElement).style.backgroundColor = colors.almond)}
                    onMouseOut={(e) => ((e.target as HTMLButtonElement).style.backgroundColor = colors.taupe)}
                >
                    Comece Agora
                </button>
            </div>

            {/* Footer */}
            <footer className="w-full max-w-6xl mt-20 py-6 mx-auto border-t" style={{ borderColor: colors.almond }}>
                <div className="text-center" style={{ color: colors.taupe }}>
                    © 2023 Presentes de Casamento. Todos os direitos reservados.
                </div>
            </footer>
        </div>
    );
};