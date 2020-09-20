const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumFor(lists) {
  let sum = 0;
  for (const num of lists) {
    sum += num;
  }
  return sum;
}

console.log(sumFor(list));

function sumWhile(lists) {
  let i = 0;
  let sum = 0;
  while (i < lists.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

console.log(sumWhile(list));

function sumRecursion(lists) {
  if (lists.length === 0) {
    return 0;
  }
  return lists[0] + sumRecursion(lists.slice(1, lists.length));
}

console.log(sumRecursion(list));

function sumTheSimpleWay(lists) {
  return _.reduce(lists, function (memo, num) { return memo + num; });
}

console.log(sumTheSimpleWay(list));
