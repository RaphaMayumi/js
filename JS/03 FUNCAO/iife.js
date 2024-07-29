//IIFE = Immediately Invoked Function Expression

//geramente usado para fugir do escopo global
(function(){
    console.log('Será executado na hora')
    console.log('Foge do escopo mais abrangente')
}) ()

//envolvendo a function em () é possível, imediatamente, chamá-la