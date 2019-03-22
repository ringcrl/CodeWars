/**
调用说明：
  array: 数据源数组。必选。
  sum: 相加的和。必选。
  tolerance: 容差。如果不指定此参数，则相加的和必须等于sum参数，指定此参数可以使结果在容差范围内浮动。可选。
  targetCount: 操作数数量。如果不指定此参数，则结果包含所有可能的情况，指定此参数可以筛选出固定数量的数相加，假如指定为3，那么结果只包含三个数相加的情况。可选。
  返回值：返回的是数组套数组结构，内层数组中的元素是操作数，外层数组中的元素是所有可能的结果。
*/

function getCombBySum(array, sum, tolerance, targetCount) {
  const util = {
    // get combination from array
    // arr: target array
    // num: combination item length
    // return: one array that contain combination arrays
    getCombination(arr, num) {
      const r = [];
      (function f(t, a, n) {
        if (n == 0) {
          return r.push(t);
        }
        for (let i = 0, l = a.length; i <= l - n; i++) {
          f(t.concat(a[i]), a.slice(i + 1), n - 1);
        }
      })([], arr, num);
      return r;
    },
    //take array index to a array
    getArrayIndex(array) {
      let i = 0,
        r = [];
      for (i = 0; i < array.length; i++) {
        r.push(i);
      }
      return r;
    }
  }

  let fun = {
    //sort the array,then get what's we need
    init(array, sum) {
      //clone array
      let _array = array.concat()
      let r = []
      let i = 0
      //sort by asc
      _array.sort((a, b) => {
        return a - b;
      });
      //get all number when it's less than or equal sum
      for (i = 0; i < _array.length; i++) {
        if (_array[i] <= sum) {
          r.push(_array[i]);
        } else {
          break;
        }
      }
      return r;
    },
    //important function
    core(array, sum, arrayIndex, count, r) {
      let i = 0
      let k = 0
      let combArray = []
      let _sum = 0
      let _cca = []
      let _cache = []
      if (count == _returnMark) {
        return;
      }
      //get current count combination
      combArray = util.getCombination(arrayIndex, count);
      for (i = 0; i < combArray.length; i++) {
        _cca = combArray[i];
        _sum = 0;
        _cache = [];
        //calculate the sum from combination
        for (k = 0; k < _cca.length; k++) {
          _sum += array[_cca[k]];
          _cache.push(array[_cca[k]]);
        }
        if (Math.abs(_sum - sum) <= _tolerance) {
          r.push(_cache);
        }
      }
      fun.core(array, sum, arrayIndex, count - 1, r);
    }
  }

  let r = []
  let _array = []
  let _targetCount = 0
  let _tolerance = 0
  let _returnMark = 0;
  //check data
  _targetCount = targetCount || _targetCount;
  _tolerance = tolerance || _tolerance;
  _array = fun.init(array, sum);
  if (_targetCount) {
    _returnMark = _targetCount - 1;
  }
  fun.core(_array, sum, util.getArrayIndex(_array), (_targetCount || _array.length), r);
  return r;
}