
/*
   var given = Bell.given,
       is = Bell.is,
       curry = Naga.curry,
       prefix = Naga.prefix;

   var adding = curry(prefix('+')); */

DependentTestCase('bell.givenWhenThen',
   ['bell/givenWhenThen', 'bell/is', 'naga/curry', 'naga/prefix2'], 
   {
      'test simple case': 
         function(given, is, curry, prefix2){

            var adding = curry(prefix2('+'));

            given(2)
               .when(adding(2))
               .then(is(4));
         }
   }
);

/*
   given(2)
      .when(adding(2))
      .then(is(4)); // passes!

   given(2)
      .when(adding(2))
      .then(isEven); // passes!

   given(2)
      .when(adding(2))
      .then(is(5))
      .should(fail.withError("performed 2 + 2, expected 5 but got 4"));  // passed. Error was expected.

   given(1)
      .when(adding(2))
      .then(adding(3))
      .then(adding(4))
      .is(equalTo(1+2+3+4));  // passes!

   given(1,2,3,4,5)
      .then(all(lessThan(6)));
      // Need to convert boolean value from all (Naga) to thrown exception (Bell)
      // could wrap all functions passed to g/w/t to react in this way. Eg, Bell.condition does this!


   given(1,2,3,4,5)
      .then(all(lessThan(5)))
      .should(fail);
      
   */      
