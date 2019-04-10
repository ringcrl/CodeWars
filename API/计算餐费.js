/**
 * 
 * @param {*} subtotal 餐费
 * @param {*} tax 税率整数
 * @param {*} tip 消费整数
 */
function calculate_total(subtotal, tax, tip) {
  // toFixed 接收【数字】入参，返回值是【字符串】
  return (subtotal + tax / 100 * subtotal + tip / 100 * subtotal).toFixed(2) - 0;
}