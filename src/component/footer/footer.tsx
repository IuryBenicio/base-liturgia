import { FooterContainer } from "./styles";
import instaLogo from "../../assets/images/insta.svg";
import youtubeLogo from "../../assets/images/youtube.svg";

export default function FooterCM() {
  return (
    <FooterContainer>
      <span>
        <img src={instaLogo} alt="instagram" />
        baseigrejacrista
      </span>
      <span>
        <img src={youtubeLogo} alt="instagram" />
        BaseIgrejaCristã
      </span>
    </FooterContainer>
  );
}
