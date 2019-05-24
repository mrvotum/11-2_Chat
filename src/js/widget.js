import SetDayNow from './setDayNow';

export default class Chat {
  constructor(parent) {
    this.parent = parent;
    this.ws = new WebSocket('ws://eleven-two.herokuapp.com//ws');
    this.ws.binaryType = 'blob'; // arraybuffer
    this.messagesArr = [];
  }

  create() {
    this.createNickName();

    this.createMessagesDesk();
    this.createUsersList();

    this.addEventListeners();
  }

  createNickName() {
    const formEl = document.createElement('form');
    formEl.className = 'createNickName';
    formEl.setAttribute('data-id', 'createNickName');
    formEl.innerHTML = `
      <h3>Выберите псевдоним</h3>
      <input data-id="nickName" type="text">
      <input data-id="submit" type="submit">`;

    this.parent.appendChild(formEl);

    const btn = formEl.querySelector('[data-id=submit]');
    this.addEventListenerSubmit(btn, formEl);
  }

  createMessagesDesk() {
    const divEl = document.createElement('div');
    divEl.className = 'messagesDesk';
    divEl.setAttribute('data-id', 'messagesDesk');
    divEl.innerHTML = '<textarea data-id="textarea" class="textarea"></textarea>';

    this.parent.appendChild(divEl);

    this.textareaEl = this.parent.querySelector('[data-id=textarea]');
    this.addEventListenerTextArea();
  }

  addMessages(arr, count) {
    if (this.parent.childElementCount - 3 < count) {
      for (let i = 0; i < count; i += 1) {
        const divEl = document.createElement('div');
        divEl.className = 'messageBlock';
        divEl.innerHTML = `
          <span class="nameAndDate">${arr[i][1]}, ${arr[i][0]}</span>
          <span class="message">${arr[i][2]}</span>`;

        // добавляет перед "меню"
        this.parent.insertBefore(divEl, this.parent.lastChild);
      }
    } else {
      const divEl = document.createElement('div');
      divEl.className = 'messageBlock';
      divEl.innerHTML = `
        <span class="nameAndDate">${arr[count - 1][1]}, ${arr[count - 1][0]}</span>
        <span class="message">${arr[count - 1][2]}</span>`;

      // добавляет перед "меню"
      this.parent.insertBefore(divEl, this.parent.lastChild);
    }
  }

  createUsersList() {
    const divEl = document.createElement('div');
    divEl.className = 'usersList';
    divEl.setAttribute('data-id', 'usersList');
    divEl.innerHTML = `
    <ul data-id="usersListUl">
      <li class="userLi red">You</li>
    </ul>`;

    const messagesDesk = document.querySelector('[data-id=messagesDesk]');
    // добавляет перед "messagesDesk"
    this.parent.insertBefore(divEl, messagesDesk);
  }

  addOnlineUsers(arr, count) {
    try {
      if (this.usersArr.length === count) {
        return;
      }
    } catch (error) {
      console.log(error);
    }
    for (let i = 1; i < count; i += 1) {
      const liEl = document.createElement('li');
      liEl.className = 'userLi';
      liEl.innerHTML = `${arr[i]}`;

      const ulEl = this.parent.querySelector('[data-id=usersListUl]');
      // добавляет перед "меню"
      ulEl.insertBefore(liEl, ulEl.firstChild);
    }
  }

  addEventListeners() {
    this.ws.addEventListener('open', () => {
      console.log('connected');
      this.ws.send(['getUsers']);
    });

    this.ws.addEventListener('close', (evt) => {
      console.log('connection closed', evt);
    });

    this.ws.addEventListener('error', (event) => {
      console.log('error');
      console.log(event);
    });

    this.ws.addEventListener('message', (evt) => {
      this.messagesArr = this.splitString(evt.data);
      console.info(this.messagesArr);
      console.log(this.messagesArr[0]);

      if (this.messagesArr[0].toString() === 'usersArr') {
        console.log('пришли пользователи');
        this.addOnlineUsers(this.messagesArr, this.messagesArr.length);
        this.usersArr = this.messagesArr;
      } else {
        this.addMessages(this.messagesArr, this.messagesArr.length);
      }
    });
  }

  addEventListenerTextArea() {
    this.textareaEl.addEventListener('keypress', (event) => {
      if (event.charCode === 13) {
        this.createMyMessage(this.textareaEl.value);
        this.textareaEl.value = '';
      }
    });
  }

  createMyMessage(message) {
    const divEl = document.createElement('div');
    divEl.classList = 'messageBlock You';
    const timeNow = new SetDayNow(new Date()).create();
    divEl.innerHTML = `
      <span class="nameAndDate">You, ${timeNow}</span>
      <span class="message">${message}</span>`;

    const nickNamee = this.nickName.value;
    console.log(nickNamee);
    this.ws.send(`${timeNow}|+|${nickNamee}|+|${message}`);

    // добавляет перед "меню"
    this.parent.insertBefore(divEl, this.parent.lastChild);
  }

  splitString(stringToSplit) {
    const arrayOfStrings = stringToSplit.split(',');
    const arrayOfStringsFinal = [];
    for (let i = 0; i < arrayOfStrings.length; i += 1) {
      arrayOfStringsFinal.push(arrayOfStrings[i].split('|+|'));
    }
    return arrayOfStringsFinal;
  }

  addEventListenerSubmit(btn, formEl) {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      this.nickName = this.parent.querySelector('[data-id=nickName]');
      if (this.findTheSame(this.usersArr, this.nickName.value)) {
        console.log('уже такой есть');
        const pEl = document.createElement('p');
        pEl.innerHTML = 'Ник уже занят, попробуйте другой';
        formEl.appendChild(pEl);
        setInterval(() => {
          pEl.remove();
        }, 1500);
      } else {
        formEl.remove();
        const nickName = this.nickName.value;
        this.ws.send(['nick', nickName.toString()]);
      }
    });
  }

  findTheSame(array, value) {
    for (let i = 0; i < array.length; i += 1) {
      if (array[i][0] === value) return true;
    }
    return false;
  }
}
