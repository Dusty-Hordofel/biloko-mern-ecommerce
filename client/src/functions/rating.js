import React from 'react';
import StarRating from 'react-star-ratings';
//how reduce method works:
// [1, 4, 6, 7]
// 1 + 4 = 5
// 5 + 6 = 11
// 11 + 7 = 18

//we pass a product as a parameter to the function
export const showAverage = (p) => {
  if (p && p.ratings) {
    let ratingsArray = p && p.ratings;
    let total = [];
    let length = ratingsArray.length;
    console.log('length', length);

    ratingsArray.map((r) => total.push(r.star)); //we push Each star value to the total array
    let totalReduced = total.reduce((p, n) => p + n, 0); //reduce takes two parameters, the first is the initial value, the second is the current value. it's take previous value and next value.
    console.log('totalReduced', totalReduced);

    let highest = length * 5;
    console.log('highest', highest);

    let result = (totalReduced * 5) / highest;
    console.log('result', result);

    return (
      <div className="text-center pt-1 pb-3">
        <span>
          <StarRating rating={result} />
        </span>
      </div>
    );
  }
};
