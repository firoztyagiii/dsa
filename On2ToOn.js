const array1 = [5, 4, 8, 2, 6];
const array2 = [1, 15, 5, 26];

// O(n2)
const findDuplicate = (arr1, arr2) => {
  let isFound = false;
  for (let i = 0; i < arr1.length; i++) {
    if (isFound) {
      break;
    }
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        console.log("Found");
        isFound = true;
        break;
      }
    }
  }
  if (!isFound) {
    console.log("Not Found");
  }
};

// O(n)
const findDuplicateUsingMap = (arr1, arr2) => {
  const map = {};

  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      map[arr1[i]] = true;
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      console.log("Found");
      break;
    }
  }
};
