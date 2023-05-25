import { Card } from "@/components/Card/Card";
import { SingleAnime } from "@/types";
import { Fragment } from "react";

interface Props {
  items?: SingleAnime[];
}

export function GenreCards({ items }: Props) {
  return (
    <Fragment>
      {items?.map((item) => (
        <Card key={item.mal_id} item={item} />
      ))}
    </Fragment>
  );
}
