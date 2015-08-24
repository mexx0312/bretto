var netto, brutto, tax, last_conversion;

function convert_from_netto(n,b,t)
{
  netto_float = parseFloat(n.value);
  brutto_float = parseFloat(b.value);
  tax_float = parseFloat(t.value);

  brutto_calc = netto_float + netto_float * tax_float * 0.01;
  brutto_calc = Math.round(brutto_calc * 100) / 100;

  b.value = brutto_calc;

  // Todo: Replace , with . (if any)
}

function convert_from_brutto(n,b,t)
{
}

window.addEventListener('load',function(){

  netto = document.getElementById('netto');
  brutto = document.getElementById('brutto');
  tax = document.getElementById('tax');
  last_conversion = "netto_to_brutto";

  convert_from_netto(netto,brutto,tax);

  // Watch for changes on netto value
  netto.addEventListener('keyup',function(){
    convert_from_netto(netto,brutto,tax);
    last_conversion = "netto_to_brutto";
  });

  // Watch for changes on brutto value
  brutto.addEventListener('keyup',function(){
    convert_from_brutto(netto,brutto,tax);
    last_conversion = "brutto_to_netto";
  });


  // Watch for changes on tax value
  tax.addEventListener('change',function(){
    if (last_conversion == "netto_to_brutto")
      convert_from_netto(netto,brutto,tax);
    else
      convert_from_brutto(netto,brutto,tax);
  });

});
