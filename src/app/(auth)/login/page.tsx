import LoginForm from "@/components/loginForm/page";
import { handleGithubLogin } from "@/lib/action";
import { auth } from "@/lib/auth";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[500px] bg-[--bgSoft] p-[50px] flex flex-col text-center gap-[30px] rounded-[5px]">
        <form action={handleGithubLogin}>
          <button>Login with Github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
