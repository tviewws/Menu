

function toggleOrderSection() {
    const orderSection = document.querySelector('.order-section');
    orderSection.classList.toggle('visible');
  }
  
 
  const menu = document.querySelector('.menu');
  menu.addEventListener('mouseover', toggleOrderSection);
  menu.addEventListener('mouseout', toggleOrderSection);
  
  function handleSubmit(event) {
    event.preventDefault(); 
    const name = document.querySelector('#name').value;
    const item = document.querySelector('#item').value;
    const quantity = document.querySelector('#quantity').value;
  
  
    alert(`Thank you, ${name}! You ordered ${quantity} ${item}(s).`);
  }
  
  const orderForm = document.querySelector('.order-form form');
  orderForm.addEventListener('submit', handleSubmit);
  