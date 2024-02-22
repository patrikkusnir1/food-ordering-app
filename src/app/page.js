import Header from "./components/layout/Header"
import Hero from "./components/layout/Hero"
import HomeMenu from "./components/layout/HomeMenu"
import SectionHeaders from "./components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders
          subHeader={"Our story"}
          mainHeader={"About us"}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Cupcake ipsum dolor sit amet chupa chups gummi bears marshmallow gummi bears. Fruitcake halvah I love danish jujubes powder cake tootsie roll. Jujubes pudding sweet bear claw pastry wafer. Sweet oat cake donut tootsie roll cake lemon drops powder I love candy. Dessert gingerbread chocolate soufflé sesame snaps marzipan. Cheesecake toffee sweet muffin dragée gingerbread cake I love. Candy fruitcake cupcake apple pie I love pudding chupa chups. Biscuit icing cake powder chocolate chocolate bar tootsie roll oat cake.
          </p>
          <p>
            Cupcake ipsum dolor sit amet chupa chups gummi bears marshmallow gummi bears. Fruitcake halvah I love danish jujubes powder cake tootsie roll. Jujubes pudding sweet bear claw pastry wafer. Sweet oat cake donut tootsie roll cake lemon drops powder I love candy. Dessert gingerbread chocolate soufflé sesame snaps marzipan. Cheesecake toffee sweet muffin dragée gingerbread cake I love. Candy fruitcake cupcake apple pie I love pudding chupa chups. Biscuit icing cake powder chocolate chocolate bar tootsie roll oat cake.
          </p>
          <p>
            Cupcake ipsum dolor sit amet chupa chups gummi bears marshmallow gummi bears. Fruitcake halvah I love danish jujubes powder cake tootsie roll. Jujubes pudding sweet bear claw pastry wafer. Sweet oat cake donut tootsie roll cake lemon drops powder I love candy.
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"} />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+79186015947">+7 918 601 59 47</a>
        </div>
      </section>
    </>
  );
}
