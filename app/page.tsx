// app/page.tsx
import React from "react";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the PokeApp</h1>
      <p>ポケモン情報ページに移動:</p>
      <Link href="/pokemon">
        <button>ポケモンを表示</button>
      </Link>
    </div>
  );
};

export default HomePage;
