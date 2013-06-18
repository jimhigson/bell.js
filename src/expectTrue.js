define( ['naga/error/halt', 'naga/apply'], 
function(halt, apply) {

   var wasFalse = halt("expression wasn't true, it was {foundValue}");

   /**
    * Return a function which evaluates f. If the result is falsey, throws
    * an error via naga/error/halt.
    */
   return function expectTrue( f ) {
      return function() {
         
         var result = apply(f, arguments); 
         
         if( !result ) {
            wasFalse(result);
         }         
      };
   }
      
});         