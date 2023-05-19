import { Fragment } from 'react';
import { SingleAnime } from "@/types";
import { AddToFavorites } from '@/components/Elements/AddToFavorites';
import { Genres } from '@/components/Genres/Genres';
import { Loader } from '@/components/Layout/Navbar/Search/Loader';
import { Statics } from './Statics';

interface Props {
  anime?: SingleAnime;
}

export function Info({ anime }: Props) {
  return (
    <div className="flex flex-col items-center lg:items-stretch sm:flex-row h-max mt-6">
      {!anime && <Loader />}
      {anime && (
        <Fragment>
          <a href={anime.url} target="_blank" className='hover:ring-2 ring-slate-500 rounded-md'>
            <img
              className="mb-9 md:mb-0 h-96 w-60 rounded-md"
              src={anime?.images.webp.large_image_url}
            />
          </a>
          <div className='flex flex-col items-center gap-3 sm:hidden mb-8'>
            <h2 className="title text-center">
              {anime?.title}
            </h2>
            <AddToFavorites payload={anime} />
          </div>
          <div className="flex-1 px-2 flex flex-col max-h-max justify-between gap-12 sm:gap-0">
            <div className="flex justify-between text-slate-400 text-lg pl-3">
              <Statics anime={anime} />
            </div>
            <Genres genres={anime.genres} />
          </div>
        </Fragment>
      )}
    </div>
  );
}
