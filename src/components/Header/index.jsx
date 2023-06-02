import Logo from "../../assets/logo.png";
import { StyledContainer } from "../../styles/grid";
import { StyledHeader } from "./style";

export const Header = () => {
   return (
      <StyledHeader>
         <StyledContainer>
            <div className="flexBox">
               <img src={Logo} alt="Logo do Lex Note" />
            </div>
         </StyledContainer>
      </StyledHeader>
   );
};
