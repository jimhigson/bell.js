define(
   [        'bell/condition', 'naga/template', 'naga/equals', 'bell/expectTrue', 'naga/curry'],
   function( condition,        template,        equals,             expectTrue,        curry) {

      var notEqualFailure = template("expected to be equal to {expected} but got {value}");

      return function is(expected) {
      
         var equalToExpectedValue = curry(equals)(expected),
             notEqualToExpectedFailure = notEqualFailure(expected);
   
         return condition(expectTrue(equalToExpectedValue))
                     .reportingOnError(notEqualToExpectedFailure);
      };
   }
   
);