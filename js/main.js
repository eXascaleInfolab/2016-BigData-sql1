// if we're not in print mode start impress
if ( !window.location.search.match(/print/) ) {
  try{
    impress().init()
  }catch(err) {
     // noop
  }
} else {
  //show all substeps
  var substeps = document.querySelectorAll(".substep");
  Array.prototype.forEach.call(substeps,function(dom, index) {
    dom.classList.add("active");
  });

  //we use the preview class on print
  document.body.classList.add("preview");
}
