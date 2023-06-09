import { Card } from "@/components/Card/Card";
import Skeleton from "@/components/Layout/Skeleton";
import { useGetWatchPopularEpisodesQuery } from "@/redux/slices/animeApiSlice";

export function Populer() {
  const { data: populerEpisodes, isLoading } =
    useGetWatchPopularEpisodesQuery(undefined);

  return (
    <section>
      <h4 className="title mb-5 md:ml-4 cursor- text-center lg:text-start">
        Populer Episodes
      </h4>
      <div className="flex gap-3 lg:w-[400px] flex-wrap justify-center px-5 sm:px-0">
        {isLoading && <Skeleton count={6} width={176} height={220} />}
        {populerEpisodes?.data.map((item) => (
          <div key={item.entry.mal_id} className="md:w-44 w-32">
            <Card item={item.entry} />
          </div>
        ))}
      </div>
    </section>
  );
}
