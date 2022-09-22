export async function useGetProduct(){
    const config = useRuntimeConfig();
    const {data,pending,error} = await useLazyFetch('/course',{
        baseURL: config.public.backendUrl,
        pick:['data'],
        initialCache:false,
    });
    return {data,pending,error};
}

export async function useGetProductById(id) {
    const config = useRuntimeConfig();
    const { data, pending, error} = await useLazyFetch('/course/' + id, {
        baseURL: config.public.backendUrl,
        pick: ['data'],
        initialCache: false,
    });

    return { data, pending, error };
}