import { createContext, useState } from "react";
import { DataPhone } from "../../interfaces";

interface ISelectModelAndBrand {
  selectModel: string;
  setSelectModel: React.Dispatch<React.SetStateAction<string>>;
  selectBrand: string;
  setSelectBrand: React.Dispatch<React.SetStateAction<string>>;
  listModel: DataPhone[];
  setListModel: React.Dispatch<React.SetStateAction<DataPhone[]>>;
}

const SelectModelAndBrandContext = createContext<ISelectModelAndBrand>(
  {} as ISelectModelAndBrand
);

const SelectModelAndBrandProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectModel, setSelectModel] = useState("");
  const [selectBrand, setSelectBrand] = useState("");
  const [listModel, setListModel] = useState<DataPhone[]>([]);

  return (
    <SelectModelAndBrandContext.Provider
      value={{
        selectModel,
        setSelectModel,
        selectBrand,
        setSelectBrand,
        listModel,
        setListModel,
      }}
    >
      <>{children}</>
    </SelectModelAndBrandContext.Provider>
  );
};

export { SelectModelAndBrandProvider, SelectModelAndBrandContext };
