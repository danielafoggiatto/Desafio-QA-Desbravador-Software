module.exports = {
  default: {
    require: [
      'steps/**/*.ts',
      'support/hooks.ts',
      'support/world.ts'
    ],
    requireModule: ['ts-node/register'],
    paths: ['features/**/*.feature'],
    format: ['html:reports/cucumber-report.html'],
    publishQuiet: true
  }
};
