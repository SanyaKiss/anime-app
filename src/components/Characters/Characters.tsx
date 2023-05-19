import { Fragment } from "react";
import { useGetTopCharactersQuery } from "@/redux/slices/animeApiSlice";
import { Character } from "./Character";
import Skeleton from "../Layout/Skeleton";

export function Characters() {
   const { data, isLoading } = useGetTopCharactersQuery(undefined);

   return (
      <Fragment>
         <h3 className="title text-center lg:text-left mb-8">Top Characters</h3>
         <div className="flex justify-center gap-8 flex-wrap">
            {isLoading && <Skeleton count={4} width={288} height={384} />}
            {data?.data.map(item => (
               <Character key={item.mal_id} item={item} />
            ))}
         </div>
      </Fragment>
   );
}