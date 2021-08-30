<template>
  <div>
    <header>
      <h1>Witaj matematyku! 👋</h1>
      <img width="55px" height="55px" src="/icons/matemax-extension-icon.svg" alt="">
    </header>
    <main>
      <!-- Data -->
      <h2>Dane</h2>
      <div class="card">
        <div v-if="hasData" class="data">
          <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 122.88 122.88">
            <path
              fill="#6BBE66"
              d="M34.388 67.984a7.002 7.002 0 01-1.335-2.078 7.018 7.018 0 011.293-7.482l.34-.35a7.053 7.053 0 018.499-.951c.39.233.762.51 1.109.827l.034.031a322.279 322.279 0 007.343 6.79l1.841 1.651 22.532-23.635a6.998 6.998 0 013.52-1.958 7 7 0 011.356-.165h.026a7.46 7.46 0 011.341.103c.437.074.876.193 1.333.369a6.84 6.84 0 012.263 1.426l.162.147c.316.313.601.653.85 1.014.256.369.475.766.652 1.178.183.414.325.852.424 1.299.1.439.154.895.165 1.36v.23a7.224 7.224 0 01-.114 1.204 6.983 6.983 0 01-.963 2.481 6.957 6.957 0 01-.832 1.07l-27.219 28.56a6.844 6.844 0 01-2.205 1.579 7.122 7.122 0 01-2.638.627l-.125.003a7.147 7.147 0 01-1.241-.078l-.102-.02a7.266 7.266 0 01-1.205-.31 7.113 7.113 0 01-1.226-.575l-.063-.04a7.194 7.194 0 01-1.032-.754l-.063-.06c-1.58-1.466-3.297-2.958-5.033-4.466-3.007-2.613-7.178-6.382-9.678-9.02l-.009-.007zM61.44 0c16.96 0 32.328 6.883 43.453 17.987 11.104 11.125 17.986 26.493 17.986 43.453 0 16.961-6.883 32.329-17.986 43.454C93.769 115.998 78.4 122.88 61.44 122.88c-16.961 0-32.329-6.882-43.454-17.986C6.882 93.769 0 78.4 0 61.439 0 44.48 6.882 29.112 17.986 17.987 29.112 6.883 44.479 0 61.44 0zm35.459 25.981C87.826 16.907 75.29 11.296 61.44 11.296c-13.851 0-26.387 5.611-35.46 14.685-9.073 9.073-14.684 21.609-14.684 35.458 0 13.851 5.611 26.387 14.684 35.46s21.609 14.685 35.46 14.685c13.85 0 26.386-5.611 35.459-14.685s14.684-21.609 14.684-35.46c0-13.849-5.61-26.385-14.684-35.458z"
            />
          </svg>
          <p>Dane zostały już wgrane</p>

          <label class="btn" for="upload">Wgraj nowe dane</label>
          <input type="file" accept=".json" id="upload">

          <div class="card--info" style="width: 100%;">Jeżeli coś nie działa, to najprawdopodobniej przesłałeś złe dane. <a href="#">Sprawdź skąd wziąźć dane premium</a></div>
        </div>
        
        <div class="data" v-if="!hasData" >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 122.88 122.88">
            <path
              fill="#FF4141"
              d="M61.44 0c16.96 0 32.328 6.882 43.453 17.986 11.104 11.125 17.986 26.494 17.986 43.453 0 16.961-6.883 32.328-17.986 43.453-11.124 11.106-26.493 17.987-43.453 17.987-16.96 0-32.329-6.881-43.454-17.986C6.882 93.768 0 78.4 0 61.439 0 44.48 6.882 29.111 17.986 17.986 29.112 6.882 44.48 0 61.44 0zm12.012 39.152a7.011 7.011 0 019.986-.026c2.764 2.776 2.775 7.292.027 10.083L71.4 61.445l12.077 12.25c2.728 2.77 2.689 7.256-.081 10.021-2.772 2.766-7.229 2.758-9.954-.012L61.445 71.541 49.428 83.729a7.008 7.008 0 01-9.985.025c-2.763-2.775-2.776-7.291-.026-10.082L51.48 61.435l-12.078-12.25c-2.726-2.769-2.689-7.256.082-10.022 2.772-2.765 7.229-2.758 9.954.013L61.435 51.34l12.017-12.188zM96.899 25.98C87.826 16.907 75.29 11.296 61.44 11.296c-13.851 0-26.387 5.611-35.46 14.685-9.073 9.073-14.684 21.609-14.684 35.459s5.611 26.387 14.684 35.459c9.073 9.074 21.609 14.686 35.46 14.686 13.85 0 26.386-5.611 35.459-14.686 9.073-9.072 14.684-21.609 14.684-35.459s-5.61-26.386-14.684-35.46z"
            />
          </svg>
          <p>Nie wgrano danych premium</p>
          
          <label class="btn" for="upload">Wgraj dane</label>
          <input type="file" accept=".json" id="upload">

          <div class="card--info" style="width: 100%;">Instrukcja: <a href="#">Skąd wziąźć dane premium</a></div>
        </div>
      </div>
      <!-- Buttons -->
      <h2>Przyciski</h2>
      <div class="card">
        <p>Sorry! Na razie nie ma możliwości konfiguracji wtyczki. :(</p>
        <p>
          Domyślnie wtyczka dodaje:
          <ul>
            <li>Przycisk pokazujący odpowiedź do każdego pytania</li>
            <li>Przycisk z filmikiem do każdej lekcji i każdego pytania (wymagane jest wgranie danych premium)</li>
          </ul>
        </p>
        <div class="card--info">Informacja: <span>Wszystkie dodane przez wtyczkę przyciski kończą sie gwiazdką</span></div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref, onMounted } from "@vue/composition-api";
import { getData, createUploadDataListener } from "../functions.js";

export default {
  name: "App",
  setup() {
    const hasData = ref(false);

    getData().then((data) => {
      if (data) {
        hasData.value = true;
      }
    });
    
    onMounted(()=> createUploadDataListener())

    return { hasData };
  },
};
</script>

<style lang="scss">
$primary: #51392c;
$secondary: #f8f3e7;
$background: #fcf9f3;


body {
  width: 450px;
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  background-color: $background;
  margin: 0;
}

header {
  background: $primary;
  padding: 10px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 1.5rem;
    margin: 3px 0;
  }
}

main {
  position: relative;
  min-height: 250px;
  font-size: 17px;
  padding: 0 10px 10px;

  h2 {
    margin: 20px 0 8px;
  }

  button, .btn {
    padding: 7px 14px;
    background-color: $secondary;
    border: 1px solid $primary;
    border-radius: 5px;
    font-size: 16px;
    transition: background-color 0.3s, color 0.3s;
    cursor: pointer;

    &:hover {
      background-color: $primary;
      color: #fff;
    }
  }
}

.card {
  background-color: $secondary;
  border: 1px solid $primary;
  border-radius: 5px;
  padding: 10px;

  &--info {
    margin-top: 16px;
    padding: 7px 10px;
    background-color: $primary;
    color: #fff;
    font-size: 15px;
    border-radius: 4px;

    a {
      color: $background;
    }

    span {
      font-weight: 400;
    }
  }
}

.data {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  p {
    margin: 0 0 0 10px;
  }

  input {
    display: none;
  }

  .btn {
    margin-left: auto;
  }
}
</style>
