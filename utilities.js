
let { tower } = require('./Floors.js');

// Checks for emptiness of the tower:
tower.isEmpty = function() {
  if (this.height === 0) return true;
  else return false;
}

// Checks for floor existance by name:
tower.has = function(name) {

  if(tower.isEmpty()) return null;

  let result = false;
  let index = 0;

  while(this.height > index) {

    if (this[index] === name) {
      result = true;
      break;
    } else {
      index++;
    }
  }

  return result;
}

// Replaces floors by it's indexes:
tower.replace = function(from, to) {
  // Checking for existance of to, from, & tower self:
  if (!tower || !this[from] || !this[to]) return null;

  // If the "to" parameter is string, place it:
  if (typeof to === 'string') this[from] = to;

  const previousTo = this[to];

  this[to] = this[from];
  this[from] = previousTo;
}

// Removes floor by given index:
tower.remove = function(index) {
  if (!tower || !this[index]) return null;
  delete this[index];
}

// Adds a new one floor:
tower.add = function(floor) {
  this[this.height] = floor;
  this.height++;
  this.to = this.height;
}

// Returns floor by the index:
tower.at = function(index) {
  return this[index];
}

// Returns tower's highest floor name:
tower.highest = function() {
  return this.at(this.height - 1);
}

// Returns index of given floor:
tower.indexOf = function(name) {
  let index = 0;

  if (this.height === 0) {
    return null;
  }

  while (this.height > index) {

    if (this[index] === name) break;
    else index++;
  }

  if (index === this.height) return null;
  else return index;
}
