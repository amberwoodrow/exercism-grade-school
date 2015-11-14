function School (school) {
  this.school = {};
}

School.prototype.roster = function(first_argument) {
  return this.school;
};

School.prototype.add = function(name, grade) {
  if (grade in this.school) {
    this.school[grade].push(name);
    this.school[grade] = this.school[grade].sort();
  } else {
    this.school[grade] = [name];
  }
};

School.prototype.grade = function(grade) {
  if (grade in this.school) {
    return this.school[grade];
  }
  return [];
};

module.exports = School;