## cleans the css
test/fixture/surveillance.html -c test/fixture/bootstrap.min.css

/* stdout */
*,::after,::before{box-sizing:border-box}html{...}
/**/

## gives error when CSS is not passed
test/fixture/surveillance.html

/* stderr */
Please pass CSS path
/**/

/* code */
1
/**/