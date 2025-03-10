'use client';
import Link from 'next/link';

const KeranjangPage = () => {
  return (
    <section className="bookmarks">
      <div className="container">
        {/* <h2 className="heading-2">
          Produk di Keranjangmu{" "}
          <span className="amount">(0)</span>
        </h2> */}
        <div style={{ textAlign: 'center', marginTop: '10rem' }}>
          <h3 style={{ marginTop: '3rem', marginBottom: '2rem' }}>Oops! Keranjangmu masih kosong.</h3>
          <Link href="/" className="shop-now-button" onClick={() => setIsCartOpen(false)}>
            Mulai Belanja
          </Link>
        </div>
        {/* {recipes.length > 0 ? (
          <>
            <h2 className="heading-2">
              Resep yang kamu simpan{" "}
              <span className="amount">({recipes.length})</span>
            </h2>
            <RecipeList recipes={recipes} />
          </>
        ) : (
          <div style={{ textAlign: "center", marginTop: "10rem" }}>
            <img src={noDataImg} className="illustration" alt="" />
            <h3 style={{ marginTop: "3rem" }}>
              Belum ada resep yang Disimpan!
            </h3>
          </div>
        )} */}
      </div>
    </section>
  );
};

export default KeranjangPage;
