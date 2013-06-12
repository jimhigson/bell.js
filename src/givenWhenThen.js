define(
   ['Naga/chain', 'Naga/compose'],
   function(chain, compose) {

      // given-when-then is basically functional composition.

      return chain(
         'given(givenFunc).when(whenFunc).then(thenFunc)',
         function(givenFunc, whenFunc, thenFunc){

            // compose and execute the three functions:
            compose(thenFunc, whenFunc, givenFunc)();
         }
      );
   }
);



