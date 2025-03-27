import ImagesSlideShow from "./image-slideshow/image-slideshow";

export default function HomeFeatures() {
    return(
        <>
        <main>
          <div className="">
            <ImagesSlideShow/>
          </div>
          <div>
            <div className="">
              <h1>NextLevel Food for NextLevel Foodies</h1>
              <p>Taste & share food from all over the world.</p>
            </div>
          </div>
        
          <section className="">
            <h2>How it works</h2>
            <p>
              NextLevel Food is a platform for foodies to share their favorite
              recipes with the world. It&apos;s a place to discover new dishes, and to
              connect with other food lovers.
            </p>
            <p>
              NextLevel Food is a place to discover new dishes, and to connect
              with other food lovers.
            </p>
          </section>
  
          <section className="">
            <h2>Why NextLevel Food?</h2>
            <p>
              NextLevel Food is a platform for foodies to share their favorite
              recipes with the world. It&apos;s a place to discover new dishes, and to
              connect with other food lovers.
            </p>
            <p>
              NextLevel Food is a place to discover new dishes, and to connect
              with other food lovers.
            </p>
          </section>
        </main>
      </>
    );
}