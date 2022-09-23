import User from "@/models/user";

export default defineEventHandler( async (event) => {
    const id = event.context.params.id;
    const user = await User.findByPk(id);
    return user;
});