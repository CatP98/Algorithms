//Assignment • Stock Exchange stockExchangeOptional___.js
var stockPricesVariations = [-5, 10, 12, -7, -35, 22, -9, -26, -13, 28, 10, -37, 42, -5, -28, 11, -9, 18];

/**
 * 
 * @param {*} arr 
 * @returns the maximum sum of a subarray
 * 
 * maxProfit - will store the maxProfit calculated
 * subArrayProfit - will store the subArrayProfit calculated in each subArray
 * This function will find all the subarrays in the array arg using the first 2 for loops
 * then will use another for loop to calculate the sum in every subarray found
 * i - will be the first index of each subarray
 * j - will be the last index of each subarray
 * k - will be the current index of each subarray
 */

var bruteForceFindMaxProfit = function (arr) {

	var maxProfit = Number.MIN_VALUE;

	for (var i = 0; i < arr.length; i++) {
		for (var j = i; j < arr.length; j++) {

			var subArrayProfit = 0;

			for (var k = i; k <= j; k++) {

				subArrayProfit = subArrayProfit + arr[k];
			}

			if (subArrayProfit > maxProfit) {
				maxProfit = subArrayProfit;
			}
		}
	}
	return maxProfit;
}

console.log('this is it ', bruteForceFindMaxProfit(stockPricesVariations));

/**
 * 
 * @param {*} arr 
 * @returns the maximum sum of a subarray
 * 
 * Same idea as above, but optimized
 * First for loop finds the starting index
 * Second for loop calculates the running profit
 * if the running profit is bigger than the max profit calculated prior to this, it will replace it
 * if it isn't it ignores it
 * 
 * We can remove one nested loop like this
 */

var optimizedBruteForceFindMaxProfit = function (arr) {

	var maxProfit = Number.MIN_VALUE;

	for (var i = 0; i < arr.length; i++) {

		var subArrayProfit = 0;
		for (var j = i; j < arr.length; j++) {

			subArrayProfit = subArrayProfit + arr[j];
			if (subArrayProfit > maxProfit) {
				maxProfit = subArrayProfit;
			}
		}
	}
	return maxProfit;
}

console.log(optimizedBruteForceFindMaxProfit(stockPricesVariations));

/**
 * 
 * Check "Divide and conquer using two sub-problems"
 * Using Divide and Conquer approach, we can find the maximum subarray sum in O(nLogn) time. 
 * https://www.enjoyalgorithms.com/blog/divide-and-conquer
 * 
 * basically:
 *  Divide the given array in two halves
    Return the maximum of following three
       - Maximum subarray sum in left half (Make a recursive call)
       - Maximum subarray sum in right half (Make a recursive call)
       - Maximum subarray sum such that the subarray crosses the midpoint
 */

var maxCrossingSum = function (arr, left, mid, right) {

	// Include elements on left of mid.
	var sum = 0;
	var leftSum = Number.MIN_VALUE;
	for (var i = mid; i >= left; i--) {

		sum = sum + arr[i];

		if (sum > leftSum) {
			leftSum = sum;
		}

	}

	// Include elements on right of mid

	sum = 0;
	var rightSum = Number.MIN_VALUE;

	for (var i = mid + 1; i <= right; i++) {

		sum = sum + arr[i];

		if (sum > rightSum) {
			rightSum = sum;
		}
	}

	return rightSum + leftSum;
}

var maxSubArraySum = function (arr, low, high) {

	//Invalid Range: low is greater than high
	if (low > high) {

		return Number.MIN_VALUE;
	}

	// Base Case: Only one element
	if (low == high) {

		return arr[low];
	}

	// Find middle point
	var mid = parseInt((low + high) / 2, 10);

	// return one of the three:
	// - Maximum subarray sum in left half (Make a recursive call)
	// - Maximum subarray sum in right half (Make a recursive call)
	// - Maximum subarray sum such that the subarray crosses the midpoint

	var maxLeftSum = maxSubArraySum(arr, low, mid);
	var maxRightSum = maxSubArraySum(arr, mid + 1, high);
	var maxCrossSum = maxCrossingSum(arr, low, mid, high);

	return Math.max(maxLeftSum, maxRightSum, maxCrossSum);
}

var findMaxProfit = function (arr) {

	return maxSubArraySum(arr, 0, arr.length - 1);
}

console.log('Divide and conquer: ', findMaxProfit(stockPricesVariations));
