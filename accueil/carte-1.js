let card = document.querySelectorAll('.card-content');
let typo = document.querySelectorAll('.typo');
let bouton = document.querySelectorAll('.btn-card');
let iListn_1 = document.querySelectorAll('.i-1');
let iListn_2 = document.querySelectorAll('.i-2');
let cta = document.querySelectorAll('.cta');
let metier = document.querySelectorAll('.metiers-items');
let ml = document.querySelectorAll('.mi-left');

for (let i = 0; i < card.length; i++) {
    iListn_1[i].style.display = "none";
    cta[i].style.display = "none";
    card[i].addEventListener('mouseover', function () {
        card[i].style.backgroundColor = '#363636';
        typo[i].style.color = '#FFF';
        iListn_2[i].style.marginLeft = '-8px';
        iListn_1[i].style.display = 'inline';
        cta[i].style.display = 'inline';
    });
    card[i].addEventListener('mouseout', function () {
        card[i].style.backgroundColor = 'white';
        typo[i].style.color = 'black';
        bouton[i].style.width = 'max-content';
        iListn_2[i].style.marginLeft = '0';
        iListn_1[i].style.display = 'none';
        cta[i].style.display = 'none';
    })
}
let bt = document.querySelectorAll('.btn-card-dup .i-1');
let bp = document.querySelectorAll('.btn-card-dup .i-2');
let ct = document.querySelectorAll('.cta-dup');
for (let i = 0; i < metier.length; i++) {
    bt[i].style.display = "none";
    ct[i].style.display = "none";
    metier[i].addEventListener('mouseover', function () {
        ml[i].style.backgroundColor = '#CE0033';
        ml[i].style.color = '#FFF';
        metier[i].style.transform = 'scale(1.1)';
        bt[i].style.display = "inline";
        bp[i].style.marginLeft = '-8px';
        ct[i].style.display = "inline";
    });
    metier[i].addEventListener('mouseout', function () {
        ml[i].style.backgroundColor = '#D9D9D9';
        ml[i].style.color = 'black';
        metier[i].style.transform = 'scale(1)';
        bt[i].style.display = "none";
        bp[i].style.marginLeft = '0';
        ct[i].style.display = "none";
    })
}