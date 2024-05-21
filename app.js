// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const { createApp, ref } = Vue

  createApp({
    data() {
       
      return {
        titolo: 'sto usando vue',
        paragrafo: 'ma ancora non ho fatto il bonus'
      }
    }
  }).mount('#app')