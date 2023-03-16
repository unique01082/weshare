 (function () {
  const _root = document.querySelector('#root');
  if (_root && _root.innerHTML === '') {
    _root.innerHTML = `
    <style>
    html,
    body,
    #root {
      height: 100%;
      margin: 0;
      padding: 0;
    }
    #root {
      background-repeat: no-repeat;
      background-size: 100% auto;
    }

    .rotate {
      animation: rotation 8s infinite linear;
    }

    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
    }
  </style>
  <div
    style="
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      min-height: 420px;
    "
  >
    <img
      src="/logo-color.svg"
      class="rotate"
      width="10%"
      height="10%"
    />
  </div>
    `;
  }
})();
