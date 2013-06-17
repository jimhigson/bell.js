define( ['naga/throwError'], function(throwError) {

   var failure = throwError("It wasn't true, it was {foundValue}");

   return function expectTrue( f ) {
      return function() {
         
         var found = f.apply( this, arguments ); 
         
         if( !found ) {
            failure(found);
         }
         
      };
   }
      
});         