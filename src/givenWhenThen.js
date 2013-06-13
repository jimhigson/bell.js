define(
   ['naga/chain', 'naga/compose'],
   function(chain, compose) {

      // given-when-then is basically functional chaining and composition.

      return chain(
         'given(givenFunc).when(whenFunc).then(thenFunc)',
         function(givenFunc, whenFunc, thenFunc){

            // compose and execute the three functions:
            compose(thenFunc, whenFunc, givenFunc)();
         }
      );
   }
);



