import styled from 'styled-components';

const Button = ({ children, href, type = "button", fullWidth = false, onClick }) => {
  const isLink = Boolean(href);
  const Component = isLink ? 'a' : 'button';

  return (
    <StyledWrapper $fullWidth={fullWidth}>
      <Component 
        href={href} 
        type={!isLink ? type : undefined} 
        onClick={onClick} 
        className="button"
      >
        {children || "View Destination"}
      </Component>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: ${(props) => (props.$fullWidth ? "100%" : "fit-content")};
  display: ${(props) => (props.$fullWidth ? "block" : "inline-block")};

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 12px 22px;
    border-radius: 4px;
    transition: all 0.2s ease-in;
    position: relative;
    overflow: hidden;
    font-size: 16px;
    cursor: pointer;
    color: #ff4400;
    z-index: 1;
    border: 2px solid #ff4400;  
    background: transparent;
    text-decoration: none;
    white-space: nowrap;
    box-sizing: border-box;
  }

  .button:before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scaleY(1) scaleX(1.25);
    top: 100%;
    width: 140%;
    height: 180%;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  .button:after {
    content: "";
    position: absolute;
    left: 55%;
    transform: translateX(-50%) scaleY(1) scaleX(1.45);
    top: 180%;
    width: 160%;
    height: 190%;
    background-color: #ff4400;
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  .button:hover {
    color: #ffffff;
    border: 2px solid #ff4400;
  }

  .button:hover:before {
    top: -35%;
    background-color: #ff4400;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }

  .button:hover:after {
    top: -45%;
    background-color: #ff4400;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }
`;

export default Button;