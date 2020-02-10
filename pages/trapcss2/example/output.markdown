## writes the output file
test/fixture/surveillance.html -c test/fixture/bootstrap.min.css

/* stderr */
Output written to test/temp/style-trap.css
/**/

/* expected */
<style>
  *,::after,::before{box-sizing:border-box}html{...}
</style>
/**/
