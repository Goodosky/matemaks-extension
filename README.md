> **⚠ UWAGA: Wtyczka nie jest powiązana z firmą Matemaks Michał Budzyński. Wtyczka nie jest oficjalnym rozszerzeniem serwisu matemaks.pl**

<p align="center">
    <img align="center" alt="ikona wtyczki" width="180" height="180" src="https://github.com/Goodosky/matemaks-extension/blob/main/public/icons/matemax-extension-icon.svg">
</p>
<h1 align="center">Matemaks extension</h1>

Wtyczka dodająca na matemaks.pl przyciski, które są ukryte za paywall'em. Można korzystać z funkcji premium, bez potrzeby logowania :D

Wtyczka dodaje:

- Przycisk szybkiej odpowiedzi. Po kliknięciu pokazuje się od razu odpowiedź do zadania. Nie trzeba włączać filmiku i przewijać na koniec, aby sprawdzić odpowiedź. Działa to identycznie, jak na koncie premium.

Dodatkowo po wgraniu danych premium:

- Usuwa belkę z informacją, że treść dostępna tylko dla użytkowników premium,
- Dodaje przycisk z filmikiem do każdej lekcji i każdego pytania
  <br /> <br />

> **Dodatkowe informacje:**
>
> - Każdy dodany przez wtyczkę przycisk jest zakończony gwiazdką (np. Odpowiedź\*).
> - Jeżeli brakuje odpowiedzi lub filmiku do danego pytania, to pojawia się przycisk ze stosowną informacją (np. Brak odpowiedzi\*)

## Instalacja

**Pobierz to repozytorium**

Kliknij w przycisk powyżej z napisem "Code". Rozwinię się okienko, wybierz opcję "Download ZIP". Rozpakuj tego zip'a

A jeżeli masz zainstalowanego git'a, to prościej będzie:

```bash
git clone https://github.com/Goodosky/matemaks-extension
```

**Instalacja w Chrome:**

- Przejdź do strony `chrome://extensions/`
- Upewnij się, że masz zaznaczony "Tryb dewelopera" (prawy górny róg)
- Kliknij "załaduj rozpakowane"
- z plików wtyczki wybierz katalog `dist`

**Instalacja w Firefox (niezalecane):**

- Przejdź do strony `about:debugging#addons`
- Kliknij "Tymczasowo wczytaj dodatek"
- z plików wtyczki wybierz plik `dist/manifest.json`

Niestety wtyczka dodana w Firefox zniknie po zamknięciu przeglądarki i będzie ją trzeba dodać ponownie.

## Skąd wziąć i jak wgrać dane premium?

> **⚠ UWAGA: Ta wtyczka wraz z [Matemaks Scraper](https://github.com/Goodosky/Matemaks-Scraper) dostarcza narzędzia, które de facto można wykorzystać do korzystania z serwisu matemaks.pl bez wykupywania konta premium. Oczywiście, nie zaleca się tego ( ͡° ͜ʖ ͡°). Wato pamiętać, że Matemaks to [człowiek po przejściach](https://www.youtube.com/watch?v=q19dGYgZ8b0) (xD), który poświęcił trochę czasu, aby opracować te zadanka i musisz przyznać, że dupę nie raz ratował. Więc, nie zmuszaj Matemaksa, aby musiał ["zejść na niższy level"](https://streamable.com/wrb7mp) i zapłać chodziaż za te 3 dni.**

Aby być fair wobec Matemaksa, ta wtyczka nie zawiera żadnych danych, które są dostępne tylko dla użytkowników premium.

Dzięki [Matemaks Scraper](https://github.com/Goodosky/Matemaks-Scraper) możliwe jest zalogowanie się na swoje konto na matemaks.pl (z aktywnym premium) i zapisanie linków do filmików, tak aby następnie wczytać je do wtyczki Matemaks extension.

**Aby wygenerować dane premium, które następnie można wgrać do wtyczki, należy:**

1. Pobrać [Matemaks Scraper](https://github.com/Goodosky/Matemaks-Scraper)

   ```bash
   git clone https://github.com/Goodosky/Matemaks-Scraper
   ```

2. Spełniać wymagania scraper'a, czyli mieć zainstalowany Python 3, Selenium oraz pobrany sterownik dla Twojej przeglądarki ([Więcej informacji](https://github.com/Goodosky/Matemaks-Scraper#wymagania))

3. Wygenerować dane za pomocą metody generate_data_for_matemaks_extension()

   Może to wyglądać np. tak:

   ```python
   # Po zapisaniu tego kodu do pliku, uzupełnieniu danych logowania i uruchomieniu skryptu
   # dane zostaną zapisane do output/data_for_matemaks_extension.json
   from matemaks_scraper import MatemaksScraper
   MatemaksScraper("[Twój login do matemaks]", "[Twóje haslo do matemaks]").generate_data_for_matemaks_extension()
   ```

**Aby wgrać dane do wtyczki należy:**

- Wgrać dane klikając w ikonkę wtyczki na pasku górnym i wybierając przycisk "Wgraj dane"

lub

- Wgrać dane klikając "Wybierz plik" banerze który powinien się automatycznie wyświetlić, gdy nie wgrano jeszcze danych, a jest się na stronie matemaks.pl

Plik można wygenerować też oczywiście samemu. Wtyczka obsługuje json o następującej strukturze:

```js
{
    "lessons_info": { // Informacje o lekcjach
        "basic_matura": { // Lekcje z kursu podstawowego
            "1": "i47Xv-XUCfA", // numer lekcji: id flimu na yt
            ...
        },
        "extended_matura": { // Lekcje z kursu rozszerzonego
            "1": "gM7eBgF3tBs", // numer lekcji: id flimu na yt
            ...
        },
    },
    "questions": { // Informacje o pytaniach
        "1846": "RoiQqvSOw0U", // id pytania: id flimu na yt
        ...
    }
}
```
