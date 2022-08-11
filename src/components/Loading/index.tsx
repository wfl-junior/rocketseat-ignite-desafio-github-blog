import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoadingContainer } from "./styles";

interface LoadingProps {}

export const Loading: React.FC<LoadingProps> = () => (
  <LoadingContainer>
    <FontAwesomeIcon icon={faCircleNotch} />
  </LoadingContainer>
);
