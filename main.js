// Get all the draggable elements
const fillItems = document.querySelectorAll('.fill');

// Add event listeners to the draggable elements
fillItems.forEach((item) => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});

// Add event listeners to the character slots
const characterSlots = document.querySelectorAll('.character .slot');
characterSlots.forEach((slot) => {
  slot.addEventListener('dragover', dragOver);
  slot.addEventListener('dragenter', dragEnter);
  slot.addEventListener('dragleave', dragLeave);
  slot.addEventListener('drop', dragDropCharacter);
});

// Add event listeners to the inventory slots
const inventorySlots = document.querySelectorAll('.inventory .empty');
inventorySlots.forEach((slot) => {
  slot.addEventListener('dragover', dragOver);
  slot.addEventListener('dragenter', dragEnter);
  slot.addEventListener('dragleave', dragLeave);
  slot.addEventListener('drop', dragDropInventory);
});

// Drag and Drop functions for the draggable items
function dragStart() {
  this.classList.add('hold');
  setTimeout(() => this.classList.add('invisible'), 0);
}

function dragEnd() {
  this.classList.remove('hold', 'invisible');
}

// Drag and Drop functions for the character slots
function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add('hovered');
}

function dragLeave() {
  this.classList.remove('hovered');
}

function dragDropCharacter() {
  const fillType = this.getAttribute('data-slot-type');
  if (this.classList.contains('slot')) {
    const emptyDiv = this.querySelector('.empty');
    if (emptyDiv && !emptyDiv.querySelector('.fill')) {
      const item = document.querySelector('.hold');
      if (item.getAttribute('data-fill-type') === fillType) {
        emptyDiv.appendChild(item);
      }
    }
    this.classList.remove('hovered');
  }
}

// Drag and Drop functions for the inventory slots
function dragDropInventory() {
  const item = document.querySelector('.hold');
  if (item && this.classList.contains('empty') && !this.querySelector('.fill')) {
    this.append(item);
  }
  this.classList.remove('hovered');
}






