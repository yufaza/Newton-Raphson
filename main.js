//memulai perhitungan 
function hitung(){
    //deklarasi variabel
    var x;
    var iterasi;
    var toleransi;

    //definisi fungsi f(x)
    function f(x){
        return Math.pow(x, 3) - 3*x + 1;
    }

    //definisi turunan fungsi f(x) atau f'(x)
    function f_(x){
        return 9 * Math.pow(x, 2) - 3;
    }
    
    //Ini adalah kode untuk menampilkan header tabel dan mengambil nilai dari input.
    x = Number(document.getElementById('x').value);
    iterasi = Number(document.getElementById('iterasi').value);
    toleransi = Number(document.getElementById('toleransi').value);
    document.getElementById('tabel').innerHTML = `
    <tr>
        <td>Iterasi</td>
        <td>Nilai x</td>
        <td>f(x)</td>
        <td>f'(x)</td>
    </tr>
    `;

    //Memulai Iterasi
    for(var i = 1; i<=iterasi; i++){
        document.getElementById("tabel").innerHTML +=`
            <tr>
                <td>`+ Number(i+1) +`</td>
                <td>`+ x +`</td>
                <td>`+ f(x) +`</td>
                <td>`+ f_(x) +`</td>
            </tr>
        `;
        if (f(x) < toleransi){
            break;
        }
        x = x - (f(x)/f_(x));
    }
}

