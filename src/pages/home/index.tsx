import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { GetAllSugestions, UpdateSugestion } from "@/sugestionsRequest";
import { Label } from "@radix-ui/react-label";
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
    const [name, setName] = useState(false);

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

    const updateSugestion = (id: string, name: string) => {
        console.log(id)
        if (localStorage.getItem('name')) {
            UpdateSugestion(id, localStorage.getItem('name'))
        } else {
            localStorage.setItem('name', name)
            UpdateSugestion(id, localStorage.getItem('name'))
        }
        setName(true)
    }

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
                                        variant="outline"
                                        className="w-full bg-[#4D5891] text-white font-medium py-2 rounded-md shadow-md hover:bg-[#3C4678] transition-colors duration-200"
                                    >
                                        Quero presentear
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Digite o seu nome</DialogTitle>
                                        <DialogDescription>
                                            Serve para reservamos nossa sugestão especialmente para você!
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="name" className="text-right">
                                                Nome
                                            </Label>
                                            <Input id="name" className="col-span-3" />
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button
                                            onClick={() => updateSugestion(sugestion.id, "Felca")}
                                            className="w-full bg-[#4D5891] text-white font-medium py-2 rounded-md shadow-md hover:bg-[#3C4678] transition-colors duration-200"
                                        >
                                            Salvar sugestão
                                        </Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </CardFooter>
                    </Card>
                ))}
            </div>

        </main >
    );
};
