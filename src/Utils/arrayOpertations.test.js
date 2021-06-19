import { distinct, itemExists } from "./arrayOperations";

describe("testing array modification operations", () => {
  test("should return true representing item exists in the given array", () => {
    //Arrange
    const data = [
      {
        _id: "ef123",
        name: "Jump Rope",
      },
      {
        _id: "ef124",
        name: "Weighted Jump Rope",
      },
    ];

    //Act
    const result = itemExists(data, "ef123");

    //Assert
    expect(result).toBe(true);
  });

  test("should return false representing item does'nt exists in the given array", () => {
    //Arrange
    const data = [
      {
        _id: "ef123",
        name: "Jump Rope",
      },
      {
        _id: "ef124",
        name: "Weighted Jump Rope",
      },
    ];

    //Act
    const result = itemExists(data, "ef125");

    //Assert
    expect(result).toBe(false);
  });

  test("should return a unique list of elements present in the array", () => {
    //Arrange
    const brands = ["Crossrope", "Crossrope","Rush Athletics","Amazon Basics","Rush Athletics","Crossrope","Amazon Basics"];

    //Act
    const uniqueListOfBrands = brands.filter(distinct);

    //Assert
    expect(uniqueListOfBrands).toEqual(["Crossrope","Rush Athletics","Amazon Basics"]);

  });
});
