import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";

export function SocialMedia() {
  return (
    <div className="flex flex-row-reverse gap-4">
      <a href="https://www.youtube.com/watch?v=e1OWVKtAp7s">
        <AiOutlineInstagram size={"2rem"} />
      </a>
      <a href="https://www.youtube.com/watch?v=Ev_hjExmAKc">
        <AiOutlineTwitter size={"2rem"} />
      </a>
      <a href="https://www.youtube.com/watch?v=PaEkgV1JOB4">
        <AiOutlineYoutube size={"2rem"} />
      </a>
    </div>
  );
}
