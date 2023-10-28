# Virtual CV
## mgr inż. Michał Kowalczyk

*Kto pracował w budowlance, w cyrku się nie śmieje ;)*

**Ukończyłem kurs programowania YouCode - Frontend developer od podstaw**

- Java Script
- Html
- CSS
- Git Hub
- Markdown

![mgr inż](https://i.postimg.cc/4s2qJW9s/mgr.jpg)

```javascript
{
    const calculatePrice = () => {
        const price = document.querySelector(".js-price")
        price.addEventListener("submit", (event) => {
            event.preventDefault();

            const powUz = document.querySelector(".js-PU");
            const cenaOdMetra = 250;
            const cena = cenaOdMetra * powUz.value;
            const finalPrice = document.querySelector(".js-finalPrice");
            finalPrice.innerText = cena;
        });
    }

    calculatePrice ();
}
```
Link do strony: https://hirazuku.github.io/My-virtual-CV/