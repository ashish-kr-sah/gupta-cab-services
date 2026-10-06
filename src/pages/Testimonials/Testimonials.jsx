import PageHead from "../../components/PageHead/PageHead";
import Reviews from "../../sections/Reviews/Reviews";

export default function Testimonials() {
  return (
    <>
      <PageHead title="Customer" highlight="Reviews" text="Real words from travellers who rode with us." />
      <section className="section"><div className="container"><Reviews /></div></section>
    </>
  );
}
