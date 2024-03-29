import { brands } from "../contants";
import { DataPhone } from "../interfaces";

export function addLogo(listModel: DataPhone[]) {
  const findBrandLogo = (brandName: any) => {
    const brand = brands.find(
      (item) => item.brandOrModel.toLowerCase() === brandName
    );
    return brand ? brand.logo : null;
  };

  const result = listModel.map((item: DataPhone) => ({
    ...item,
    logo: findBrandLogo(item.brand),
  }));

  return result;
}
