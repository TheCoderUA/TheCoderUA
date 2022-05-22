
// Structure object itself:

const tower = {};

tower.height = 0;

tower.from = 1;
tower.to = tower.height;

// Making the tower iterable (for ... of) works:
tower[Symbol.iterator] = function() {

  return {
    current: this.from,
    last: this.to,

    next() {

      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};

// Exporting tower object:
module.exports = { tower };
