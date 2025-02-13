import { api } from "@/api/axios";

export const GetEventsByUser = async () => {
    const token = localStorage.getItem('accessToken');
    try {
        const response = await api.get('/event/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(response.data)
        return response.data;
    } catch (error: any) {
        if (error.response) {
            console.error("Erro na resposta da API: ", error.response.data);
            throw { message: error.response.data };
        } else {
            console.error("Erro inesperado: ", error.message || error);
            throw { message: error.message }
        }
    }
}