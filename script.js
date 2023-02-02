const begynnelse = ['jeg','du','han','hun','de'];
const midten = ['er','løper','danser','spiser','kan','spiller','hopper'];
const slutt = ['bra','rundt','på','av','ned','opp','alt','musikk'];

console.log(`${begynnelse[Math.floor(Math.random() * begynnelse.length)]} ${midten[Math.floor(Math.random() * midten.length)]} ${slutt[Math.floor(Math.random() * slutt.length)]}`);