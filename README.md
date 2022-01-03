# My final React project

In order for this project to work I used node v13.10.1 and npm v.8.1.3

## Funcționalități

- Pe prima pagină se va regăsi un formular cu următoarele informații: nume, prenume, meserie, salariu, data angajării(data submiterii formularului e data prestabilită ca fiind data angajării)
- La submiterea formularului, informațiile completate de utilizator sunt salvate și afișate într-o altă pagină
- Pe lângă butonul de submit, în pagină avem și un buton care redirectează pe o altă pagină (Lista de persoane)
- În cea de-a doua pagină se află persoanele introduse din formular, afișate sub formă de listă
- În partea stângă a listei sunt 5 butoane(sau checkbox-uri): 2 precedate de titlul “Sortează după”: „nume” și „preț” și 3 precedate de titlul „Filtrează după preț”: “<2500”, “2500-4000”, “>4000” 
- Pagina conține un buton prin care ne întoarcem la formularul de submitere a datelor
- ATENȚIE! Când dăm refresh la pagina 2. sau când revenim în ea din pagina 1. persoanele sunt afișate după ordinea inițială (array-ul original nu se pierde).


## Concepte utilizate

- React Router
- Redux
- Boostrap
