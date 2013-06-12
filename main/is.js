define(
   ['condition', 'template', 'Naga/inline'],
   function(condition, template, prefix) {

      return condition(
         prefix('=='),
         template("expected to be equal to {expected} but was {value}")
      );
   }
);