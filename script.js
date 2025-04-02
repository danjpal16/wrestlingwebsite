const list = document.getElementById('linkList');
    const itemHeight = 50; // Height of each list item
    let currentIndex = 0;

    function scrollUp() {
      if (currentIndex > 0) {
        currentIndex--;
        list.style.top = `-${currentIndex * itemHeight}px`;
      }
    }

    function scrollDown() {
      if (currentIndex < list.children.length - 1) {
        currentIndex++;
        list.style.top = `-${currentIndex * itemHeight}px`;
      }
    }