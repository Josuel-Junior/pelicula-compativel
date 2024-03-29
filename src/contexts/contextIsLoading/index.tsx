import { createContext, useState } from "react";

interface IIsloading {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const IsLoadingContext = createContext<IIsloading>({} as IIsloading);

const IsLoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <IsLoadingContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}
    >
      <>{children}</>
    </IsLoadingContext.Provider>
  );
};

export { IsLoadingProvider, IsLoadingContext };
