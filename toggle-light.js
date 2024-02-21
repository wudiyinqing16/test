AFRAME.registerComponent('toggle-light', {
  init: function () {
    // Save a reference to the element this component is attached to
    const el = this.el;

    // Function to toggle the light
    function toggleLight() {
      // Get the current visibility state of the light
      const isVisible = el.getAttribute('visible');
      // Set the opposite visibility state
      el.setAttribute('visible', !isVisible);

      // If the light has been turned on, set a timeout to turn it off after 5 seconds
      if (!isVisible) {
        setTimeout(() => {
          el.setAttribute('visible', false);
        }, 5000);
      }
    }

    // Listen for the 'F' keypress to toggle the light
    document.addEventListener('keydown', (event) => {
      if (event.key === 'f' || event.key === 'F') {
        toggleLight();
      }
    });
  }
});