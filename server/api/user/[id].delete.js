import User from "@/models/user";

export default defineEventHandler( async (event) => {
    const id = event.context.params.id;
//body
    const body = await useBody(event);


        const result = await User.destroy( {
        where: {
         id
        }
      });

    return {
        message:"Deleted Successfully",
        affectedCount: result[0]
    }
}
)