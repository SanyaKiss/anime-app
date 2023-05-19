import { Cards } from "@/components/Card/Cards";
import { Characters } from "@/components/Characters/Characters";
import { Hero } from "@/components/Hero/Hero";

export function LandingPage() {
    return (
        <div className="p-4">
            <Hero />
            <Cards />
            <Characters />
        </div>
    );
}