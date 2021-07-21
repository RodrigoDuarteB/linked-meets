const { ipcRenderer } = window.require('electron')

const minimize = () => {
    ipcRenderer.send('minimizeApp')
}

export { minimize }