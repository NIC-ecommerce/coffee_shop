import MainPage from "@/pages/Main/ui/MainPage";
import Layout from "@/widgets/Layout/Layout";

export default function Home() {
  return (
    <Layout type="login">
      <main className="container">
        <MainPage />
      </main>
    </Layout>
  );
}
