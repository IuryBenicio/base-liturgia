import { HeaderContainer } from "./style";
import logo from "../../assets/images/logo.png";

export default function HeaderCM() {
  return (
    <HeaderContainer>
      <img style={{ width: "120px" }} src={logo} alt="" />
      <span>Nossa Liturgia</span>
    </HeaderContainer>
  );
}
