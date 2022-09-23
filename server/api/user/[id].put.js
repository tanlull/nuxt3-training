import User from "@/models/user";

export default defineEventHandler( async (event) => {
    const id = event.context.params.id;
//body
    const body = await useBody(event);

    const result = await User.update({  fullname: body.fullname }, {
        where: {
         id
        }
      });

    return {
        message:"Update Success",
        affectedCount: result[0]
    }
}
)