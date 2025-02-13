import hands from "../../assets/home/hands.jpg"
import gifts from "../../assets/home/gifts.jpg"
import buying from "../../assets/home/buying.jpg"

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
            <div className="absolute inset-0 pointer-events-none" />

            <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-self-center">
                <div className="md:w-1/2 text-left space-y-6 mt-4 ml-4">
                    <p className="text-xs uppercase tracking-wide text-gray-500">A vida é um evento</p>
                    <h1 className="text-4xl font-serif font-bold text-gray-800">
                        Criando o <br /> Melhor Dia de Todos
                    </h1>
                    <p className="text-gray-600">
                        Com a <b>Wedding Now</b> você consegue gerenciar com facilidade as suas sugestões de presentes do seu evento, explore mais clicando no botão abaixo.
                    </p>
                    <button className="px-6 py-2 border border-[#e6beae] text-[#e6beae] rounded-full hover:bg-[#e6beae] hover:text-white transition">
                        Explore
                    </button>
                </div>

                <div className="md:w-1/2 relative mt-10 md:mt-0 flex justify-center">
                    <div className="relative">
                        <img
                            src={hands}
                            alt="Wedding Couple"
                            className="rounded-lg shadow-lg object-cover w-full max-w-md"
                        />
                    </div>
                </div>
            </div>

            <div className="w-full max-w-6xl mt-20 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 rounded-lg shadow-lg flex items-center justify-center" style={{ backgroundColor: colors.linen }}>
                        <img
                            src={gifts}
                            alt="Exemplo de Lista de Presentes"
                            className="rounded-lg"
                        />
                    </div>
                    <div className="p-6 rounded-lg shadow-lg flex items-center justify-center" style={{ backgroundColor: colors.linen }}>
                        <img
                            src={buying}
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