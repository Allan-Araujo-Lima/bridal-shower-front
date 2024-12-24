import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { GetAllSugestions, UpdateSugestion } from "@/sugestionsRequest";
import { Label } from "@radix-ui/react-label";
import { LoaderCircle, Space } from "lucide-react";
import { useEffect, useState } from "react";

type ISugestion = {
    id: string;
    name: string;
    description: string;
    category: string;
    guest: string;
};

export const Home = () => {
    const [sugestions, setSugestions] = useState<ISugestion[]>([]);
    const [filteredSugestions, setFilteredSugestions] = useState<ISugestion[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [userName, setUserName] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchSugestions = async () => {
            try {
                setLoading(true);
                const response = await GetAllSugestions();
                setSugestions(response);
                setFilteredSugestions(response);
            } catch (error) {
                console.log("Erro ao buscar sugestões:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchSugestions();
    }, [userName]);

    useEffect(() => {
        const filtered = sugestions.filter((item) => {
            const matchesName = item.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
            return matchesName && matchesCategory;
        });
        setFilteredSugestions(filtered);
    }, [searchQuery, selectedCategory, sugestions]);

    const updateSugestion = async (id: string, name: string | undefined) => {
        try {
            const userName = localStorage.getItem("name") || name!;
            if (!localStorage.getItem("name")) localStorage.setItem("name", userName);

            await UpdateSugestion(id, userName);

            setSugestions((prev) =>
                prev.map((item) =>
                    item.id === id ? { ...item, guest: userName } : item
                )
            );
        } catch (error) {
            console.error("Erro ao atualizar sugestão:", error);
        }
    };

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
                    Você que, de alguma forma, foi importante em nossas vidas, está convidado à nossa <b>Festa de noivado</b>. Abaixo, algumas sugestões de presentes:
                </p>
            </section>

            <nav className="mb-6 text-center">
                <a href="/escolhidos" className="text-[#4D5891] hover:underline text-xl">Ver meus presentes escolhidos</a>
            </nav>

            <section className="mb-6">
                <div className="flex flex-col justify-center md:flex-row items-center gap-4">
                    <Input
                        type="text"
                        placeholder="Busque por nome do presente..."
                        className="w-full md:w-1/3"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />

                    <select
                        className="w-full md:w-1/3 p-2 border border-gray-300 rounded-md"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="">Todas as categorias</option>
                        <option value="Cozinha">Cozinha</option>
                        <option value="Área de Serviço">Área de Serviço</option>
                        <option value="Quarto">Quarto</option>
                        <option value="Banheiro">Banheiro</option>
                    </select>
                </div>
            </section>

            {loading &&
                <div className="flex justify-center items-center">
                    <p className="text-center text-xl text-gray-500">Carregando sugestões, aguarde um momento</p>
                    <div className="w-1" />
                    <LoaderCircle className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24" />
                </div>
            }
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto max-w-7xl">
                {filteredSugestions.map((sugestion) => (
                    <Card
                        key={sugestion.id}
                        className="shadow-lg rounded-lg overflow-hidden bg-white hover:scale-105 transition-transform duration-300 flex flex-col"
                    >
                        <img
                            src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${sugestion.id}.jpg`}
                            alt={sugestion.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="flex-grow">
                            <CardHeader className="p-4 text-center min-h-[120px]">
                                <CardTitle className="text-xl font-semibold text-[#4D5891]">
                                    {sugestion.name}
                                </CardTitle>
                                <CardDescription className="text-sm text-gray-500 mt-2 line-clamp-3">
                                    {sugestion.description}
                                </CardDescription>
                            </CardHeader>
                        </div>
                        <CardFooter className="mt-auto">
                            <Dialog>
                                <DialogTrigger asChild className="w-full h-fit">
                                    <Button
                                        disabled={sugestion.guest ? true : false}
                                        variant="outline"
                                        className="w-full bg-[#4D5891] text-white font-medium py-2 rounded-md shadow-md hover:bg-[#3C4678] transition-colors duration-200"
                                    >
                                        {sugestion.guest ? "Já escolhido" : "Quero presentear"}
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>{localStorage.getItem("name") ? "Confirmar o presente?" : "Digite seu nome completo"}</DialogTitle>
                                        <DialogDescription>
                                            Item selecionado: <b>{sugestion.name}</b>
                                            <br />
                                            Serve para reservamos nossa sugestão especialmente para você!
                                        </DialogDescription>
                                    </DialogHeader>
                                    {
                                        !localStorage.getItem("name") ?
                                            <div className="grid gap-4 py-4">
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Label htmlFor="name" className="text-left">
                                                        Nome:
                                                    </Label>
                                                    <Input id="name" className="col-span-3" onChange={(e) => setUserName(e.target.value.toLowerCase())} />
                                                </div>
                                            </div>
                                            :
                                            null
                                    }
                                    <DialogFooter>
                                        <DialogClose>
                                            <Button
                                                onClick={() => updateSugestion(sugestion.id, userName)}
                                                className="w-full bg-[#4D5891] text-white font-medium py-2 rounded-md shadow-md hover:bg-[#3C4678] transition-colors duration-200"
                                            >
                                                Salvar sugestão
                                            </Button>
                                        </DialogClose>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </main>
    );
};
