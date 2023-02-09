$( document ).ready( function() {

  // Show stored data on the page
  
  const displayData = $( "#displayTracker" );

  // Iterate over all the keys in the local storage, get the values associated with each key, and parse them from JSON using
  for ( let i = 0; i < localStorage.length; i++ ) {
    
    const key = localStorage.key( i );
    
    // Because we stores inputQuery in the localstorage in this application we need to check if keys are date or not
    if ( key === "inputQuery" ) {
      continue;
    }
    const value = JSON.parse( localStorage.getItem( key ) );

    const p = $( "<p>" ).html( `You were <strong> ${ value.text } </strong> at ${ value.dayOfWeek } ${ value.date } ${ value.time }.` );

    displayData.append( p );

  }

});