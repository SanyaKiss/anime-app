import { SingleAnime } from "@/types";
import { useGetTopAnimeQuery } from "@/redux/slices/animeApiSlice";
import { useMock } from "@/hooks/useMock";
import { Card } from "./Card/Card";
import { CardSection } from "./Card/CardSection";
import { Mock } from "./Card/Mock";
import Skeleton from "./Layout/Skeleton";

export function TopSeries() {
    const { data, isLoading } = useGetTopAnimeQuery(undefined);
    const { cards } = useMock(data);

    return (
        <CardSection title='Top Series'>
            {isLoading && <Skeleton count={6} width={192} height={288} />}
            {cards?.map((item: SingleAnime, idx) => (
                item.mal_id
                    ? <Card key={item.mal_id} item={item} />
                    : <Mock key={idx} />
            ))}
        </CardSection>
    );
}