import categoryIconList from "../constants/categoryIconList";
const getIconForCategory = (category) => {
  const IconComponent =
    categoryIconList[category] || categoryIconList.miscellaneous;
  return <IconComponent />;
};
export { getIconForCategory };
