import LoginForm from "@/pages/Auth/ui/AuthPage";
import Layout from "@/widgets/Layout/Layout";

export default function Auth() {
  return (
    <Layout type="login">
      <div className="container">
        <LoginForm />
      </div>
    </Layout>
  );
}
