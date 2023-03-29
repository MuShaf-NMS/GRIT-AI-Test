function hapus(idx) {
  const table = document.getElementById("bodyTable");
  const row = document.getElementById(`data-${idx}`);
  table.deleteRow(row.rowIndex - 1);
}
