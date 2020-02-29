// You have an array of integers, and for each index you want to
// find the product of every integer except the integer at that index.

function getProductsOfAllIntsExceptAtIndex(intArray){

    if (intArray.length < 2){
        throw new Error ( 'Getting the product of numbers at other indices requires at least 2 numbers');
    }

    const  ProductsOfAllIntsExceptAtIndex = [ ];

  // For each integer, we find the product of all the integers
  // before it, storing the total product so far each time

  let productSoFar = 1;
  for (i =0; i < intArray.length; i ++){
      ProductsOfAllIntsExceptAtIndex[i] = productSoFar;
      productSoFar = productSoFar * intArray[i];
  }

    // For each integer, we find the product of all the integers
  // after it. since each index in products already has the
  // product of all the integers before it, now we're storing
  // the total product of all other integers

  productSoFar =1;
  for (let j = intArray.lenght -1; j >= 0; j--){
    //   ProductsOfAllIntsExceptAtIndex[j] *= productSoFar;
      ProductsOfAllIntsExceptAtIndex[j] = ProductsOfAllIntsExceptAtIndex[j] * productSoFar;
      productSoFar = productSoFar * intArray[j];
  }
  return productsOfAllIntsExceptAtIndex;

}