define( ['naga/error/halt'], 
function(halt) {

   var wasFalse = halt("It wasn't true, it was {foundValue}");

   return function expectTrue( f ) {
      return function() {
         
         var found = f.apply( this, arguments ); 
         
         if( !found ) {
            wasFalse(found);
         }         
      };
   }
      
});         