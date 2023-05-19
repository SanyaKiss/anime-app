import { NewReleases } from "../NewReleses";
import { TopSeries } from "../TopSeries";

export function Cards() {
    return (
        <section className="mt-10">
            <NewReleases />
            <TopSeries />
        </section>
    );
}