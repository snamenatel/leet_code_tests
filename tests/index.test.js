import { arraySign } from "../src/easy/arraySign";
import { canMakeArithmeticProgression } from "../src/easy/canMakeArithmeticProgression";
import { isHappy } from "../src/easy/isHappy";
// import { largestPerimeter } from "../src/easy/largestPerimeterTriangle";
import { nearestValidPoint } from "../src/easy/nearestValidPoint";
import { spiralMatrix } from "../src/easy/spiralMatrix";
import {
  arraySignCases,
  canMakeArithmeticProgressionCases,
  isHappyCases,
  // largetsPerimeterTriangleCases,
  nearestValidPointCases,
  spiralMatrixCases
} from "./easy.cases";
import { toBeTest, toStrictEqual } from "./helpres";

// toBeTest(largestPerimeter, largetsPerimeterTriangleCases);

toStrictEqual(spiralMatrix, spiralMatrixCases);

toBeTest(nearestValidPoint, nearestValidPointCases);
toBeTest(arraySign, arraySignCases);
toBeTest(canMakeArithmeticProgression, canMakeArithmeticProgressionCases);
toBeTest(isHappy, isHappyCases);
