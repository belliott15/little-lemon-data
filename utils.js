import { useRef, useEffect } from "react";

export const SECTION_LIST_MOCK_DATA = [
  {
    title: "Appetizers",
    data: [
      {
        id: "1",
        title: "Pasta",
        price: "10",
      },
      {
        id: "3",
        title: "Pizza",
        price: "8",
      },
    ],
  },
  {
    title: "Salads",
    data: [
      {
        id: "2",
        title: "Caesar",
        price: "2",
      },
      {
        id: "4",
        title: "Greek",
        price: "3",
      },
    ],
  },
  {
    title: "Beverages",
    data: [
      {
        id: "5",
        title: "Root Beer",
        price: "1.50",
      },
      {
        id: "6",
        title: "Ice Tea",
        price: "2.23",
      },
    ],
  },
];

/**
 * 3. Implement this function to transform the raw data
 * retrieved by the getMenuItems() function inside the database.js file
 * into the data structure a SectionList component expects as its "sections" prop.
 * @see https://reactnative.dev/docs/sectionlist as a reference
 */
export function getSectionListData(data) {
  // SECTION_LIST_MOCK_DATA is an example of the data structure you need to return from this function.
  const newObject = {};
  // The title of each section should be the category.
  data.forEach((item) => {
    if (newObject[item.category]) {
      newObject[item.category].data.push({
        id: item.id,
        title: item.title,
        price: item.price,
      });
    } else {
      newObject[item.category] = {
        title: item.category,
        data: [
          {
            id: item.id,
            title: item.title,
            price: item.price,
          },
        ],
      };
    }
  });
  const resultArray = Object.keys(newObject).map((key) => {
    return {
      title: newObject[key].title,
      data: newObject[key].data,
    };
  });
  // console.log(newObject, "newObject");
  // console.log(resultArray, "result array");
  // The data property should contain an array of menu items.
  // Each item has the following properties: "id", "title" and "price"
  // console.log(resultArray[0], "result array");
  return resultArray;
}

export function useUpdateEffect(effect, dependencies = []) {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      return effect();
    }
  }, dependencies);
}
