/**
 * Byllora FAQ Accordion
 */
document.addEventListener('DOMContentLoaded', () => {
  const accordionItems = document.querySelectorAll('.faq-item');

  accordionItems.forEach(item => {
    const trigger = item.querySelector('.faq-question');
    const content = item.querySelector('.faq-answer');

    if (trigger && content) {
      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');

        // Optional: close other open items for single-accordion behavior
        accordionItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('is-open')) {
            otherItem.classList.remove('is-open');
            const otherTrigger = otherItem.querySelector('.faq-question');
            if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle current item
        if (isOpen) {
          item.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });
});
