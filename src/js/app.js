import Chat from './widget';

const widgetParent = document.querySelector('[data-id=chat]');
const widget = new Chat(widgetParent);
widget.create();
