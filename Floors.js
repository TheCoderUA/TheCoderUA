
// Structure object itself:

const tower = {};

tower.height = 0;

// "Symbol.iterator":
tower.from = 1;             // Starting point for "Symbol.iterator".
tower.to = tower.height;    // End point.

// Making the tower iterable (for ... of loop works):
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

// Now tower is concatable with arrays:
tower[Symbol.isConcatSpreadable] = true;

// Exporting tower object:
module.exports = { tower };
