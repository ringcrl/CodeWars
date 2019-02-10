/**
 * https://www.codewars.com/kata/word-segmentation-maxmatch/train/javascript
 * 
 * MaxMatch 句子分词
 * - 找到最大长度单词进行分词
 * 
 * @param {string} sentence 
 */
function maxMatch(sentence){
  for (let i = sentence.length; i > 0; i--) {
    const word = sentence.slice(0, i);
    if (
      i === 1 ||
      VALID_WORDS.has(word)
    ) {
      return [word].concat(maxMatch(sentence.slice(i)));
    }
  }  
  
  return [];
}