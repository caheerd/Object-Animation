
function setup () {
    createCanvas (300,300);

    j = 0;
    y = 150;
}

function draw () {
    background (200);

    strokeWeight(1);
    stroke(0,0,0);
    line(150,299,150,0);
    
  
    // Bagian Kiri
    // Menggambar Wajah Bentuk Lingkaran 
    fill(255, 255, 0);
    ellipse(75, 150, 75, 75);


     // Menggambar Mata
    fill(0);
    ellipse(65, 140, 10, 10);
    ellipse(85, 140, 10, 10);

    // Menggambar Mulut
    noFill();
    stroke(0);
    strokeWeight(4);
    arc(75, 150, 50, 45, 0, PI);


    //Bagian Kanan
    //Menggambar Wajah Bentuk Lingkaran 
    var y = 150 + 30 * Math.sin(PI/70*j)
    j+=1
    strokeWeight(1)
    fill(255, 255, 0);
    ellipse(230, y, 75, 75);

    // Menggambar Mata
    var y = 140 + 30 * Math.sin(PI/70*j)
    fill(0);
    ellipse(220, y, 10, 10);
    ellipse(240, y, 10, 10);

     // Menggambar Mulut
     var y = 150 + 30 * Math.sin(PI/70*j)
     noFill();
    stroke(0);
    strokeWeight(4);
    arc(230, y, 50, 45, 0, PI);
}