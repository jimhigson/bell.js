define(
   ['bell/condition', 'naga/template', 'naga/prefix2', 'bell/expectTrue'],
   function(condition, template, prefix2, expectTrue) {

      return function is(expected) {
      
         var test = expectTrue(prefix2('==')),
             message = template("expected to be equal to {expected} but was {value}");
   
         return condition(test).reportingOnError(message);
      };
   }
   
);