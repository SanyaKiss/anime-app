import { useEffect, useState } from 'react';
import { CgHeart } from 'react-icons/cg';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addFavorite, deleteFavorite, selectFavorites } from '@/redux/slices/favoritesSlice';
import { SingleAnime } from '@/types';

interface Props {
   payload?: SingleAnime;
   size?: number;
}

export function AddToFavorites({ payload, size = 30 }: Props) {
   const { id } = useParams();

   const [isLiked, setIsLiked] = useState(false);

   const favorites = useAppSelector(selectFavorites);

   const dispatch = useAppDispatch();

   const handleClick = () => {
      if (isLiked) {
         dispatch(deleteFavorite(payload?.mal_id));
         return;
      }

      dispatch(addFavorite(payload));
   };

   useEffect(() => {
      favorites.find(item => item.mal_id === payload?.mal_id)
         ? setIsLiked(true) : setIsLiked(false);
   }, [favorites, id]);

   return (
      <div className='relative'>
         <CgHeart
            size={size}
            onClick={handleClick}
            className={`cursor-pointer  ${isLiked ? 'text-red-500' : 'text-slate-400'}
            hover:text-red-500 transition duration-300 ease-in-out`}
         />
      </div>
   );
}