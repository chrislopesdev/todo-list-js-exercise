function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("clean cat litter", "take all the 💩 out of the litter box");
const task2 = newTask("do laundry", "👎");
const tasks = [task1, task2];

console.log(tasks)

task1.logState(); // clean cat litter, not complete
task1.markCompleted();
task1.logState() // clean cat litter has been completed
