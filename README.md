Q-Sensei code exercise
================

Some notes about the process:

- The webapp is built using:
  - AngularJS
  - Bootstrap (for a quick layout)
  - Sass
  - Lodash (I incorporated it in case it was useful, it turned out I really didn't need it, I still left it)
  - Karma and Jasmine (for testing)

- I went with angular to develop the exercise because it allowed me to concentrate on the functionality without having to write a bunch of boilerplate and have some time for some nice UX touches.

- I used a TDD approach, not every little thing is tested, but the main functions are.

- Now some notes about features that were not requested but were simple to implement and added nice touches:
  - When you click on the name of a company to edit it, it automatically focuses the input and selects the text (using a directive).
  - When you finish editing and press the enter key, a little notification shows it was succesful (in real life and if it's calling a webservice there would be an error notice too).
  - You can press the esc key to cancel the edition and leave the name as it was originally.
  - You can sort the columns by name or id, asc or desc.
