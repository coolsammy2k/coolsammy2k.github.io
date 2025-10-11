// Typewriter loop for hero typed-text
const phrases = ["Security Leader", "Red Teamer", "CISO Advisor"];
let iPhrase = 0, iChar = 0, isDeleting = false;
const el = document.querySelector('.typed-text');

function typeLoop(){
  if(!el) return;
  const current = phrases[iPhrase];
  if(!isDeleting){
    el.textContent = current.substring(0, iChar+1);
    iChar++;
    if(iChar === current.length){
      isDeleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    el.textContent = current.substring(0, iChar-1);
    iChar--;
    if(iChar === 0){
      isDeleting = false;
      iPhrase = (iPhrase+1) % phrases.length;
    }
  }
  setTimeout(typeLoop, isDeleting ? 60 : 120);
}

// Start after the intro has faded
window.addEventListener('load', () => {
  // wait slightly longer than the intro fadeOut (which runs at 6s then 2s)
  setTimeout(typeLoop, 7000);
});

