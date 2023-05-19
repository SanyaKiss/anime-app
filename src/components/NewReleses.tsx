import { NewReleaseItem } from "@/types";
import { useGetWatchRecentEpisodesQuery } from "@/redux/slices/animeApiSlice";
import { useMock } from "@/hooks/useMock";
import { Card } from "./Card/Card";
import { CardSection } from "./Card/CardSection";
import { Mock } from "./Card/Mock";
import Skeleton from "./Layout/Skeleton";

export function NewReleases() {
  const { data, isLoading } = useGetWatchRecentEpisodesQuery(undefined);
  const { cards } = useMock(data);

  return (
    <CardSection title="New Releases">
      {isLoading && <Skeleton count={6} width={192} height={288} />}
      {cards?.map((item: NewReleaseItem, idx) =>
        item.entry ? (
          <Card key={item.entry.mal_id} item={item.entry} />
        ) : (
          <Mock key={idx} />
        )
      )}
    </CardSection>
  );
}
