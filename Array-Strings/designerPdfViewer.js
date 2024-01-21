// Time O(n), n is lenth of word. Space O(1)
const designerPdfViewer = (h, word) => {
  // create map of alphabet
  const alphabetMap = {};
  let len = word.length;
  let maxHeight = -Infinity;

  for (let i = 0; i < 26; i++) {
    let char = String.fromCharCode("a".charCodeAt(0) + i);
    alphabetMap[char] = i;
  }

  for (let i = 0; i < len; i++) {
    let height = h[alphabetMap[word[i]]];
    maxHeight = Math.max(maxHeight, height);
  }

  return len * maxHeight;
};

const word = "abc";
const h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
console.log(designerPdfViewer(h, word));

const word2 = "zaba";
const h2 = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7];
console.log(designerPdfViewer(h2, word2));
