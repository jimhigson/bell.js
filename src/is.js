define(
   [        'bell/condition', 'naga/template', 'naga/prefix2', 'bell/expectTrue', 'naga/curry'],
   function( condition,        template,        prefix2,        expectTrue,        curry) {

      var notEqualFailure = template("expected to be equal to {expected} but was {value}");

      return function is(expected) {
      
         var equalToExpectedValue = curry(prefix2('=='))(expected),
             notEqualToExpectedFailure = notEqualFailure(expected);
   
         return condition(expectTrue(equalToExpectedValue))
                     .reportingOnError(notEqualToExpectedFailure);
      };
   }
   
);