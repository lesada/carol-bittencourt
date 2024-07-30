import { Container } from "./styles";

function Button({ ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <Container {...rest} />;
}

export default Button;
