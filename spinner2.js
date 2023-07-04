const frames = ['|   ', '/   ', '-   ', '\\   '];

const animateSpinner = (frames, delay) => {
  frames.forEach((frame, index) => {
    setTimeout(() => {
      process.stdout.write(`\r${frame}`);
      if (index === frames.length - 1) {
        process.stdout.write('\n');
      }
    }, delay * index);
  });
};

animateSpinner(frames, 200);
