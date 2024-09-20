const sqrtEvenNumber = (x) => {
    if (x < 0) {
      return "Tidak bisa input bilangan negatif";
    }
    if (x % 2 !== 0) {
      return "Tidak bisa input bilangan ganjil";
    }
    return Math.sqrt(x);
  };
  
  // Contoh penggunaan program
  const input = -7; // Anda bisa mengganti nilai input ini
  const result = sqrtEvenNumber(input);
  console.log(result);
  