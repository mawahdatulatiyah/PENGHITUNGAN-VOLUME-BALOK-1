
<!DOCTYPE html>
<html>
<head>
	<title>kelompok prokom 2</title>
</head>
<body>
	<h3>penghitung volume balok</h3>
	<br><br> 
	<label for="">panjang</label>
	<input type="text" id="angka1">
	<br>
	<br>
	<label for="">lebar</label>
	<input type="text" id="angka2">
	<br>
	<br>
	<label for="">tinggi</label>
	<input type="text" id="angka3">
	<br>
	<br>
	<label for="">hasil</label>
	<input type="text" id="hasil">
	<br>
	<br>

	<button onclick="fhasil()">hasil</button>

	<script>
		var angka1 =document.getElementById("angka1");
		var angka2 =document.getElementById("angka2");
		var angka3 =document.getElementById("angka3");
		var hasil =document.getElementById("hasil");
		
		function fhasil(){
			hasil.value= Number(angka1.value)* Number(angka2.value)* Number(angka3.value)
		}
	</script>
	
</body>
</html>