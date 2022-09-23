import User from "@/models/user";

//localhost:3000/api/user/paginate?page=1&pageSize=10
export default defineEventHandler( async (event) => {
    const { page, pageSize } = useQuery(event);

    const user = await User.findAll({
        order: [['id', 'asc']],
        offset: Number(page - 1) * Number(pageSize),
        limit: Number(pageSize)
    }); 

    const totalRecord = await User.count();

    return {
        totalRecord: totalRecord,
        data: user
    };
});