const {app, Menu} = require('electron');
const isWindows = process.platform === 'win32';
const { showMessage, showSaveDialog } = require('./dialogs.js');

module.exports = {
	setMainMenu,
};

function setMainMenu(browserWindow) {
	const template = [
		{
			label: isWindows ? 'File' : app.getName(),
			submenu: [
				{
					label: 'Say Hello',
					click() {
						showMessage(browserWindow);
					}
				},
				{
					label: 'Save Memory Usage Info',
					click() {
						showSaveDialog(browserWindow);
					}
				},
				{
					label: 'Open File',
					click() {

					}
				},
				{ type: 'separator' },
				{ role: 'quit' },
			],
		},
		{
			label: 'Edit',
			submenu: [
				{ role: 'undo' },
				{ role: 'redo' },
				{ type: 'separator' },
				{ role: 'cut' },
				{ role: 'copy' },
				{ role: 'paste' },
				{ role: 'selectAll' },
			],
		}
	];

	const menu = Menu.buildFromTemplate(template);
	Menu.setApplicationMenu(menu);
}