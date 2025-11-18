const itens = document.querySelectorAll('.item-drop');
const dropzones = document.querySelectorAll('.dropArea-items');

itens.forEach(item => {
  item.addEventListener('dragstart', (e) => {
    // use currentTarget para garantir que pegamos o .item-drop, mesmo se o target for a img
    e.dataTransfer.setData('text/plain', e.currentTarget.id);
    e.dataTransfer.effectAllowed = 'move';
  });
});

dropzones.forEach(zone => {
  zone.addEventListener('dragover', (e) => e.preventDefault());
  zone.addEventListener('drop', (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    const item = document.getElementById(id);
    if (item) zone.appendChild(item);
  });
});
