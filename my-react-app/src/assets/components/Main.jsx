
import ProductList from "../ComponentsTwo/productListes"; 

export default function Main() {
    return (
        <main>
            <section className="black-hero">
                <ProductList />
            </section>

            <section className="blue-section">
                {/* ... il resto del tuo codice (Digital Comics, ecc.) */}
            </section>
        </main>
    );
}