// Generated by CoffeeScript 1.3.1
(function() {
  var ConsoleInterface, DocPad, docpad, docpadConfig, program;

  DocPad = require(__dirname + '/../docpad');

  ConsoleInterface = require(__dirname + '/../interfaces/console');

  program = require('commander');

  docpadConfig = {};

  if (program.skeleton) {
    docpadConfig.skeleton = program.skeleton;
  }

  if (program.port) {
    docpadConfig.port = program.port;
  }

  docpad = DocPad.createInstance(docpadConfig, function(err) {
    var consoleInterface;
    if (err) {
      throw err;
    }
    consoleInterface = new ConsoleInterface({
      docpad: docpad,
      program: program
    });
    return consoleInterface.start();
  });

}).call(this);