const readability = (str) => {
  let letters = 0;
  let words = 1;
  let sentences = 0;
  const nonLetters = [" ", ",", ".", "!", "?", '"', "'"];
  const endOfSentence = [".", "?", "!"];

  for (let i = 0; i < str.length; i++) {
    if (!nonLetters.includes(str[i])) {
      letters++;
    }

    if (endOfSentence.includes(str[i])) {
      sentences++;
    }

    if (str[i] === " ") {
      words++;
    }
  }

  const L = (letters / words) * 100;
  const S = (sentences / words) * 100;
  const index = Math.round(0.0588 * L - 0.296 * S - 15.8);

  if (index >= 16) {
    console.log("Grade 16+");
  } else if (index < 1) {
    console.log("Before Grade 1");
  } else {
    console.log(`Grade ${index}`);
  }
};

readability("One fish. Two fish. Red fish. Blue fish.");
readability("Would you like them here or there? I would not like them here or there. I would not like them anywhere.");
readability("Congratulations! Today is your day. You're off to Great Places! You're off and away!");
readability("Harry Potter was a highly unusual boy in many ways. For one thing, he hated the summer holidays more than any other time of year. For another, he really wanted to do his homework, but was forced to do it in secret, in the dead of the night. And he also happened to be a wizard.");
readability("In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.");
readability(
  "Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, 'and what is the use of a book,' thought Alice 'without pictures or conversation?'"
);
readability(
  "When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow. When it healed, and Jem's fears of never being able to play football were assuaged, he was seldom self-conscious about his injury. His left arm was somewhat shorter than his right; when he stood or walked, the back of his hand was at right angles to his body, his thumb parallel to his thigh."
);
readability("There are more things in Heaven and Earth, Horatio, than are dreamt of in your philosophy.");
readability(
  "It was a bright cold day in April, and the clocks were striking thirteen. Winston Smith, his chin nuzzled into his breast in an effort to escape the vile wind, slipped quickly through the glass doors of Victory Mansions, though not quickly enough to prevent a swirl of gritty dust from entering along with him."
);
readability("A large class of computational problems involve the determination of properties of graphs, digraphs, integers, arrays of integers, finite families of finite sets, boolean formulas and elements of other countable domains.");
