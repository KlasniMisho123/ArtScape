import AuthenticationForm from "@/components/AuthenticationForm";
import DemoheroCol from "@/components/DemoheroCol";
import Hero from "@/components/Hero";
import  Main  from "@/components/Main";

export default function Home() {
  return (
    <Main>
      <Hero/>
      <DemoheroCol />
      <AuthenticationForm />
    </Main>
  );
}
