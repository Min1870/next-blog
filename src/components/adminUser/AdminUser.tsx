import { getUsers } from "@/lib/data";
import Image from "next/image";
import { deleteUser } from "@/lib/action";

const AdminUsers = async () => {
  const users = await getUsers();

  return (
    <div className="">
      <h1>Users</h1>
      {users.map((user) => (
        <div
          className="my-[20px] mx-0 flex items-center justify-between gap-[20px]"
          key={user.id}
        >
          <div className="flex items-center gap-[20px]">
            <Image
              src={user.img || "/noAvatar.png"}
              alt=""
              width={50}
              height={50}
            />
            <span>{user.username}</span>
          </div>
          <form action={deleteUser}>
            <input type="hidden" name="id" value={user.id} />
            <button className="py-[5px] px-[10px] bg-[#dc143c97] rounded-[5px] border-none cursor-pointer">
              Delete
            </button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;
