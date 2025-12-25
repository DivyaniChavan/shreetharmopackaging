// script.js - interactivity for product modal, contact form and UI helpers
document.addEventListener('DOMContentLoaded', function () {
  // Fill footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // product modal population
  var productModal = document.getElementById('productModal');
  if (productModal) {
    productModal.addEventListener('show.bs.modal', function (event) {
      var btn = event.relatedTarget;
      var title = btn.getAttribute('data-title') || 'Product';
      var img = btn.getAttribute('data-img') || 'images/placeholder.png';
      var desc = btn.getAttribute('data-desc') || '';

      var label = document.getElementById('productModalLabel');
      var titleEl = document.getElementById('productModalTitle');
      var imgEl = document.getElementById('productModalImg');
      var descEl = document.getElementById('productModalDesc');

      if (label) label.textContent = title;
      if (titleEl) titleEl.textContent = title;
      if (imgEl) imgEl.src = img;
      if (descEl) descEl.textContent = desc;
    });
  }

  // Gallery lightbox modal
  var lightboxModal = document.getElementById('lightboxModal');
  if (lightboxModal) {
    lightboxModal.addEventListener('show.bs.modal', function (event) {
      var trigger = event.relatedTarget;
      var img = trigger.getAttribute('data-img') || trigger.href || 'images/placeholder.png';
      var lbImg = document.getElementById('lightboxImg');
      if (lbImg) lbImg.src = img;
    });
  }

  // contact form (demo) - prevents reload and shows a quick success message
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      // gather data
      var name = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      var message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        alert('Please fill all required fields.');
        return;
      }

      // simulate sending — in a real site you'd send via fetch to your backend or email service
      contactForm.reset();
      var submitBtn = contactForm.querySelector('button[type="submit"]');
      var origText = submitBtn ? submitBtn.textContent : 'Send';
      if (submitBtn) submitBtn.textContent = 'Sent!';
      setTimeout(function () {
        if (submitBtn) submitBtn.textContent = origText;
      }, 2000);

      // show a friendly confirmation
      alert('Thanks — your message has been noted. We will contact you soon!');
    });
  }

  // Smooth scroll for internal links (only if element exists)
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href === "#" || href.indexOf('#') !== 0) return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // View More button behaviour (if present)
  var viewMoreBtn = document.getElementById('viewMoreBtn');
  if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', function(e){
      e.preventDefault();
      var el = document.getElementById('gallery');
      if (el) el.scrollIntoView({behavior:'smooth'});
    });
  }
});
