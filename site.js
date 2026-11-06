document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

document.querySelectorAll('[data-contact-form]').forEach((form) => {
  const button = form.querySelector('[type="submit"]');
  const status = form.querySelector('.form-status');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    button.disabled = true;
    button.textContent = 'Envoi en cours…';
    status.style.display = 'block';
    status.style.background = '#f1f3ed';
    status.style.color = '#344238';
    status.textContent = 'Votre message est en cours d’envoi.';
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form)))
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || 'Échec de l’envoi.');
      status.style.background = '#e6f4e8';
      status.style.color = '#205c35';
      status.textContent = 'Merci ! Votre message a bien été envoyé.';
      form.reset();
    } catch (error) {
      status.style.background = '#fff0ed';
      status.style.color = '#8b2f24';
      status.textContent = 'Le message n’a pas pu être envoyé. Réessayez ou contactez-nous sur WhatsApp.';
    } finally {
      button.disabled = false;
      button.textContent = 'Envoyer le message';
    }
  });
});
