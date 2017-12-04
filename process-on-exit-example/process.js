process.on('exit', function(code) {

   // Following code will never execute.
   setTimeout(function() {
      console.log("This will not run");
   }, 0);
  
   console.log('program exited with exit code:', code);
});
console.log("Program Ended");