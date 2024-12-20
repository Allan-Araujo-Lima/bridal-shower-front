import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

type ISugestion = {
    id: string;
    name: string;
    description: string;
    category: string;
    guest: string | null;
};

export const ChosenItemsPage = () => {
    const [chosenItems, setChosenItems] = useState<ISugestion[]>([]);

    useEffect(() => {
        // Simula uma requisição para buscar os itens escolhidos
        const fetchChosenItems = async () => {
            // Simulação de resposta com dados do backend
            const response: ISugestion[] = [
                {
                    id: "1",
                    name: "Cesto de roupa suja fechado",
                    description: "Cesto prático e fechado para armazenar roupas sujas de forma discreta.",
                    category: "Área de Serviço",
                    guest: "João Silva",
                },
                {
                    id: "2",
                    name: "Air fryer",
                    description: "Fritadeira elétrica que utiliza ar quente para preparar alimentos mais saudáveis.",
                    category: "Cozinha",
                    guest: "Maria Souza",
                },
            ];
            setChosenItems(response);
        };

        fetchChosenItems();
    }, []);

    return (
        <main className="p-6 text-[#203165]">
            <section className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#4D5891]">
                    Presentes Escolhidos 🎁
                </h1>
                <p className="text-lg md:text-xl text-gray-700">
                    Veja abaixo os itens que já foram reservados pelos convidados.
                </p>
            </section>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto max-w-7xl">
                {chosenItems.length > 0 ? (
                    chosenItems.map((item) => (
                        <Card
                            key={item.id}
                            className="shadow-lg rounded-lg overflow-hidden bg-white hover:scale-105 transition-transform duration-300 flex flex-col"
                        >
                            <img
                                src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${item.id}.jpg`}
                                alt={item.name}
                                className="w-full h-48 object-cover"
                            />
                            <CardHeader className="p-4 text-center min-h-[120px]">
                                <CardTitle className="text-xl font-semibold text-[#4D5891]">
                                    {item.name}
                                </CardTitle>
                                <CardDescription className="text-sm text-gray-500 mt-2 line-clamp-3">
                                    {item.description}
                                </CardDescription>
                            </CardHeader>
                            <div className="p-4 text-center">
                                <p className="text-gray-600 font-medium">
                                    Reservado por: <span className="text-[#4D5891]">{item.guest}</span>
                                </p>
                            </div>
                        </Card>
                    ))
                ) : (
                    <p className="text-center text-lg text-gray-500 col-span-full">
                        Nenhum item foi escolhido ainda.
                    </p>
                )}
            </div>
        </main>
    );
};
