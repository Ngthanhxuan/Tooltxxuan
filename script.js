
function analyze() {
  const input = document.getElementById('inputData').value.trim().toUpperCase();
  const results = input.split(',').map(s => s.trim()).filter(s => s === 'T' || s === 'X');

  if (results.length === 0) {
    document.getElementById('result').innerText = 'Vui lòng nhập dữ liệu hợp lệ (T hoặc X).';
    return;
  }

  const counts = { T: 0, X: 0 };
  results.forEach(r => counts[r]++);

  const next = counts.T > counts.X ? 'Tài (T)' : counts.T < counts.X ? 'Xỉu (X)' : 'Khó đoán (T/X gần bằng nhau)';

  document.getElementById('result').innerText = `Kết quả: ${next}\nT: ${counts.T} - X: ${counts.X}`;
}
