var c = [40.0, 200.0, 300.0, 800.0];
var n = c.length;
var i = 0;

while (n >= 1 && n <= 1000) {
    var dias = 0;
    while ( c[i] > 1 && c[i] <= 1000) {
      c[i] = c[i] / 2.0;
      dias++;     
    }
    i++;
    n--;  
    console.log(`${dias}  dias`);
}