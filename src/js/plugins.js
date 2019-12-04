//Counter
import { CountUp } from 'countup.js';
let isEvent = false;
const countUp1 = new CountUp('countup-01', 47);
const countUp2 = new CountUp('countup-02', 97);
const countUp3 = new CountUp('countup-03', 12294);
const countUp4 = new CountUp('countup-04', 9755);
const countUp5 = new CountUp('countup-05', 197);
const countUp6 = new CountUp('countup-06', 1322221);
window.onscroll = function () {
  if(pageYOffset > 1290 && isEvent === false) {
    // console.log(pageYOffset);
    // console.log(isEvent);
    countUp1.start();
    countUp2.start();
    countUp3.start();
    countUp4.start();
    countUp5.start();
    countUp6.start();

    isEvent = true;
  }
};

const scroll = new SmoothScroll('a[href*="#"]');
