export const footer = () => {
  const footerView = `
    <footer> <hr> Diseñado y creado por F.A.B © </footer>
`;
  const divFooter = document.createElement('div');
  divFooter.setAttribute('class', 'ViewFooter');
  divFooter.innerHTML = footerView;

  return divFooter;
};
