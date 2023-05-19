import { SocialMedia } from "@/components/Layout/Footer/SocialMedia";

export function Footer() {
  return (
    <footer
      className="app-container text-white flex justify-between
     py-5 px-4 h-40 sm:py-10 gap-4 sm:flex-row flex-col items-center cursor-"
    >
      <h1 className="title">AnimeDB</h1>
      <SocialMedia />
    </footer>
  );
}
