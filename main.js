document.querySelector('.btn').addEventListener('click', () => {
  // Hiển thị hoa
  document.body.classList.remove("not-loaded");

  // Sau một khoảng thời gian, ẩn hoa và hiển thị iframe
  setTimeout(() => {
    document.getElementById('flowers').style.opacity = '0';
    document.querySelector('iframe').style.display = 'block';
  }, 7000); // Thay đổi số này để điều chỉnh thời gian chờ
});