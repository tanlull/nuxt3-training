
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