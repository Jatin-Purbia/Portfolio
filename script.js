// sidebar
const toggleButton = document.getElementById("lines");
const sidebar = document.querySelector(".sidebar");

// Add click event listener to the toggle button
toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("open"); // Toggle the 'open' class on the sidebar
  
  // Toggle the icon class
  if (sidebar.classList.contains("open")) {
    toggleButton.classList.remove("ri-menu-3-line");
    toggleButton.classList.add("ri-close-line");
  } else {
    toggleButton.classList.remove("ri-close-line");
    toggleButton.classList.add("ri-menu-3-line");
  }
});


document.addEventListener("scroll", () => {
    const cards = ["#p1", "#p2", "#p3", "#p4"].map(id => document.querySelector(id));
    
    cards.forEach((card, index) => {
      let shrinkFactor = 1; // Start with no scaling (full size)
  
      for (let i = index + 1; i < cards.length; i++) {
        const nextCard = cards[i];
  
        if (nextCard) {
          const cardRect = card.getBoundingClientRect();
          const nextCardRect = nextCard.getBoundingClientRect();
  
          // Calculate the amount of overlap between this card and the next
          const overlap = Math.max(0, cardRect.bottom - nextCardRect.top);
  
          // Add shrinking effect for each subsequent card stacking on top
          shrinkFactor -= (overlap / cardRect.height) * 0.05;
        }
      }
  
      // Clamp the shrink factor to avoid extreme shrinking
      shrinkFactor = Math.max(0.8, shrinkFactor);
  
      // Apply the shrinking transformation
      card.style.transform = `scale(${shrinkFactor})`;
    });
  });


  // for scrolling to different div's
document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start' // Align to the top of the viewport
    });
  });
});


var cursor = document.querySelector("#cursor");
var main = document.querySelector("#main");

main.addEventListener('mousemove', function(dets) {
  // Get the position of the #main container relative to the viewport
  var rect = main.getBoundingClientRect();
  
  // Move the cursor relative to the #main container
  gsap.to(cursor, {
    x: dets.clientX - rect.left - cursor.offsetWidth / 2, // Adjust position based on container
    y: dets.clientY - rect.top - cursor.offsetHeight / 2, // Adjust position based on container
    duration:0.1,
  });
});
main.addEventListener('wheel', function(dets) {
  // Get the position of the #main container relative to the viewport
  var rect = main.getBoundingClientRect();
  
  // Move the cursor relative to the #main container
  gsap.to(cursor, {
    x: dets.clientX - rect.left - cursor.offsetWidth / 2, // Adjust position based on container
    y: dets.clientY - rect.top - cursor.offsetHeight / 2, // Adjust position based on container
    duration:0.1,
  });
});


var cursor = document.querySelector('#cursor');
var jatin = document.querySelector('.jatin');

// List of elements by their IDs
const elements = document.querySelectorAll('#menu, #resume, #contact_right button, #p_left a');
// Loop through each link and add event listeners
elements.forEach(element => {
  element.addEventListener('mousemove', (event) => {
    gsap.to(cursor, {
      scale: 3,                  // Scale the cursor
        backgroundColor: 'grey',   // Change background color
        borderColor: 'grey',       // Change border color
        opacity: 0.3,              // Set the opacity
        duration: 0.1              // Smooth transition
    });
  });

  element.addEventListener('mouseleave', () => {
    gsap.to(cursor, {
      scale: 1,                  // Reset the scale
        backgroundColor: 'transparent', // Reset background color
        borderColor: 'grey',       // Reset border color
        opacity: 1,                // Reset opacity
        duration: 0.1             // Smooth transition
    });
  });

  element.addEventListener('wheel', () => {
    gsap.to(cursor, {
      scale: 1,                 // Reset scale back to 1
    borderColor: 'grey',      // Reset border color to grey
    backgroundColor: 'transparent', // Reset background color
    backgroundImage: 'none',
    opacity: 1,               // Reset opacity back to normal
    duration: 0.1             // Smooth transition
    });
  });
});


const links = document.querySelectorAll('#but a');
// Loop through each link and add event listeners
links.forEach(link => {
  link.addEventListener('mousemove', (event) => {
    gsap.to(cursor, {
      x: event.pageX,
      y: event.pageY,
      scale: 3,                  // Scale the cursor
        backgroundColor: 'grey',   // Change background color
        borderColor: 'grey',       // Change border color
        opacity: 0.3,              // Set the opacity
        duration: 0.1            // Smooth transition
    });
    cursor.textContent = "Connect";  

  });

  link.addEventListener('mouseleave', () => {
    gsap.to(cursor, {
      scale: 1,                 // Reset scale back to 1
      borderColor: 'grey',      // Reset border color to grey
      backgroundColor: 'transparent', // Reset background color
      opacity: 1,               // Reset opacity back to normal
      duration: 0.1             // Smooth transition
    });
    cursor.textContent = "";
  });
});

const headings = document.querySelectorAll('.title, #about h1, #projects h1, #tech-stack h1');
// Loop through each link and add event listeners
headings.forEach(heading => {
  heading.addEventListener('mousemove', (event) => {
    gsap.to(cursor, {
      x: event.pageX,
      y: event.pageY,
      scale: 3,                 
      backgroundImage: 'url(media/pointer.png)',
      borderColor: 'transparent',   
      duration: 0.1         // Smooth transition
    });
  });

  heading.addEventListener('mouseleave', () => {
    gsap.to(cursor, {
      scale: 1,                 // Reset scale back to 1
    borderColor: 'grey',      // Reset border color to grey
    backgroundColor: 'transparent', // Reset background color
    backgroundImage: 'none',
    opacity: 1,               // Reset opacity back to normal
    duration: 0.1             // Smooth transition
    });
  });

  heading.addEventListener('wheel', () => {
    gsap.to(cursor, {
      scale: 1,                 // Reset scale back to 1
    borderColor: 'grey',      // Reset border color to grey
    backgroundColor: 'transparent', // Reset background color
    backgroundImage: 'none',
    opacity: 1,               // Reset opacity back to normal
    duration: 0.1             // Smooth transition
    });
  });
});


const infos = document.querySelectorAll('#textabout p');
// Loop through each link and add event listeners
infos.forEach(info => {
  info.addEventListener('mousemove', (event) => {
    gsap.to(cursor, {
      x: event.pageX,
      y: event.pageY,
      scale: 1,                 
      backgroundImage: 'url(media/search.png)',
      borderColor: 'transparent',   
      duration: 0.1         // Smooth transition
    });
  });

  info.addEventListener('mouseleave', () => {
    gsap.to(cursor, {
      scale: 1,                 // Reset scale back to 1
    borderColor: 'grey',      // Reset border color to grey
    backgroundColor: 'transparent', // Reset background color
    backgroundImage: 'none',
    opacity: 1,               // Reset opacity back to normal
    duration: 0.1             // Smooth transition
    });
  });

  info.addEventListener('wheel', () => {
    gsap.to(cursor, {
      scale: 1,                 // Reset scale back to 1
    borderColor: 'grey',      // Reset border color to grey
    backgroundColor: 'transparent', // Reset background color
    backgroundImage: 'none',
    opacity: 1,               // Reset opacity back to normal
    duration: 0.1             // Smooth transition
    });
  });
});


// scrambling of letters
const letters = "abcdefghijklmnopqrstuvwxyz";

let intervals = {}; // Keep track of intervals for each item

document.querySelectorAll("#menu .scroll-link").forEach((menuItem) => {
  const originalText = menuItem.dataset.value;

  menuItem.style.width = `${menuItem.offsetWidth}px`; // Lock width dynamically based on the original text

  menuItem.onmouseover = (event) => {
    let iteration = 0;

    // Clear any existing interval for this menu item
    clearInterval(intervals[menuItem]);

    // Start a new interval
    intervals[menuItem] = setInterval(() => {
      event.target.innerText = originalText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return originalText[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= originalText.length) {
        clearInterval(intervals[menuItem]); // Stop the interval
      }

      iteration += 1 / 3; // Adjust speed of resolution
    }, 30); // Adjust update frequency
  };

  menuItem.onmouseleave = (event) => {
    // Reset text to the original value on mouse leave
    clearInterval(intervals[menuItem]); // Clear the interval
    event.target.innerText = originalText;
  };
});


// contact form
const form = document.getElementById("contactForm");
  const modal = document.getElementById("messageModal");
  const closeModal = document.getElementById("closeModal");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission

    // Submit form data to the server
    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then(() => {
        // Show the modal
        modal.style.display = "flex";

        // Optionally reset the form
        form.reset();
      })
      .catch((error) => {
        alert("There was an error submitting your form. Please try again.");
      });
  });

  // Close the modal when the "OK" button is clicked
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });



// Clock
function updateClock() {
  const now = new Date(); // Get the current date and time
  let hours = now.getHours(); // Get hours in 24-hour format
  const minutes = String(now.getMinutes()).padStart(2, '0'); // Add leading zero
  const seconds = String(now.getSeconds()).padStart(2, '0'); // Add leading zero
  
  const amPm = hours >= 12 ? 'PM' : 'AM'; // Determine AM or PM
  hours = hours % 12 || 12; // Convert to 12-hour format (0 becomes 12)
  
  // Format the time with AM/PM
  const timeString = `${hours}:${minutes}:${seconds} ${amPm}`;
  
  // Display the time
  document.getElementById('clock').textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display time immediately
updateClock();