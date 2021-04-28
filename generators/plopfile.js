module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.jsx',
        templateFile: 'templates/Component.jsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styled.js',
        templateFile: 'templates/styled.js.hbs',
      },
    ],
  });
};
