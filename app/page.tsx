import Skills from "@/components/main/Skills";
import Hero from "@/components/main/Hero";
import Encryption from "@/components/main/Encryption";
import Projects from "@/components/main/Projects";
import Researches from "@/components/main/Researches";
import Footer from "@/components/main/Footer";

export default function Home() {
    return (
        <main className="h-full w-full">
            <div className="flex flex-col gap-20">
                <Hero />
                <Skills />
                <Encryption />
                <Projects />
                <Researches />
                <Footer />
            </div>
        </main>
    );
}
