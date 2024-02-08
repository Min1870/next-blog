import { Suspense } from "react";
import styles from "./admin.module.css";
import AdminPosts from "@/components/adminPosts/AdminPost";
import AdminPostForm from "@/components/adminPostsForm/AdminPostForm";
import AdminUsers from "@/components/adminUser/AdminUser";
import AdminUserForm from "@/components/adminUserForm/AdminUserForm";
import { auth } from "@/lib/auth";

const AdminPage = async () => {
  const session = await auth();

  return (
    <div className="mt-[50px] flex flex-col gap-[100px]">
      <div className="flex flex-col md:flex-row gap-[100px]">
        <div className="flex-1">
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className="flex-1">
          <AdminPostForm userId={session?.user?.id} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-[100px]">
        <div className="flex-1">
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className="flex-1">
          <AdminUserForm />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
