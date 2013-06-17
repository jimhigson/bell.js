define(
   ['naga/chain', 'naga/throwError'],
   function(chain, throwError) {

      /**
       * Create a function suitable for use in a .then() clause of a bdd given-when-then
       * expression.
       *
       * Returns a function which executes the condition function. If an exception is thrown
       * when the conditionFunction is called, uses errorFunc to generate an error message)s
       * 
       * TODO: rename condition to test?
       */
      return chain(
         'test(conditionFunc).reportingOnError(errorFunc)',
         function( conditionFunc, errorFunc ) {

            return function() {
               try{
                  conditionFunc.apply(this, arguments);
               } catch(e) {

                  var messageFromErrorFunc = errorFunc.apply(this, arguments);

                  throwError("{messageFromErrorFunc} {conditionFailure}")(messageFromErrorFunc, e.message);
               }
            }
         }
      );
   }
);