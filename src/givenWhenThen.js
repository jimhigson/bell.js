define(
   ['naga/chain', 'naga/compose', 'naga/lift'],
   function(chain, compose, lift) {

      function liftIfNotFunction(maybeFunc) {
         return ( maybeFunc instanceof Function )
                     ? maybeFunc 
                     : lift(maybeFunc);      
      }

      // given-when-then is basically functional chaining and composition.
      return chain(
         'given(givenFunc).when(whenFunc).then(thenFunc)',
         function(givenMaybeFunc, whenFunc, thenFunc){

            var givenFunc = liftIfNotFunction(givenMaybeFunc);
            
            // compose and execute the three functions:
            compose(thenFunc, whenFunc, givenFunc)();
         }
      );
   }
);



