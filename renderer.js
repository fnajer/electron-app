const versionEl = document.querySelector('#version');
const { ipcRenderer } = require('electron');

document.querySelector('#new-window').addEventListener('click', () => {
	ipcRenderer.send('create-window');
})

versionEl.innerText = process.versions.electron;