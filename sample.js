new Vue({
  // By specifying the HTML id in this el, the instance of Vue.js will be imported in the DOM of that id.
  el: '#app',
  // data is an attribute (value) of the defined Vue.js instance
  data: {
    name: 'A mountain B ro',
    course: 'Web Engineer Course',
    acceptancePeriod: 'January 2019',
    defaultLastId: 3,
    students: [
      { id: 1, name: 'Alexis san', course: 'Machine learning course', acceptancePeriod: 'January 2019' },
      { id: 2, name: 'Amina san', course: 'Web Engineer Course', acceptancePeriod: 'November 2017' },
      { id: 3, name: 'Cherif san', course: 'Web Engineer Course', acceptancePeriod: 'November 2017' }
    ]
  },
  // In methods, describe the method you want to use for the instance of Vue.js
  methods: {
    addStudent: function() {
      let element = this.students[this.students.length - 1];
          let auto = element.id + 1;
          return this.students.push({ id: auto, name: this.name, course: this.course, acceptancePeriod: this.acceptancePeriod })

    }
  }
})
