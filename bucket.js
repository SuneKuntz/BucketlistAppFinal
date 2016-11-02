//Definerer det Angular modul vi benytter.
angular.module('bucketApp', [])
  //Definerer vores controller.
  .controller('bucketController', function() {
    //Definerer en ny variable og navngiver den 'bucketList'.
    var bucketList = this;
    //Data array med vores data.
     bucketList.todos = [
      {text:'Learn to fly', done:true},
      {text:'Beat Dark Souls', done:false},
      {text:'Travel the world', done:false},
      {text:'Get a dog', done:false},
      {text:'Become a holy warrior', done:false},
      {text:'Not die', done:true},
      {text:'Beat Pac-man', done:false},
      {text:'Lick my elbow', done:false},
      {text:'Get 1 subscriber', done:false}];
   
    //Funktion som tillader brugeren at tilføje et nyt punkt til vores data array.
    bucketList.addTodo = function() {
      //Indsætter det nye punkt til arrayet og sætter den til 'ikke færdiggjort'.
      bucketList.todos.push({text:bucketList.todoText, done:false});
      //Holder punktets beskrivende tekst tomt og indsætter teksten fra inputfeltet.
      bucketList.todoText = '';
    };
    
    //Funktion som tæller resterende punkter som ikke er færdiggjorte.
    bucketList.remaining = function() {
      //Sætter en ny variable, 'count', til 0.
      var count = 0;
      //Tæller alle punkterne igenne.
      angular.forEach(bucketList.todos, function(todo) {
        //For hver færdiggjort punkt på listen bliver 'coun' variablen plusset med 1.
        count += todo.done ? 0 : 1;
      });
      //Returner vores 'count' værdi så vi kan vise den for brugeren.
      return count;
    };
    
    //Funktion som tillader os at slette punkter fra vores liste som vi har markeret som færdiggjorte. 
    bucketList.archive = function() {
      //Sætter en ny varible 'oldTods' lig med vores todos i vores data array.
      var oldTodos = bucketList.todos;
      bucketList.todos = [];
      //For hver at vores punkter i vores todo data skal dataer som IKKE er done bevares og genindsættes i vores data array.
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) bucketList.todos.push(todo);
      });
    }; 



  });