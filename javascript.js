function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to handle scroll event
  function handleScroll() {
    var element = document.querySelector('.animated-element');
    if (isElementInViewport(element)) {
      element.classList.add('animate');
    }
  }
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);