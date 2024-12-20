import { api } from "@/api/axios";

export const GetAllSugestions = async () => {
    try {
        const response = await api.get('/sugestions')
        return response.data;
    } catch (error: any) {
        if (error.response) {
            console.error("Erro na resposta da API:", error.response.data);
            throw { message: error.response.data };
        } else {
            console.error("Erro inesperado:", error.message || error);
            throw { message: error.message };
        }
    }
}

export const UpdateSugestion = async (id: string, name: string | null) => {
    try {
        console.log(name, "Update")
        const response = await api.patch(`/sugestions/${id}`, { guest: name })
        return response.data;
    } catch (error: any) {
        console.log(error)
    }
}