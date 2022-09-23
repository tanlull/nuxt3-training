import User from "@/models/user";

export default defineEventHandler( async (event) => {
    const method = event.req.method;
    
    switch (method) {
        case 'GET':
            return findAllUser();
        case 'POST':
            const body = await useBody(event);
            return createUser(body);
        default:
            sendError(event, createError({
                statusCode: 405,
                statusMessage: 'Method not allowed'
            }));
    }
});

//localhost:3000/api/user
const findAllUser = async () => {
    const user = await User.findAll({
        order: [['id','asc']]
    });
    return user;
}

//localhost:3000/api/user
const createUser = async (body) => {
    const user = await User.create({
        fullname: body.fullname
    });
    return {
        message: "เพิ่มข้อมูลสำเร็จ",
        data: user 
    };
}