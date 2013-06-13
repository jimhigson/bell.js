define(
   ['bell/condition', 'naga/template', 'naga/prefix'],
   function(condition, template, prefix) {

      return condition(
         prefix('=='),
         template("expected to be equal to {expected} but was {value}")
      );
   }
);