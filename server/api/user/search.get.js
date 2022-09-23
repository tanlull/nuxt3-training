import User from "@/models/user";

//http://localhost:3000/api/user/search?fullname=Tan

export default defineEventHandler( async (event) => {
    const query = useQuery(event);
    return query;
});

