import RegisterForm from "@/components/registerForm/page";

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[500px] bg-[--bgSoft] p-[50px] flex flex-col text-center gap-[30px] rounded-[5px]">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
