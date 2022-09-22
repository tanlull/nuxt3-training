

export async function useGetApiVersion() {
    const { data } = await useFetch('https://api.codingthailand.com/api/version', {
        pick: ['data']
    });
    return { data };
}