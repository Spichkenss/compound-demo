import { useState } from "react"
import { Button, ButtonLabel, ButtonLoader } from "../../../shared/button"
import { Loader } from "../../../shared/loader"

export const LoginButton = () => {
  const [isLogining, setIsLogining] = useState(false);

  const handleClick = () => {
    setIsLogining(true);
    setTimeout(() => {
      setIsLogining(false);
    }, 10000);
  }

  return (
    <Button onClick={handleClick} isLoading={isLogining}>
      <ButtonLabel>Login</ButtonLabel>
      <ButtonLoader>
        <Loader.Spinner />
      </ButtonLoader>
    </Button>
  )
}