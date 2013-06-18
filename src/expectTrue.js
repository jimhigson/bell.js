define( ['naga/error/halt', 'naga/apply'], 
function(halt, apply) {

   var wasFalse = halt("expression wasn't true, it was {foundValue}");

   return function expectTrue( f ) {
      return function() {
         
         var found = apply(f, arguments); 
         
         if( !found ) {
            wasFalse(found);
         }         
      };
   }
      
});         