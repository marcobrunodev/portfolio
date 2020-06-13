const $canonical = document.querySelector('link[rel=canonical]');
const url = $canonical ? $canonical.getAttribute('href') : window.location.href;

function facebook() {
  const width = 630;
  const height = 630;

  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;

  window.open(
    `http://www.facebook.com/sharer.php?u=${url}`,
    'Compartilhar no facebook',
    `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`
  );
}

function share(event) {
  if (navigator && navigator.share) {
    navigator
      .share({
        title: '',
        text: 'Site com uma lista de conteúdos gratuitos e online sobre programação',
        url,
      })
      .then(function () {
        console.log('Funcionou!!');
      })
      .catch(function (err) {
        console.error(err);
      });
  } else {
    facebook();
  }
  event.preventDefault();
}

export default share;
