# Agenda

## Intro

### Kort overview av arkitekturen og utfordringer

Tegne opp de viktigste komponentene og de viktigste kommunikasjonskanalene. Vise hvordan spørreskjemaet driver appen.

Huske å nevne at det ikke hentes mer data fra server, det bare sendes.

### Kort overview av Angular

Nevne litt om hvilke utfordringer Angular er god til og de viktigste komponentene det består av.

Nevne litt om bakgrunnen til Angular, hvor kommer det fra.

## Irritations

### Instansiering av komponenter

Snakke litt om hvordan komponenter instansieres og sammenligne angulars direktiv-instansiering med Backbone eller React. Snakke litt om hvordan direktivkompilering og lifecycle er fucked up. Kanskje nevne animasjonsbehov her. Her kommer også scope-arving inn.

Når er det bra? Hvis du har veldig html-drevet utvikling og godt isolerte komponenter.

### "Dependency Injection" aka Modules

Snakke om hvorfor DI-opplegget er kjipt sammenligna med feks CommonJS for å dele kode. Her kommer også kombabilitet med resten av JS-økosystemet inn.

Når er det bra? Hvis du har veldig kompleks domenemodell med mange ulike behov for stateful services

### Dirtychecking / To-veis-binding

Snakke om hvordan dirtychecking-loopen er en major WTF. Sammenligne med enkel observer-pattern. Her kommer også event-triggering inn, og hvorfor i alle dager Angular er så vanskelig på det.

Når er det bra? Når du har mye inputs og mange bindinger mot DOM.

### Routing

Snakke om routing og hvor kjipt det er.

### Testing

Snakke om hvordan DI-opplegget til Angular gjør testing unødvendig vanskelig. Sammenligne med enkel TAP + Browserify oppsett.

Når er det bra? Samme som over, når du har veldig spesifike behov for stubbing og mocking

## Wrap up

### Complexity buy-in

### Avoiding the hype

### Simple vs Easy

### Angular 2.0