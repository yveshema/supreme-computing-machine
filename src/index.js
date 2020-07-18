import bool from './bool';
import float from './float';
import integer from './integer';

export const choice = (max = 1, min = 0, options = {}) => {
  if (options.float === true) {
    return float(max, min);
  } else if (options.bool === true) {
    return bool();
  } else {
    return integer(max, min);
  }
}
