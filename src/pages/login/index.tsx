import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useAuth from "@/hooks/use-auth";
import { useToast } from "@/hooks/use-toast";

const colors = {
    lightCyan: "#ecf8f8",
    linen: "#eee4e1",
    almond: "#e7d8c9",
    melon: "#e6beae",
    taupe: "#b2967d",
};

export const Login = () => {
    const { onLogin } = useAuth();
    const { toast } = useToast();
    const navigate = useNavigate();

    const formSchema = z.object({
        email: z.string().email("Email inválido."),
        password: z.string()
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    });

    const handleSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await onLogin(values);

            toast({
                title: "Sucesso!",
                description: "Login efetuado com sucesso!",
                variant: "default",
            });
            navigate("/meus_eventos");
        } catch (err: any) {
            let errorMesage = "Erro inesparado, tente novamente mais tarde"
            if (err?.message.message === 'User not found') {
                errorMesage = "Usuário não encontrado";
            } else if (err?.message.message === 'Wrong password or email') {
                errorMesage = "Email ou senha incorretos";
            }
            form.setError("root", {
                type: "manual",
                message: errorMesage,
            });
        }
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen px-6 py-8 md:px-4" style={{ backgroundColor: colors.lightCyan }}>
            <Link to="/" className="absolute top-4 left-4 text-[#4D5891] hover:underline flex items-center gap-2">
                <ArrowLeft size={20} />
                <span className="text-sm">Voltar</span>
            </Link>
            <Card className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl shadow-lg rounded-lg" style={{ backgroundColor: colors.linen }}>
                <CardContent className="p-6 md:p-8">
                    <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold text-center mb-6" style={{ color: colors.taupe }}>
                        Login
                    </h1>
                    <Form {...form}>
                        <form className="space-y-4" onSubmit={form.handleSubmit(handleSubmit)}>
                            <FormField control={form.control} name="email" render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700">E-mail</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="exemplo@gmail.com" className="border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
                                    </FormControl>
                                    <FormMessage className="text-red-500 text-sm">
                                        {form.formState.errors.email?.message}
                                    </FormMessage>
                                </FormItem>
                            )} />
                            <FormField control={form.control} name="password" render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700">Senha</FormLabel>
                                    <FormControl>
                                        <Input type="password" {...field} className="border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
                                    </FormControl>
                                    <FormMessage className="text-red-500 text-sm">
                                        {form.formState.errors.password?.message}
                                    </FormMessage>
                                </FormItem>
                            )} />
                            <button className="w-full py-2 text-white transition-transform transform hover:scale-105 rounded-md disabled:opacity-50" style={{ backgroundColor: colors.taupe }} type="submit" disabled={form.formState.isSubmitting}>
                                {form.formState.isSubmitting ? "Entrando..." : "Entrar"}
                            </button>
                        </form>
                        {form.formState.errors.root && (
                            <p className="text-red-500 text-sm text-center mt-2">
                                {form.formState.errors.root.message}
                            </p>
                        )}
                        <p className="mt-4 text-center text-sm" style={{ color: colors.melon }}>
                            Não tem uma conta?
                            <Link to="/registro" className="font-semibold hover:underline ml-1" style={{ color: colors.taupe }}>
                                Cadastre-se
                            </Link>
                        </p>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
};
