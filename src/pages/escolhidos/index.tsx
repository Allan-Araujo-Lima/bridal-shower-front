import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { api } from "@/api/axios";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";


type ISugestion = {
    id: string;
    name: string;
    description: string;
    category: string;
    guest: string | null;
};

export const ChosenItemsPage = () => {
    const [chosenItems, setChosenItems] = useState<ISugestion[]>([]);
    const [userName, setUserName] = useState<string>();

    useEffect(() => {
        const guest = localStorage.getItem("name");
        const fetchChosenItems = async (guest: string) => {
            try {
                const response = await api.get(`/sugestions/${guest}`);
                setChosenItems(response.data);
            } catch (error) {
                console.error("Erro ao buscar sugestões:", error);
            }
        };

        fetchChosenItems(guest!);
    }, []);

    return (
        <main className="p-6 text-[#203165]">
            <section className="text-center mb-10">
                <div className="flex mb-4 w-full items-center justify-between">
                    <Link to="/" className="text-[#4D5891] self-start hover:underline">
                        <ArrowLeft />
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#4D5891] mx-auto">
                        Presentes Escolhidos 🎁
                    </h1>
                </div>
                <p className="text-lg md:text-xl text-gray-700">
                    Veja abaixo os itens que já foram reservados por você.
                </p>
            </section>
            {
                localStorage.getItem("name") ?
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
                                </Card>
                            ))
                        ) : (
                            <p className="text-center text-lg text-gray-500 col-span-full">
                                Nenhum item foi escolhido ainda.
                            </p>
                        )}
                    </div>
                    :
                    <div className="text-center">
                        <p className="text-lg text-gray-500">
                            Você precisa informar seu nome para ver os presentes escolhidos.
                        </p>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className="mt-4">Informar nome</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Informe seu nome</DialogTitle>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="name" className="text-left">
                                            Nome:
                                        </Label>
                                        <Input id="name" className="col-span-3" onChange={(e) => setUserName(e.target.value.toLowerCase())} />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <DialogClose>
                                        <Button
                                            onClick={() => {
                                                localStorage.setItem("name", userName!);
                                                window.location.reload();
                                            }}
                                        >
                                            Confirmar
                                        </Button>
                                    </DialogClose>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>

            }
        </main>
    );
};
