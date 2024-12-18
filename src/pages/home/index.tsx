import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GetAllSugestions } from "@/sugestionsRequest";
import { useEffect, useState } from "react";

type ISugestion = {
    id: string;
    name: string;
    description: string;
    categoty: string;
    guest: string;
};

export const Home = () => {
    const [sugestions, setSugestions] = useState<ISugestion[]>([]);

    useEffect(() => {
        const fetchSugestions = async () => {
            try {
                const response = await GetAllSugestions();
                setSugestions(response);
            } catch (error) {
                console.log("Erro ao buscar sugestões:", error);
            }
        };

        fetchSugestions();
    }, []);

    return (
        <main className="p-6 text-[#203165]">
            <section className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#4D5891]">
                    Venha celebrar a união de Lara e Allan 💍
                </h1>
                <h2 className="text-lg md:text-2xl font-light leading-relaxed text-[#203165]">
                    Em 03/12/2018 nós começamos nossa jornada, com seus altos e baixos. Agora, demos um novo passo em nosso relacionamento e resolvemos juntar as escovas 🪥🪥.
                </h2>
                <p className="mt-4 text-gray-700 text-lg md:text-xl">
                    Você que, de alguma forma, foi importante em nossas vidas, está convidado ao nosso <b>Chá de panela</b>. Abaixo, algumas sugestões de presentes:
                </p>
            </section>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto max-w-7xl">
                {sugestions.map((sugestion) => (
                    <Card
                        key={sugestion.id}
                        className="shadow-lg rounded-lg overflow-hidden bg-white hover:scale-105 transition-transform duration-300"
                    >
                        <img
                            src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${sugestion.id}.jpg`}
                            alt={sugestion.name}
                            className="w-full h-48 object-cover"
                        />
                        <CardHeader className="p-4 text-center">
                            <CardTitle className="text-xl font-semibold text-[#4D5891]">
                                {sugestion.name}
                            </CardTitle>
                            <CardDescription className="text-sm text-gray-500 mt-2">
                                {sugestion.description}
                            </CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </main>
    );
};
