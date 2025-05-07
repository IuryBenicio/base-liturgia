import { FooterContainer } from "./styles";
import instaLogo from "../../assets/images/insta.svg";
import youtubeLogo from "../../assets/images/youtube.svg";

export default function FooterCM() {
  return (
    <FooterContainer>
      <span>
        <a href="https://www.instagram.com/baseigrejacrista/">
          <img src={instaLogo} alt="instagram" />
          @baseigrejacrista
        </a>
      </span>
      <span>
        <a href="https://www.youtube.com/c/BaseIgrejaCrist%C3%A3">
          <img src={youtubeLogo} alt="instagram" />
          /BaseIgrejaCristã
        </a>
      </span>
    </FooterContainer>
  );
}
