import { InputContainer } from "./styles";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {}

export const Input: React.FC<InputProps> = props => (
  <InputContainer {...props} />
);
