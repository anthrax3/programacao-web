function foo() {
   var a = 1;
   let b = 2;
   var c = 3;
   function bar() {
     var a = 5;
     let b = 3;
     c = 4;
     console.log('bar', a, b, c);
   };
   bar();
   console.log('foo', a, b, c);
}
foo();

//bar 5 3 4
//foo 1 2 4