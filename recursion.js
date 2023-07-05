/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  //base case
  if (i === nums.length) return 1;
  //recursive case
  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0) {
  //base case
  if (i === words.length) return 0;
  //recursive case
  if (words[i].length > longest(words, i + 1)) {
    return words[i].length;
  }
  else {
    return longest(words, i + 1);
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0) {
//base case
if (i >= str.length) return '';
//recursive case
return str[i] + everyOther(str, i + 2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  //base case
  if (str.length === 0) return true;
  //recursive case
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, str.length - 1));
  }
  else {
    return false;
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  //base case
  if (arr.length === 0) return -1;
  //recursive case
  if (arr[0] === val) {
    return 0;
  }
  else {
    let result = findIndex(arr.slice(1), val);
    if (result === -1) {
      return -1;
    }
    else {
      return result + 1;
    }
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  //base case
  if (str.length === 0) return '';
  //recursive case
  return str[str.length - 1] + revString(str.slice(0, str.length - 1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  //base case
  if (Object.keys(obj).length === 0) return [];
  //recursive case
  let result = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      result.push(obj[key]);
    }
    else if (typeof obj[key] === 'object') {
      result = result.concat(gatherStrings(obj[key]));
    }
  }
  return result;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  //base case
  if (arr.length === 0) return -1;
  //recursive case
  let mid = Math.floor(arr.length / 2);
  if (arr[mid] === val) {
    return mid;
  }
  else if (arr[mid] > val) {
    return binarySearch(arr.slice(0, mid), val);
  }
  else {
    let result = binarySearch(arr.slice(mid + 1), val);
    if (result === -1) {
      return -1;
    }
    else {
      return result + mid + 1;
    }
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
