import { Link } from "react-router-dom";

export function SocialNetwork() {
  return (
    <div className="flex items-center justify-center mx-auto gap-x-20p">
      <Link
        to="https://web.facebook.com/Osjecko"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="w-40p h-40p cursor-pointer"
          src="/assets/icons/facebook.svg"
          alt="facebook"
        />
      </Link>
      <Link
        to="https://www.instagram.com/osjeckopivo/?hl=hr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="w-40p h-40p cursor-pointer"
          src="/assets/icons/instagram.svg"
          alt="instagram"
        />
      </Link>
      <Link
        to="https://www.youtube.com/@osjecko1664"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="w-40p h-40p cursor-pointer"
          src="/assets/icons/youtube.svg"
          alt="youtube"
        />
      </Link>
    </div>
  );
}
