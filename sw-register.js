if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(() => console.log('Service Worker registrado con éxito.'))
        .catch(error => console.error('Error registrando el Service Worker:', error));
}
