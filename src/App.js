// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="teaMenu" >
        <header>
            <h1 class="animate__animated animate__backInLeft" >RL Teashop</h1>
            <p class="established">Service since 2022</p>
        </header>
        <hr class="top-line" />
        <main>
           
            <section>
                <h2>Tea</h2>
                <article class="teaItem">
                    <p class="teaFlavor">Aloe Tea</p><p class="teaPrice">&#x20B1; 82.00</p>
                </article>
                <article class="teaItem">
                    <p class="teaFlavor">Apply Flower Tea</p><p class="teaPrice">&#x20B1; 77.00</p>
                </article>
                <article class="teaItem">
                    <p class="teaFlavor">Assam Black Tea</p><p class="teaPrice">&#x20B1; 110.00</p>
                </article>
                <article class="teaItem">
                    <p class="teaFlavor">Broken Orange Pekoe</p><p class="teaPrice">&#x20B1; 83.00</p>
                </article>
                <article class="teaItem">
                    <p class="teaFlavor">Bitter Buckwheat Tea</p><p class="teaPrice">&#x20B1; 109.00</p>
                </article>
            </section>
          
            <section>
                <h2>Tea Collection</h2>
                <article class="teaItem">
                    <p class="teaCollection">Black Tea</p><p class="collectionPrice">&#x20B1; 221</p>
                </article>
                <article class="teaItem">
                    <p class="teaCollection">Green Tea</p><p class="collectionPrice">&#x20B1; 96</p>
                </article>
                <article class="teaItem">
                    <p class="teaCollection">Oolong Tea</p><p class="collectionPrice">&#x20B1; 120</p>
                </article>
                <article class="teaItem">
                    <p class="teaCollection">Puerh Tea</p><p class="collectionPrice">&#x20B1; 130</p>
                </article>
            </section>
            <hr class="bottom-line" />
            <footer>
                <p><a href="#">Visit our website</a></p>
                <p>0001 Marilao, Bulacan</p>
            </footer>
        </main>
    </div>
    </div>
  );
}

export default App;
