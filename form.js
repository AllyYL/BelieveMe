const form = document.forms[0];
const inp = form.elements.searchBox;

inp.addEventListener( 'focus', function() { console.log( "focused on", this.name ) } );
inp.addEventListener( 'blur', function() { console.log( "leaving", this.name ) } );
inp.addEventListener( 'change', function() { console.log( "leaving after changing", this.name, this.value )
  // if (this.value == "good") {
  //   this.value = "bad";
  // } 
} );

form.addEventListener('submit', function(ev){
  console.log("submitting form", this.name)
  ev.preventDefault();
  if (inp.value == "good"){
    alert('please change');
  } else {
    form.submit();
  }
})