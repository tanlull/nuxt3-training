import { useStorage } from "@vueuse/core";

export async function useLogin(email,password) {
    const config = useRuntimeConfig();
    const { data , error } = await useFetch('/login', {
        baseURL: config.public.backendUrl,
        method: 'POST',
        body: {
                email,
                password
            },
        initialCache : false,
    });
    return { data , error };
}

export async function useGetProfile() {
    const config = useRuntimeConfig();
    const tokenString = useStorage("token",null);
    const token = JSON.parse(tokenString.value);

    const { data , error } = await useFetch('/profile', {
        baseURL: config.public.backendUrl,
        method: 'GET',
        headers:{
            Authorization:"Bearer "+ token?.access_token,       
        },
        initialCache : false,
    });
    return { data , error };
}