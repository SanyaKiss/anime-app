import { Fragment } from "react";
import { Link } from "react-router-dom";
import Lottie from 'lottie-react';
// assets
import animationData from '@/assets/lotties/ghost.json';
// redux
import { useAppSelector } from "@/redux/hooks";
import { selectFavorites } from "@/redux/slices/favoritesSlice";
import { Card } from "@/components/Card/Card";
import { CardSection } from "@/components/Card/CardSection";

export function FavoritesPage() {
    const favorites = useAppSelector(selectFavorites);

    return (
        <section className="app-container px-4 overflow-x-hidden">
            {favorites.length > 0 ? (
                <CardSection title="Favorites">
                    {favorites.map(item => <Card item={item} key={item.mal_id} />)}
                </CardSection>
            ) : (
                <Fragment>
                    <h2 className="title text-center mt-12">
                        Looks like you don't have favorites yet 👀
                    </h2>
                    <Link to='/'>
                        <p className="title text-lg text-center mt-6 hover:underline cursor-pointer text-slate-400">
                            Click here to explore some!
                        </p>
                    </Link>
                    <Lottie
                        className='mx-auto'
                        animationData={animationData}
                        style={{ width: 400, height: 400 }}
                    />
                </Fragment>
            )}
        </section>
    );
}