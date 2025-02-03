import { useEffect, useState } from 'react';

import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

import {
    ChevronDown,
    Menu,
    PartyPopper,
    Gift,
    UserRoundCheck,
    XIcon,
    ChevronDownIcon,
} from 'lucide-react';

import Logo from "../../assets/Logo.svg"
import { api } from '@/api/axios';

const products = [
    { name: 'Evento', description: 'Verifique as informações do seu evento', href: '/meu-evento', icon: PartyPopper },
    { name: 'Sugestões', description: 'Gerencie e crie novas sugestões de presentes', href: '/minhas-sugestoes', icon: Gift },
    { name: 'Convidados', description: 'Verifique os presentes escolhidos pelos seus convidados', href: '/convidados', icon: UserRoundCheck },
];

export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const isAuthenticated = async () => {
            try {
                await api.get('/auth/user');
                return setAuthenticated(true);
            } catch (error: any) {
                console.log(error.response)
                if (error.response.statusCode === 401) {
                    return setAuthenticated(false)
                }
                console.error('erro ao verificar usuário')
            }
        }

        isAuthenticated();
    }, [])

    return (
        <header className="bg-white border-b">
            <nav className="container mx-auto flex items-center justify-between p-4">
                <div className="flex items-center">
                    <a href="/" className="text-xl font-bold">
                        <span className="sr-only">Logo da Empresa</span>
                        <img
                            alt="Logo"
                            src={Logo}
                            className="h-24 w-auto"
                        />
                    </a>
                </div>
                <div className="hidden lg:flex items-center gap-8">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="ghost" className="flex items-center gap-2">
                                Meu evento
                                <ChevronDown className="h-4 w-4" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-72">
                            <div className="grid gap-4">
                                {products.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center gap-4 p-2 hover:bg-gray-100 rounded"
                                    >
                                        <item.icon className="h-6 w-6 text-gray-600" />
                                        <div>
                                            <p className="text-sm font-medium">{item.name}</p>
                                            <p className="text-xs text-gray-500">{item.description}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </PopoverContent>
                    </Popover>
                    <a href="#" className="text-sm font-medium hover:underline">
                        Sobre nós
                    </a>
                </div>
                {
                    authenticated ? (
                        <div className='lg:flex items-center gap-8'>
                            <div className="hidden lg:flex">
                                <a href="/login" className="text-sm font-medium hover:underline" onClick={() => localStorage.clear()}>
                                    Sair
                                </a>
                            </div>
                        </div>
                    ) : (
                        <div className='lg:flex items-center gap-8'>
                            <div className="hidden lg:flex">
                                <a href="/login" className="text-sm font-medium hover:underline">
                                    Entrar →
                                </a>
                            </div>
                            <div className="hidden lg:flex">
                                <a href="/registro" className="text-sm font-medium hover:underline">
                                    Registrar-se →
                                </a>
                            </div>
                        </div>
                    )
                }
                <button
                    className="lg:hidden p-2"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <Menu className="h-6 w-6" />
                </button>
            </nav>

            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Weddin Now</span>
                            <img
                                alt="Weddin Now"
                                src={Logo}
                                className="h-8 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                        Meu evento
                                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {products.map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Sobre Nós
                                </a>
                            </div>
                            {
                                authenticated ?
                                    <div className="py-6">
                                        <a
                                            href="/login"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            Sair
                                        </a>
                                    </div>
                                    :
                                    <div className="py-6">
                                        <a
                                            href="/login"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            Entrar
                                        </a>
                                        <a
                                            href="/registro"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            Registrar-se
                                        </a>
                                    </div>
                            }
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}
