import { useState } from "react";

export const useDropDown = () => {
  const [dropDown, setDropDown] = useState({
    HomeOption: false,
    PageOption: false,
    MenuOption: false,
    ShopOption: false,
    BlogOption: false,
  });
  if (
    (dropDown.ShopOption && dropDown.BlogOption) ||
    (dropDown.HomeOption && dropDown.PageOption) ||
    (dropDown.MenuOption && dropDown.PageOption) ||
    (dropDown.MenuOption && dropDown.ShopOption) ||
    (dropDown.BlogOption && dropDown.ShopOption)
  ) {
    setDropDown({
      ...dropDown,
      HomeOption: false,
      PageOption: false,
      ShopOption: false,
      BlogOption: false,
      MenuOption: false,
    });
  }
  const toggleHomeOption = (home) => {
    setDropDown({ ...dropDown, HomeOption: home });
  };
  const togglePageOption = (page) => {
    setDropDown({ ...dropDown, PageOption: page });
  };
  const toggleMenuOption = (menu) => {
    setDropDown({ ...dropDown, MenuOption: menu });
  };
  const toggleShopOption = (shop) => {
    setDropDown({ ...dropDown, ShopOption: shop });
  };
  const toggleBlogOption = (blog) => {
    setDropDown({ ...dropDown, BlogOption: blog });
  };
  return {
    dropDown,
    toggleHomeOption,
    togglePageOption,
    toggleMenuOption,
    toggleShopOption,
    toggleBlogOption,
  };
};
