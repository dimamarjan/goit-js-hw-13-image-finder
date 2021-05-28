import { alert, Stack } from '@pnotify/core';

const myStack = new Stack({
  dir1: 'up',
  maxOpen: 1,
  context: document.querySelector('.gallery-section'),
});

export default function myAlert() {
  alert({
    text: 'no such images found',
    icon: false,
    type: 'info',
    delay: 800,
    mouseReset: false,
    closer: false,
    sticker: false,
    closerHover: false,
    stickerHover: false,
    stack: myStack,
  });
}
