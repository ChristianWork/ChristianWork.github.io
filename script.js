// DOM Elements
const themeButton = document.getElementById("slot-6");
const body = document.body;

  //Apply chaced theme on reload
  const theme = localStorage.getItem('theme')

  if (theme) {
    body.classList.remove('light', 'dark');
    body.classList.add(theme);
  }

  //Button Event Handlers
  themeButton.onclick = () => {
    if (body.classList.contains('dark')) {
      body.classList.replace('dark', 'light');
      localStorage.setItem('theme', 'light');
    }
    else
    {
      body.classList.replace('light', 'dark');
      localStorage.setItem('theme', 'dark');
    }
};